const express = require('express'),
    router = express.Router({mergeParams: true}),
    Movie = require('../models/movie'),
    userFunctions = require('../user_defined_functions/userFunctions');

//=====================================================================================
//USER DEFINED FUNCTIONS
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};

function getCommon(arr1, arr2) {
    var common = [];
    for(var i=0 ; i<arr1.length ; ++i) {
        for(var j=0 ; j<arr2.length ; ++j) {
            if(arr1[i] == arr2[j]) {
                common.push(arr1[i]);
            }
        }
    }
    return common;
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
//=====================================================================================

genres = ['Action', 'Adventure', 'Animated', 'Biography', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Heist', 'Horror', 'Mystery',
    'Post Apocalyptic', 'Romance', 'Sci-fi', 'Sports', 'Superhero', 'Thriller', 'War', 'Western', 'Zombie']

//SHOW ALL THE GENRES
router.get('/recommendation/genres', (req, res)=>{
    res.render('recommendation/genres', {genres: genres})
})

//SHOW MOVIES OF A SPECIFIC GENRE
router.get('/recommendation/genres/:genre', (req, res)=>{
    reqGenre = req.params.genre;
    reqGenre = reqGenre.toLowerCase();

    Movie.aggregate([{$unwind : '$genres'}, {$match: {genres: {$eq: reqGenre}}}], (err, movies) => {
        res.render('recommendation/filterSelect', {movies: movies, genre1: userFunctions.title(reqGenre), genres: genres})
    })
})

//SHOW PAGE TO SELECT MOVIES OF ANY TWO GENRES
router.get('/recommendation/genreFilter', (req, res) => {
    res.render('recommendation/filterSelect', {movies: [], genre1: '', genres: genres})
});

//SHOW MOVIES OF ANY TWO GENRES
router.post('/recommendation/genreFilter', (req, res) => {
    if(String(req.body.genres) === 'undefined'){
        req.flash('error', 'Please select 1 or more genres')
        res.redirect('/recommendation/genreFilter')
    } else if(typeof req.body.genres == 'string'){
        res.redirect('/recommendation/genres/' + userFunctions.title(req.body.genres))
    } else {
        console.log(req.body.genres)
        var text = [];
        for(i=0; i<req.body.genres.length; i++){
            text.push({genres: {$eq: req.body.genres[i].toLowerCase()}})
        }
        console.log(text);

        Movie.find({$and: text}, (err, found) => {
            res.render('recommendation/filterSelect', {movies: found, genre1: '', genres: genres})
        })
    }
});

router.get('/recommendation/selectMovies', (req, res) => {
    Movie.find({release: {$lte: new Date()}}, (err, found) => {
        if(found.length > 6) list = getRandom(found, 6)
        else list = []
        res.render('recommendation/selectMovies', {movies: list})
    })
})

router.post('/recommendation/selectMovies', (req, res) => {
    if(String(req.body.movie) == 'undefined' || typeof req.body.movie === 'string' || (typeof req.body.movie === 'object' && req.body.movie.length > 2)){
        req.flash('error', 'Please select exactly 2 movies!')
        return res.redirect('back');
    }
    console.log(req.body.movie);
    Movie.find({name: {$in: req.body.movie}}, (err, found) => {
        common = getCommon(found[1].genres, found[0].genres)
        console.log(common);
        var text = [];
        if(common.length == 0){
            Movie.find({$and: [{genres: {$eq: found[0].genres[0]}}, {genres: {$eq: found[0].genres[1]}}]}).limit(4).exec((err, found1) => {
                Movie.find({$and: [{genres: {$eq: found[1].genres[0]}}, {genres: {$eq: found[1].genres[1]}}]}).limit(4).exec((err, found2) => {
                    movies = found1.concat(found2)
                    movies = removeDuplicates(movies)
                    console.log('no common')
                    return res.render('recommendation/filterSelect', {movies: movies, genre1: '', genres: genres})
                })
            })
        } else if(common.length == 1) {
            res.redirect(`/recommendation/genres/${String(common)}`)
        } else {
            for(i=0; i<common.length; i++){
                text.push({genres: {$eq: common[i].toLowerCase()}})
            }
            console.log(text);

            Movie.find({$and: text}, (err, found) => {
                res.render('recommendation/filterSelect', {movies: found, genre1: '', genres: genres})
            })
        } 
    })

})

module.exports = router;