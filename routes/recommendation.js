const express = require('express'),
    router = express.Router({mergeParams: true}),
    Movie = require('../models/movie');


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
        res.render('recommendation/filterSelect', {movies: movies, genre1: title(reqGenre), genres: genres})
    })
})

//SHOW PAGE TO SELECT MOVIES OF ANY TWO GENRES
router.get('/recommendation/genreFilter', (req, res) => {
    res.render('recommendation/filterSelect', {movies: [], genre1: '', genres: genres})
});

//SHOW MOVIES OF ANY TWO GENRES
router.post('/recommendation/genreFilter', (req, res) => {
    if(String(req.body.genres) === 'undefined'){
        return res.render('recommendation/filterSelect', {movies: [], genre1: '', genres: genres})
    } else if(req.body.genres.length === 2) {
        Movie.find({$and: [{genres: {$eq: req.body.genres[0].toLowerCase()}}, {genres: {$eq: req.body.genres[1].toLowerCase()}}]}, (err, found) => {
            res.render('recommendation/filterSelect', {movies: found, genre1: '', genres: genres})
        })
    } else if(req.body.genres.length === 3) {
        if(req.body.genres != 'War') {
            Movie.find({$and: [{genres: {$eq: req.body.genres[0].toLowerCase()}}, {genres: {$eq: req.body.genres[1].toLowerCase()}}, 
            {genres: {$eq: req.body.genres[2].toLowerCase()}}]}, (err, found) => {
                res.render('recommendation/filterSelect', {movies: found, genre1: '', genres: genres})
            })
        } else {
            return res.redirect('/recommendation/genres/war')
        }
    } else if(req.body.genres.length >= 3 && typeof req.body.genres === 'string'){
        return res.redirect('/recommendation/genres/' + title(req.body.genres))
    } else {
        return res.render('recommendation/filterSelect', {movies: [], genre1: '', genres: genres})
    }
});

router.get('/recommendation/selectMovies', (req, res) => {
    Movie.find({}, (err, movies) => {
        if(movies.length > 6) list = getRandom(movies, 6)
        else list = []
        res.render('recommendation/selectMovies', {movies: list})
    })
})

router.post('/recommendation/selectMovies', (req, res) => {
    if(String(req.body.movie) == 'undefined'){
        return res.redirect('/recommendation/selectMovies')
    }
    if(req.body.movie.length === 2){
        Movie.find({name: {$in: [req.body.movie[0], req.body.movie[1]]}}, (err, found) => {
            common = getCommon(found[1].genres, found[0].genres)
            if(common.length == 1){
                return res.redirect('/recommendation/genres/' + common[0])
            }
            if(common.length == 0){
                Movie.find({$and: [{genres: {$eq: found[0].genres[0]}}, {genres: {$eq: found[0].genres[1]}}]}).limit(4).exec((err, found1) => {
                    Movie.find({$and: [{genres: {$eq: found[1].genres[0]}}, {genres: {$eq: found[1].genres[1]}}]}).limit(4).exec((err, found2) => {
                        movies = found1.concat(found2)
                        movies = removeDuplicates(movies)
                        console.log('no common')
                        return res.render('recommendation/filterSelect', {movies: movies, genre1: '', genres: genres})
                    })
                })
            } else {
                console.log(common)
                Movie.find({$and: [{genres: {$eq: common[0]}}, {genres: {$eq: common[1]}}]}, (err, found) => {
                    return res.render('recommendation/filterSelect', {movies: found, genre1: '', genres: genres})
                })
            }
        })
    } else {
        return res.redirect('/recommendation/selectMovies');
    }
})
//=========================================================================================================

module.exports = router;