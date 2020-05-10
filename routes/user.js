const express = require('express'),
    router = express.Router({mergeParams: true}),
    Movie = require('../models/movie'),
    Rating = require('../models/rating'),
    User = require('../models/user')

//PROFILE PAGE
router.get('/user/profile/:id', (req, res)=>{
    User.findById(req.params.id).populate({path: 'watchList', model: Movie}).exec((err, foundUser)=>{
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            person = {
                id: foundUser._id,
                username: foundUser.username
            };
            Rating.find({ratedBy: person}, (err, ratings)=>{
                res.render('users/profile', {user: foundUser, ratings: ratings});
            });
        }
    });
});

//ADD MOVIES TO WATCHLIST OF USER
router.get('/user/addtowatchlist/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        if(err) console.log(err);
        else {
            if(req.user.watchList.includes(req.params.id)){
                req.flash('error', 'Movie Already Added To Watchlist');
                return res.redirect(`/movies/${foundMovie._id}`);
            }

            req.user.watchList.push(foundMovie)
            req.user.save()
            console.log(req.user)
            res.redirect('/movies/' + foundMovie._id)
        }
    })
})

//SHOW PAGE TO EDIT WATCHLIST
router.get('/user/profile/:id/editwatchlist', (req, res) => {
    User.findById(req.params.id).populate({path: 'watchList', model: Movie}).exec((err, foundUser)=>{
        res.render('users/editwatchlist', {user: foundUser})
    });
})

//ACTUALLY EDIT THE WATCHLIST
router.put('/user/profile/:id/editwatchlist', (req, res) => {
    currentList = req.user.watchList;
    if(String(req.body.movie) != 'undefined'){
        let list = req.body.movie;
        if(typeof list == 'string'){
            list = Array(list);
        }
        req.user.watchList = currentList.filter((el) => !list.includes(String(el)));
        req.user.save()
    } else {
        console.log('please select a movie. please');
    }
    res.redirect(`/user/profile/${req.user._id}`);
})

module.exports = router;