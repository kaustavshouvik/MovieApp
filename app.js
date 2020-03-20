const express           = require("express"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    methodOverride      = require("method-override"),
    User                = require("./models/user"),
    Rating              = require("./models/rating"),
    Actor               = require("./models/actor"),
    Movie               = require("./models/movie"),
    seedActors          = require("./seedActors"),
    seedMovies          = require("./seedMovies");

mongoose.connect("mongodb://localhost/movieappv3", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("cssFiles"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// =====================================================
//      AUTHENTICATION SETUP
app.use(require("express-session")({
    secret: "Bond, James Bond",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//========================================================

// seedActors();
// seedMovies();

//========================================================
//USER DEFINED FUNCTIONS
function title(name) {
    name = name.trim();
    name = name.replace(/\s\s+/g, ' ');
    newName = name.split("");
    newName[0] = newName[0].toUpperCase();
    for (i = 1; i < newName.length; i++) {
        if (newName[i - 1] === ' ') {
            newName[i] = newName[i].toUpperCase();
        }
    }
    name = newName.join("");
    return name;
}

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };
//==========================================================

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

//SHOW HOMEPAGE
app.get("/", (req, res)=>{
    res.render("home");
});

//SHOW ALL MOVIES
app.get("/movies", (req, res)=>{
    Movie.find({}, (err, movies)=>{
        if (err) {
            console.log(err);
        } else {
            res.render("movies/movies", {movies: movies});
        }
    });
});

//SHOW A PAGE TO ADD NEW MOVIES TO THE DATABASE
app.get("/movies/new", isLoggedIn, (req, res)=>{
    res.render("movies/new");
});

//ADD A MOVIE TO THE DATABASE
app.post("/movies", isLoggedIn, (req, res)=>{
    var releaseDate = new Date(req.body.release);           //DATE SETUP
    releaseDate.setHours(releaseDate.getHours() - 5);
    releaseDate.setMinutes(releaseDate.getMinutes() - 30);

    var genres = title(req.body.genres);    //GENRES SETUP
    genres = genres.toLowerCase();
    genres = genres.split(", ");

    var movieTitle = title(req.body.name);
    // var actors = title(req.body.cast);
    var actors = title(req.body.cast);
    actorsArr = actors.split(", ");
    var newMovie = {
        name: movieTitle,
        poster: req.body.poster,
        image: req.body.image,
        genres: genres,
        plot: req.body.plot,
        // boxoffice: {
        //     budget: req.body.budget,
        //     profit: req.body.profit
        // },
        addedBy: {
            id: req.user._id,
            username: req.user.username
        },
        release: releaseDate,
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: req.body.link.prime.trim(),
        netflixLink: req.body.link.netflix.trim(),
        hotstarLink: req.body.link.hotstar.trim(),
        youtubeLink: req.body.link.youtube.trim()
    };

    Movie.create(newMovie, (err, createdMovie)=>{
        if(err){
            console.log(err);
            return res.redirect("/movies/new");
        } else {
            actorsArr.forEach((actor)=>{
                Actor.findOne({"name": actor}, (err, foundActor)=>{
                    if(!foundActor){
                        console.log("no actor found");
                    } else {
                        foundActor.movies.push(createdMovie);
                        // createdMovie.actors.push(foundActor);
                        foundActor.save();
                        // console.log(foundActor);
                        Movie.findOne({"name": movieTitle}, (err, foundMovie)=>{
                            foundMovie.actors.push(foundActor);
                            foundMovie.save();
                        });
                    }
                });
            });
            res.redirect("/movies");
        }
    });
});

//RATING A MOVIE  
app.post("/movies/:id/rating", isLoggedIn, function (req, res) {

    var rateIt = {
        rating: req.body.rating,
        ratedBy: {
            id: req.user._id,
            username: req.user.username
        },
        movie: req.params.id
    };

    function ratingMovie(id){
        Movie.findById(id).populate({path: 'ratings', model: Rating}).exec((err, movieFound)=>{
            if(err){
                console.log(err);
            } else {
                var total = 0, count = movieFound.ratings.length;
                movieFound.ratings.forEach((rating)=>{
                    total = total + Number(rating.rating);
                });
                total = total/count;
                total = total.toFixed(1);
                console.log(total, count);
                Movie.findByIdAndUpdate(id, {$set: {ratingCount: count, ratingValue: total}}, (err)=>{
                    if(err){
                        console.log(err);
                    } else {
                        Movie.findById(id, (err, f)=>{
                            console.log(f);
                        });
                        res.redirect("/movies");
                    }
                });
            }
        });
    }

    Rating.create(rateIt, function (err, newRating) {
        Movie.findById(req.params.id, function (err, foundMovie) {
            if (err) {
                console.log(err);
            } else if(foundMovie.release > Date.now()){
                //DELETE THE NEWLY CREATED RATING AS MOVIE IS NOT RELEASED
                Rating.findByIdAndDelete(newRating._id, (err, deleted)=>{
                    console.log(deleted);
                });
                return res.redirect("/movies");
            } else {
                foundMovie.ratings.push(newRating);
                foundMovie.save((err, savedMovie)=>{
                    if(err){
                        console.log(err);
                    } else {
                        console.log(savedMovie);
                        ratingMovie(savedMovie._id);
                    }
                });
            }
        });
    });
});

//DELETE A MOVIE ALONG WITH RATINGS AND ACTORS[MOVIES DONE LIST]
app.delete("/movies/:id", isLoggedIn, function (req, res) {
    Movie.findById(req.params.id, (err, foundMovie)=>{
        //FOR ALL ACTORS FIND IF THE ACTOR HAS DONE THAT MOVIE, THEN DELETE IT FROM THE ACTOR'S MOVIES LIST
        for(i=0; i<foundMovie.actors.length; i++){
            Actor.findById(foundMovie.actors[i], (err, foundActor)=>{
                for(j=0; j<foundActor.movies.length; j++){
                    if(String(foundActor.movies[j]) == String(foundMovie._id)){
                        break;
                    }
                }
                foundActor.movies.splice(j, 1);
                foundActor.save();
            });
        }
    });

    Movie.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            res.send("ERROR HAPPENED!");
        } else {
            //DELETE ALL THE RATINGS BELONGING TO THAT MOVIE
            Rating.deleteMany({movie: req.params.id}, (err) => {
                if(err){
                    console.log(err);
                }
            });
            console.log("Movie deleted");
            res.redirect("/movies");
        }
    });
});

//SHOW MORE DETAILS ABOUT A MOVIE
app.get("/movies/:id", isLoggedIn, (req, res) => {
    Movie.findById(req.params.id, (err, foundM) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            res.render("movies/show", {movie: foundM});
        }
    });
});

