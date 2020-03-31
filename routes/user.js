const express = require('express'),
    router = express.Router(),
    Movie = require('../models/movie'),
    Rating = require('../models/rating'),
    User = require('../models/user')

//=========================================================================================================
//USER ROUTES

//PROFILE PAGE
router.get('/User/Profile/:id', (req, res)=>{
    User.findById(req.params.id).populate({path: 'watchList', model: Movie}).exec((err, foundUser)=>{
        person = {
            id: foundUser._id,
            username: foundUser.username
        };
        Rating.find({ratedBy: person}, (err, ratings)=>{
            res.render('users/profile', {user: foundUser, ratings: ratings});
        });
    });
});

//ADD MOVIES TO WATCHLIST OF USER
router.get('/User/AddToWatchList/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        if(err) console.log(err);
        else {
            currentList = req.user.watchList;
            currentMovie = req.params.id;

            for(i=0; i<currentList.length; i++){
                if(String(currentList[i]) == currentMovie){
                    return res.redirect('/movies/' + foundMovie._id)
                }
            }

            req.user.watchList.push(foundMovie)
            req.user.save()
            console.log(req.user)
            res.redirect('/movies/' + foundMovie._id)
        }
    })
})

//SHOW PAGE TO EDIT WATCHLIST
router.get('/User/Profile/:id/editWatchList', (req, res) => {
    User.findById(req.params.id).populate({path: 'watchList', model: Movie}).exec((err, foundUser)=>{
        res.render('users/editwatchlist', {user: foundUser})
    });
})

//ACTUALLY EDIT THE WATCHLIST
router.put('/User/Profile/:id/editWatchList', (req, res) => {
    currentList = req.user.watchList;
    if(String(req.body.movie) != 'undefined'){
        list = req.body.movie
        if(typeof list == 'string'){
            list = Array(list)
        }
        req.user.watchList = currentList.filter((el) => !list.includes(String(el)));
        req.user.save()
    } else {
        console.log('please select a movie. please')
    }
    res.redirect('/User/Profile/' + req.user._id)
})
//===============================================================================

module.exports = router;