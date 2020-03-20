const express           = require("express"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    methodOverride      = require("method-override"),
    User                = require("./models/user"),
    Rating              = require("./models/rating"),
    Movie               = require("./models/movie");

mongoose.connect("mongodb://localhost/movieappv5", {useNewUrlParser: true, useUnifiedTopology: true});

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

app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    next();
});

app.get("/", function(req, res){
    res.render("home")
});

//RATING A MOVIE
app.post("/movies/:id/rating", isLoggedIn, function(req, res){
    
    var rateIt = {
        rating: req.body.rating 
    };

    Rating.create(rateIt, function(err, data){
        Movie.findById(req.params.id, function(err, foundMovie){
            if(err){
                console.log(err);
            } else {
                foundMovie.ratings.push(data);
                foundMovie.save(function(err, data2){
                    if(err){
                        console.log(er);
                    } else {
                        console.log(data2);
                        movieFound(data2.name);
                        res.redirect("/movies");
                    }
                });
            }
        });
    });
});
function movieFound(str){
    var total = 0, count = 0;
    Movie.findOne({name: str}).populate({ path: 'ratings', model: Rating }).exec(function(err, foundMovie){
        if(err){
            console.log(err);
        } else {
            console.log(foundMovie);
            foundMovie.ratings.forEach(function(rating){
                total = total + Number(rating.rating);
            });
            count = foundMovie.ratings.length;
            total = total/count;
            var n = total.toFixed(1);
            rateMovie(n, foundMovie.name);
            console.log(n);
        }
    });
}
function rateMovie(num, str){
    Movie.updateOne({name: str}, {$set: {ratingValue: num}}, function(err, found){
        console.log(found);
    });
}

app.get("/movies", function(req, res){
    var movie = Movie.find({}, function(err, movies){
        if(err){
            console.log(err);
        } else {
            res.render("movies/movies", {movies: movies});
        }
    });
});

app.post("/movies", function(req, res){
    var name = req.body.name;
    var image = req.body.image;

    var newMovie = {
        name: name,
        image: image,
        ratingValue: "0"
    }

    Movie.create(newMovie, function(err, movie){
        if(err){
            console.log(err);
        } else {
            console.log(movie);
            res.redirect("/movies");
        }
    });
});

app.delete("/movies/:id", function(req, res){
    Movie.findByIdAndDelete(req.params.id, function(err){
        if(err){
            res.send("ERROR HAPPENED!");
        } else {
            res.redirect("/movies");
        }
    })
});

app.get("/movies/new", isLoggedIn, function(req, res){
    res.render("movies/new");
});

app.get("/movies/:name", isLoggedIn, (req, res)=>{
    var name = req.params.name;

    Movie.findOne({name: name}, (err, foundM)=>{
        if(err){
            console.log(err);
            res.redirect("/");
        }
        else{
            res.render("movies/show", {movie: foundM});
            console.log(foundM);
        }
    });
});


//=============================================================================
//      AUTHENTICATION ROUTES

app.get("/register", (req, res)=>{
    res.render("register");
});

app.post("/register", (req, res)=>{
    var newUser = new User({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username
    });

    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.redirect("/");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/movies");
            console.log(user);
        });
    });
});

app.get("/login", (req, res)=>{
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/movies",
    failureRedirect: "/login"
}), (req, res)=>{ });

app.get("/logout", (req, res)=>{
    req.logOut();
    res.redirect("/movies");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

//=============================================================================


app.listen(3000, function(req, res){
    console.log("SERVER STARTED AT PORT 3000!");
});