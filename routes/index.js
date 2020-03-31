const express = require('express'),
    passport = require('passport'),
    router = express.Router({mergeParams: true}),
    Movie = require('../models/movie'),
    Actor = require('../models/actor'),
    User = require('../models/user');

//SHOW HOMEPAGE
router.get('/', (req, res) => {
    res.render('home');
});


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

//==================================================================================
//SEARCHING FOR A MOVIE/ACTOR
router.post('/search', (req, res) => {
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
                            return res.redirect('/movies');
                        }
                        res.redirect('/actors/' + foundActor._id);
                    }
                });
            } else {
                res.redirect('/movies/' + foundMovie._id);
            }
        }
    });
});
//===================================================================================

//===================================================================================
//RECOMMENDATION ROUTES

//SELECTION OF RECOMMENDATION TYPE
router.get('/recommendation', (req, res) => {
    res.render('recommendation/recommendation')
});

//ROUTE TO SHOW THE HIGHEST RATED MOVIES
router.get('/highest', (req, res) => {
    Movie.aggregate([{$sort: {ratingValue: -1}}, {$match: {$and: [{ratingValue: {$ne: 'Unrated'}}, {ratingValue: {$ne: '10.0'}}]}}], (err, found) => {
        if(err) {
            console.log(err);
        } else if(found.length === 0) {
            res.render('movies/select', {movies: found});
        } else {
            Movie.find({ratingValue: {$eq: '10.0'}}, (err, movies) => {
                movies.forEach((movie) => {
                    found.unshift(movie);
                })
                res.render('movies/select', {movies: found});
            })
        }
    })
});

//ROUTE TO SHOW THE MOST RATED MOVIES
router.get('/mostrated', (req, res) => {
    Movie.aggregate([{$match: {ratingCount: {$gt: 0}}}, {$sort: {ratingCount: -1}}], (err, found) => {
        if(err) {
            console.log(err);
        } else if(!found) {
            return res.redirect('/movies');
        } else {
            res.render('movies/select', {movies: found});
        }
    })
});

//ROUTE TO SHOW THE UPCOMING MOVIES
router.get('/upcoming', (req, res)=>{
    nowDate = new Date()
    nowDate.setHours(nowDate.getHours() + 5)
    nowDate.setMinutes(nowDate.getMinutes() + 30)

    Movie.aggregate([{$match: {release: {$gt: nowDate}}}, {$sort: {release: 1}}], (err, found) => {
        if(err) {
            console.log(err);
        } else if(!found) {
            return res.redirect('/movies');
        } else {
            res.render('movies/select', {movies: found});
        }
    })
});






//=============================================================================
//AUTHENTICATION ROUTES

//SHOW THE FORM FOR NEW REGISTRATION OF AN USER
router.get('/register', (req, res) => {
    res.render('register');
});

//ADD NEW USER TO DATABASE AND ALSO LOG IN
router.post('/register', (req, res) => {
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
            return res.redirect('/');
        }
        //LOGIN THE NEWLY REGISTERED USER
        passport.authenticate('local')(req, res, function () {
            res.redirect('/movies');
            console.log(user);
        });
    });
});

//SHOW LOGIN FORM
router.get('/login', (req, res) => {
    res.render('login');
});

//LOGGING THE USER IN
router.post('/login', passport.authenticate('local', {
    successRedirect: '/movies',
    failureRedirect: '/login'
}), (req, res) => {});

//LOGOUT ROUTE
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/movies');
});

//FUNCTION TO CHECK IF USER IS LOGGED IN OR NOT[THIS FUNCTION CAN ADDED TO ANY ROUTE]
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
//=============================================================================


module.exports = router;