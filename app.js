const express           = require("express"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    methodOverride      = require("method-override"),
    async               = require("async"),
    nodemailer          = require("nodemailer"),
    crypto              = require("crypto"),
    User                = require("./models/user"),
    Rating              = require("./models/rating"),
    Movie               = require("./models/movie");

mongoose.connect("mongodb://localhost/movieappv8", {useNewUrlParser: true, useUnifiedTopology: true});

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

//SHOW HOMEPAGE
app.get("/", function(req, res){
    res.render("home")
});

//SHOW ALL MOVIES
app.get("/movies", function(req, res){
    Movie.find({}, function(err, movies){
        if(err){
            console.log(err);
        } else {
            res.render("movies/movies", {movies: movies});
        }
    });
});

//SHOW A PAGE TO ADD NEW MOVIES TO THE DATABASE
app.get("/movies/new", isLoggedIn, function(req, res){
    res.render("movies/new");
});

//ADD A MOVIE TO THE DATABASE
app.post("/movies", isLoggedIn, function(req, res){
    var newMovie = {
        name: req.body.name,
        poster: req.body.poster,
        image: req.body.image,
        genre: req.body.genre,
        plot: req.body.plot,
        // boxoffice: {
        //     budget: req.body.budget,
        //     profit: req.body.profit
        // },
        addedBy:{
            id: req.user._id,
            username: req.user.username
        },
        ratingValue: '0',
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

//RATING A MOVIE
app.post("/movies/:id/rating", isLoggedIn, function(req, res){
    
    var rateIt = {
        rating: req.body.rating,
        ratedBy:{
            id: req.user._id,
            username: req.user.username
        },
        movie: req.params.id
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
            foundMovie.ratings.forEach(function(rating){
                total = total + Number(rating.rating);
            });
            count = foundMovie.ratings.length;
            total = total/count;
            var n = total.toFixed(1);
            rateMovie(n, foundMovie.name);
        }
    });
}
function rateMovie(num, str){
    Movie.updateOne({name: str}, {$set: {ratingValue: num}}, function(err, found){
        console.log(found);
    });
}

//DELETE A MOVIE FROM THE DATABASE ALONG WITH THEIR RATINGS FROM RATING MODEL
app.delete("/movies/:id", isLoggedIn, function(req, res){
    Movie.findByIdAndDelete(req.params.id, function(err){
        if(err){
            res.send("ERROR HAPPENED!");
        } else {
            Rating.deleteMany({movie: req.params.id}, (err)=>{
                console.log(err);
            });
            res.redirect("/movies");
        }
    })
});

//SHOW MORE DETAILS ABOUT A MOVIE
app.get("/movies/:id", isLoggedIn, (req, res)=>{
    Movie.findById(req.params.id, (err, foundM)=>{
        if(err){
            console.log(err);
            res.redirect("/");
        }
        else{
            res.render("movies/show", {movie: foundM});
        }
    });
});

//SHOW THE REVIEWS OF A MOVIE
app.get("/movies/:id/reviews", (req, res)=>{
    Movie.findById(req.params.id, (err, found)=>{
        if(err){
            console.log(err);
        } else {
            Rating.find({movie: req.params.id}, (err, rateOb)=>{
                if(err){
                    console.log(err);
                } else {
                    console.log(rateOb);
                    res.render("movies/reviews", {movie: found, rateOb: rateOb});
                }
            });
        }
    });
});

//============================================================================
//RECOMMENDATION ROUTES

app.get("/recommendation", (req, res)=>{
    res.send("THERE WILL BE BLOOOD!");
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
}), (req, res)=>{});

app.get("/logout", (req, res)=>{
    req.logOut();
    res.redirect("/movies");
});

app.get("/forgot", (req, res)=>{
    res.render("forgot");
});

app.post("/forgot", (req, res, next)=>{
    async.waterfall([
        function(done) {
            crypto.randomBytes(20, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },

        function(token, done) {
            User.findOne({ email: req.body.email }, function(err, user) {
                if (!user) {
                    console.log("USER NOT FOUND");
                    //req.flash('error', 'No account with that email address exists.');
                    return res.redirect('/forgot');
                }

                //AFTER FINDING THE USER WE ARE UPDATING THODE VALUES
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                //AFTER UPDATION THE NEW VALUES FOR THE FOUND USER IS SAVED
                user.save(function(err) {
                    done(err, token, user);
                });
            });
        },

        function(token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail', 
                auth: {
                    user: 'ciscoramon008@gmail.com',
                    pass: 'kaustav753159'
                }
            });

            var mailOptions = {
                to: user.email,
                from: 'ciscoramon008@gmail.com',
                subject: 'Node.js Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };

            smtpTransport.sendMail(mailOptions, function(err) {
                console.log('MAIL SENT');
                //req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                done(err, 'done');
            });
        }
    ], function(err) {
        if (err) return next(err);
        res.redirect('/forgot');
    });
});

app.get("/reset/:token", (req, res)=>{
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
            console.log(err);
            //req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/forgot');
        }
        res.render('reset', {token: req.params.token});
    });
});

app.post("/reset/:token", (req, res)=>{
    async.waterfall([
        function(done) {
            User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
                if (!user) {
                    //req.flash('error', 'Password reset token is invalid or has expired.');
                    return res.redirect('back');
                }

                if(req.body.password === req.body.confirm) {
                    user.setPassword(req.body.password, function(err) {

                        user.resetPasswordToken = undefined;
                        user.resetPasswordExpires = undefined;
            
                        user.save(function(err) {
                            req.logIn(user, function(err) {
                                done(err, user);
                            });
                        });
                    });
                } else {
                    req.flash("error", "Passwords do not match.");
                    return res.redirect('back');
                }
            });
        },

        function(user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail', 
                auth: {
                    user: 'ciscoramon008@gmail.com',
                    pass: 'kaustav753159'
                }
            });

            var mailOptions = {
                to: user.email,
                from: 'learntocodeinfo@mail.com',
                subject: 'Your password has been changed',
                text: 'Hello,\n\n' +
                'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
            };

            smtpTransport.sendMail(mailOptions, function(err) {
                console.log("MAIL SENT");
                //req.flash('success', 'Success! Your password has been changed.');
                done(err);
            });
        }
    ], function(err) {
        res.redirect('/');
    });
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