//SHOW THE REVIEWS OF A MOVIE
app.get("/movies/:id/reviews", (req, res) => {
    Movie.findById(req.params.id).populate({path: 'ratings', model: Rating}).exec((err, found) => {
        if (err) {
            console.log(err);
        } else {
            console.log(found);
            res.render("movies/reviews", {movie: found});
        }
    });
});

//SHOW THE CAST OF A MOVIE
app.get("/movies/:id/cast", (req, res) => {
    Movie.findById(req.params.id).populate({path: 'actors', model: Actor}).exec((err, found) => {
        if(err){
            console.log(err);
        } else {
            res.render("movies/cast", {movie: found});
        }
    });
});

//SHOW A PAGE WITH LINKS TO WATCH A MOVIE
app.get("/movies/:id/stream", (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie)=>{
        res.render("movies/stream", {movie: foundMovie});
    });
});
//==================================================================================
//SEARCHING FOR A MOVIE/ACTOR
app.post("/search", (req, res) => {
    name = title(req.body.search);
    Movie.findOne({name: name}, (err, foundMovie) => {
        if (err) {
            console.log(err);
        } else {
            if (!foundMovie) {
                Actor.findOne({name: name}, (err, foundActor) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (!foundActor) {
                            return res.redirect("/movies");
                        }
                        res.redirect("/actors/" + foundActor._id);
                    }
                });
            } else {
                res.redirect("/movies/" + foundMovie._id);
            }
        }
    });
});
//===================================================================================
//===================================================================================
//ACTORS ROUTES
app.get("/actors", (req, res) => {
    Actor.find({}, (err, actors) => {
        if (err) {
            console.log(err);
        } else {
            res.render("actors/actors", {actors: actors});
        }
    });
});

app.get("/actors/new", (req, res) => {
    res.render("actors/new");
});

app.post("/actors", (req, res) => {
    var newActor = {
        name: title(req.body.name),
        image: req.body.image,
        dob: req.body.dob,
        bio: req.body.bio,
    }
    Actor.create(newActor, (err, actor) => {
        if (err) {
            console.log(err);
        } else {
            console.log(actor);
            res.redirect("/actors");
        }
    });
});

app.get("/actors/:id", (req, res) => {
    Actor.findById(req.params.id).populate({path: 'movies', model: Movie}).exec((err, foundActor) => {
        if (err) {
            console.log(err);
        } else {
            console.log(foundActor.name);
            res.render("actors/show", {actor: foundActor});
        }
    });
});

app.delete("/actors/:id", (req, res)=>{
    Actor.findOne({_id: req.params.id}, (err, foundActor)=>{
        foundActor.movies.forEach((movie)=>{
            Movie.findOne({_id: movie}, (err, foundMovie)=>{
                for(i=0; i<foundMovie.actors.length; i++){
                    if(String(foundMovie.actors[i]) == String(foundActor._id)){
                        break;
                    }
                }
                foundMovie.actors.splice(i, 1);
                foundMovie.save();
            });
        })
    });

    Actor.findByIdAndDelete(req.params.id, (err, deletedActor)=>{
        if(err){
            console.log(err);
        } else {
            console.log("Actor deleted");
            res.redirect("/actors");
        }
    });
})

