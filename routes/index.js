const express = require('express'),
    passport = require('passport'),
    router = express.Router({mergeParams: true}),
    Movie = require('../models/movie'),
    Actor = require('../models/actor'),
    User = require('../models/user'),
    userFunctions = require('../user_defined_functions/userFunctions');

//SHOW HOMEPAGE
router.get('/', (req, res) => {
    res.render('home');
});

//==================================================================================
//SEARCHING FOR A MOVIE/ACTOR
router.post('/search', (req, res) => {
    name = userFunctions.title(req.body.search.toLowerCase());
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
    Movie.aggregate([{$sort: {ratingValue: -1}}, {$match: {$and: [
            {ratingValue: {$ne: 'Unrated'}},
            {ratingValue: {$ne: '10.0'}},
            {ratingValue: {$ne: 'NaN'}}
        ]}}], (err, found) => {
        console.log(found.length);
        if(err) {
            console.log(err);
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
            req.flash('error', err.message);
            return res.redirect('/movies');
        }
        //LOGIN THE NEWLY REGISTERED USER
        passport.authenticate('local')(req, res, () => {
            req.flash('success', `Welcome to Movie Picker ${user.username}`)
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
    successFlash: `Welcome back`,
    failureRedirect: '/login',
    failureFlash: `Something went wrong`
}), (req, res) => {});

//LOGOUT ROUTE
router.get('/logout', (req, res) => {
    req.logOut();
    req.flash('success', 'Logged you out!');
    res.redirect('/movies');
});
//=============================================================================

module.exports = router;