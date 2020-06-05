const express = require('express'),
    router = express.Router(),
    Movie = require('../models/movie'),
    Actor = require('../models/actor'),
    middleware = require('../middlewares'),
    userFunctions = require('../user_defined_functions/userFunctions');

//SHOW ALL ACTORS
router.get('/actors', (req, res) => {
    Actor.find({}, (err, actors) => {
        if (err) {
            console.log(err);
        } else {
            res.render('actors/actors', {actors: actors});
        }
    });
});

//SHOW FORM TO ADD NEW ACTORS
router.get('/actors/new', middleware.youAdmin, (req, res) => {
    res.render('actors/new');
});


//ADD A NEW ACTOR TO DATABASE
router.post('/actors', middleware.youAdmin, (req, res) => {
    var newActor = {
        name: userFunctions.title(req.body.name),
        image: req.body.image,
        dob: req.body.dob,
        bio: req.body.bio,
    }
    Actor.create(newActor, (err, actor) => {
        if (err) {
            console.log(err);
        } else {
            console.log(actor);
            res.redirect('/actors');
        }
    });
});

//SHOW ALL DETAILS ABOUT AN ACTOR
router.get('/actors/:id', (req, res) => {
    Actor.findById(req.params.id).populate({path: 'movies', model: Movie}).populate({path: 'upcomingMovies', model: Movie}).exec((err, foundActor) => {
        if (err) {
            console.log(err);
        } else {
            res.render('actors/show', {actor: foundActor});
        }
    });
});

//SHOW FORM TO EDIT AN ACTOR
router.get('/actors/:id/edit', middleware.youAdmin, (req, res) => {
    Actor.findById(req.params.id, (err, actor) => {
        if(err) return res.redirect('back');
        res.render('actors/edit', {actor: actor});
    });
});

//LOGIC TO EDIT THE ACTOR
router.put('/actors/:id', (req, res) => {
    Actor.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, updated) => {
        if(err){
            req.flash('error', 'Something went wrong.');
            return res.redirect('back');
        }
        res.redirect(`/actors/${req.params.id}`);
    })
});

//DELETE AN ACTOR FROM THE DATABASE
router.delete('/actors/:id', middleware.youAdmin, (req, res)=>{
    Actor.findById(req.params.id, (err, foundActor)=>{
        //FOR ALL THE MOVIES THE ACTOR HAS DONE REMOVE THAT ACTOR FROM THE MOVIE'S ACTORS LIST
        foundActor.movies.forEach((movie)=>{
            Movie.findById(movie, (err, foundMovie)=>{
                if(err) return res.redirect('back');
                let i = foundMovie.actors.indexOf(foundActor._id);
                foundMovie.actors.splice(i, 1);
                foundMovie.save();
            });
        })
    });

    Actor.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            console.log(err);
            return res.redirect('back');
        } else {
            console.log('Actor deleted');
            res.redirect('/actors');
        }
    });
});

module.exports = router;