const express = require('express'),
    router = express.Router(),
    Movie = require('../models/movie'),
    Actor = require('../models/actor');

//===================================================================================
//ACTORS ROUTES

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
router.get('/actors/new', (req, res) => {
    res.render('actors/new');
});

//ADD A NEW ACTOR TO DATABASE
router.post('/actors', (req, res) => {
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
            console.log(foundActor.name);
            res.render('actors/show', {actor: foundActor});
        }
    });
});

//DELETE AN ACTOR FROM THE DATABASE
router.delete('/actors/:id', (req, res)=>{
    Actor.findOne({_id: req.params.id}, (err, foundActor)=>{
        //FOR ALL THE MOVIES THE ACTOR HAS DONE REMOVE THAT ACTOR FROM THE MOVIE'S ACTORS LIST
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
            console.log('Actor deleted');
            res.redirect('/actors');
        }
    });
});


module.exports = router;