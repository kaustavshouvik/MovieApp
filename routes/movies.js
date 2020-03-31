const express = require('express'),
    router = express.Router(),
    Movie = require('../models/movie'),
    Actor = require('../models/actor'),
    Rating = require('../models/rating');

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

//SHOW ALL MOVIES
router.get('/movies', (req, res)=>{
    Movie.find({}, (err, movies)=>{
        if (err) {
            console.log(err);
        } else {
            res.render('movies/movies', {movies: movies});
        }
    });
});

//SHOW A PAGE TO ADD NEW MOVIES TO THE DATABASE
router.get('/movies/new', isLoggedIn, (req, res)=>{
    res.render('movies/new');
});

//ADD A MOVIE TO THE DATABASE
router.post('/movies', isLoggedIn, (req, res)=>{
    var releaseDate = new Date(req.body.release);           //DATE SETUP
    releaseDate.setHours(releaseDate.getHours() - 5);
    releaseDate.setMinutes(releaseDate.getMinutes() - 30);

    var genres = title(req.body.genres);    //GENRES SETUP
    genres = genres.toLowerCase();
    genres = genres.split(', ');

    var movieTitle = title(req.body.name);

    var actors = title(req.body.cast);
    actorsArr = actors.split(', ');

    var newMovie = {
        name: movieTitle,
        poster: req.body.poster,
        image: req.body.image,
        genres: genres,
        plot: req.body.plot,
        // boxoffice: {
        //     budget: req.body.budget,
        //     profit: req.body.profit
        // },
        addedBy: {
            id: req.user._id,
            username: req.user.username
        },
        release: releaseDate,
        ratingValue: 'Unrated',
        ratingCount: 0,
        primeLink: req.body.link.prime.trim(),
        netflixLink: req.body.link.netflix.trim(),
        hotstarLink: req.body.link.hotstar.trim(),
        youtubeLink: req.body.link.youtube.trim()
    };

    Movie.create(newMovie, (err, createdMovie)=>{
        if(err){
            console.log(err);
            return res.redirect('/movies/new');
        } else {
            actorsArr.forEach((actor)=>{
                Actor.findOne({name: actor}, (err, foundActor)=>{
                    if(!foundActor){
                        console.log('No Actor Found To Add Movie To');
                    } else {
                        foundActor.movies.push(createdMovie);
                        foundActor.save();
                        Movie.findOne({name: movieTitle}, (err, foundMovie)=>{
                            foundMovie.actors.push(foundActor);
                            foundMovie.save();
                        });
                    }
                });
            });
            res.redirect('/movies');
        }
    });
});

//RATING A MOVIE  
router.post('/movies/:id/rating', isLoggedIn, (req, res) => {
    var rateIt = {
        rating: req.body.rating,
        ratedBy: {
            id: req.user._id,
            username: req.user.username
        },
        content: req.body.content,
        movie: req.params.id
    };

    function ratingMovie(id){
        Movie.findById(id).populate({path: 'ratings', model: Rating}).exec((err, movieFound)=>{
            if(err){
                console.log(err);
            } else {
                var total = 0, count = movieFound.ratings.length;
                movieFound.ratings.forEach((rating)=>{
                    total = total + Number(rating.rating);
                });
                total = total/count;
                total = total.toFixed(1);
                console.log(total, count);
                Movie.findByIdAndUpdate(id, {$set: {ratingCount: count, ratingValue: total}}, (err)=>{
                    if(err){
                        console.log(err);
                    } else {
                        Movie.findById(id, (err, f)=>{
                            console.log(f);
                        });
                        res.redirect('/movies/' + id + '/reviews');
                    }
                });
            }
        });
    }

    Rating.create(rateIt, (err, newRating) => {
        Movie.findById(req.params.id, (err, foundMovie) => {
            if (err) {
                console.log(err);
            } else if(foundMovie.release > Date.now()){
                //DELETE THE NEWLY CREATED RATING AS MOVIE IS NOT RELEASED
                Rating.findByIdAndDelete(newRating._id, (err, deleted)=>{
                    console.log(deleted);
                });
                return res.redirect('/movies');
            } else {
                foundMovie.ratings.push(newRating);
                foundMovie.save((err, savedMovie)=>{
                    if(err){
                        console.log(err);
                    } else {
                        console.log(savedMovie);
                        ratingMovie(savedMovie._id);
                    }
                });
            }
        });
    });
});

//DELETE A MOVIE ALONG WITH RATINGS AND ACTORS[MOVIES DONE LIST]
router.delete('/movies/:id', isLoggedIn, (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie)=>{
        //FOR ALL ACTORS FIND IF THE ACTOR HAS DONE THAT MOVIE, THEN DELETE IT FROM THE ACTOR'S MOVIES LIST
        for(i=0; i<foundMovie.actors.length; i++){
            Actor.findById(foundMovie.actors[i], (err, foundActor)=>{
                for(j=0; j<foundActor.movies.length; j++){
                    if(String(foundActor.movies[j]) == String(foundMovie._id)){
                        break;
                    }
                }
                foundActor.movies.splice(j, 1);
                foundActor.save();
            });
        }
    });

    Movie.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.send('ERROR HAPPENED!');
        } else {
            //DELETE ALL THE RATINGS BELONGING TO THAT MOVIE
            Rating.deleteMany({movie: req.params.id}, (err) => {
                if(err){
                    console.log(err);
                }
            });
            console.log('Movie deleted');
            res.redirect('/movies');
        }
    });
});

//SHOW MORE DETAILS ABOUT A MOVIE
router.get('/movies/:id', isLoggedIn, (req, res) => {
    Movie.findById(req.params.id, (err, foundM) => {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.render('movies/show', {movie: foundM});
        }
    });
});

//SHOW THE REVIEWS OF A MOVIE
router.get('/movies/:id/reviews', (req, res) => {
    Movie.findById(req.params.id).populate({path: 'ratings', model: Rating}).exec((err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.render('movies/reviews', {movie: found});
        }
    });
});

//SHOW THE CAST OF A MOVIE
router.get('/movies/:id/cast', (req, res) => {
    Movie.findById(req.params.id).populate({path: 'actors', model: Actor}).exec((err, found) => {
        if(err){
            console.log(err);
        } else {
            res.render('movies/cast', {movie: found});
        }
    });
});

//SHOW A PAGE WITH LINKS TO WATCH A MOVIE
router.get('/movies/:id/stream', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie)=>{
        res.render('movies/stream', {movie: foundMovie});
    });
});

//SHOW MORE MOVIES WITH RESPECT TO THE SELECTED MOVIE
router.get('/movies/:id/more', (req, res)=>{
    Movie.findById(req.params.id, (err, foundMovie)=>{
        var like1 = foundMovie.genres[0], like2 = foundMovie.genres[1];
        Movie.find({$and: [{genres: {$eq: like1}}, {genres: {$eq: like2}}, {name: {$ne: foundMovie.name}}]}, (err, found) => {
            res.render('recommendation/more', {recommendedMovies: found, movie: foundMovie});
        });
    });
});

//FUNCTION TO CHECK IF USER IS LOGGED IN OR NOT[THIS FUNCTION CAN ADDED TO ANY ROUTE]
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;