//===================================================================================
//RECOMMENDATION ROUTES

app.get("/recommendation", (req, res) => {
    res.send("THERE WILL BE BLOOOD!");
});

//ROUTE TO SHOW THE HIGHEST RATED MOVIES
app.get("/highest", (req, res) => {
    Movie.find({}).sort({ratingValue: -1}).exec((err, found) => {
        if (err) {
            console.log(err);
        } else if(!found) {
            return res.redirect("/movies");
        } else {
            //FROM ALL THE MOVIES, REMOVE THE UNRATED MOVIE
            var i = 0;
            while (i < found.length && found[i].ratingValue === "Unrated") {
                i++;
            }
            found.splice(0, i);
            res.render("movies/select", {movies: found});
        }
    });
});

//ROUTE TO SHOW THE MOST RATED MOVIES
app.get("/mostrated", (req, res) => {
    Movie.find({}).sort({ratingCount: 1}).exec((err, found) => {
        if (err) {
            console.log(err);
        } else {
            //FROM ALL THE MOVIES, REMOVE THE UNRATED MOVIE
            var i = 0;
            while (i < found.length && found[i].ratingCount === 0) {
                i++;
            }
            found.splice(0, i);
            found.reverse();
            res.render("movies/select", {movies: found});
        }
    });
});

app.get("/upcoming", (req, res)=>{
    Movie.find({}).sort({release: 1}).exec((err, movies)=>{
        if(!movies){
            return res.redirect("/movies");
        }
        var a = Date.now(), i = 0;
        while (i < movies.length && movies[i].release < a) {
            i++;
        }
        movies.splice(0, i);
        for(i=0; i<movies.length; i++){
            console.log(a < movies[i].release);
        }
        res.render("movies/select", {movies: movies});
    });
});

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

app.get("/movies/:id/more", (req, res)=>{
    // var like = 'action', text = '', m = [];
    // Movie.find({}, (err, movies)=>{
    //     movies.forEach((movie)=>{
    //         movie.genres.forEach((genre)=>{
    //             if(genre === like){
    //                 text += '\n' + movie.name;
    //             }
    //         });
    //     });
    //     res.send(text);
    // });
    Movie.findById(req.params.id, (err, foundMovie)=>{
        // res.render("recommendation/more", {movie: foundMovie});
        var like1 = foundMovie.genres[0], like2 = foundMovie.genres[1], m1 = [], m2 = [];
        Movie.find({}, (err, movies)=>{
            movies.forEach((movie)=>{
                movie.genres.forEach((genre)=>{
                    if(genre === like1){
                        m1.push(movie);
                    }
                    if(genre === like2){
                        m2.push(movie);
                    }
                });
            });
            m = intersect(m1, m2);
            res.render("recommendation/more", {recommendedMovies: m, movie: foundMovie});
        });
    });
});
//============================================================================
//USER PROFILE
// app.get("/profile/:id", (req, res)=>{
//     User.findById(req.params.id, (err, foundUser)=>{
//         person = {
//             id: foundUser._id,
//             username: foundUser.username
//         };
//         Rating.find({ratedBy: person}, (err, ratings)=>{
//             res.render("profile", {user: foundUser, ratings: ratings});
//         });
//     });
// });
//===============================================================================

//=============================================================================
//AUTHENTICATION ROUTES

//SHOW THE FORM FOR NEW REGISTRATION OF AN USER
app.get("/register", (req, res) => {
    res.render("register");
});

//ADD NEW USER TO DATABASE AND ALSO LOG IN
app.post("/register", (req, res) => {
    var newUser = new User({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username
    });

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect("/");
        }
        //LOGIN THE NEWLY REGISTERED USER
        passport.authenticate("local")(req, res, function () {
            res.redirect("/movies");
            console.log(user);
        });
    });
});

//SHOW LOGIN FORM
app.get("/login", (req, res) => {
    res.render("login");
});

//LOGGING THE USER IN
app.post("/login", passport.authenticate("local", {
    successRedirect: "/movies",
    failureRedirect: "/login"
}), (req, res) => {});

//LOGOUT ROUTE
app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/movies");
});

//FUNCTION TO CHECK IF USER IS LOGGED IN OR NOT[THIS FUNCTION CAN ADDED TO ANY ROUTE]
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}
//=============================================================================


//=============================================================================
//SERVER SETUP
app.listen(3000, (req, res) => {
    console.log("SERVER STARTED AT PORT 3000!");
});
//==============================================================================