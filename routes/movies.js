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
router.get('/movies/new', youAdmin, (req, res)=>{
    res.render('movies/new'); 
});

//ADD A MOVIE TO THE DATABASE
router.post('/movies', youAdmin, (req, res)=>{
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
        release: releaseDate,
        primeLink: req.body.link.prime.trim(),
        netflixLink: req.body.link.netflix.trim(),
        hotstarLink: req.body.link.hotstar.trim(),
        youtubeLink: req.body.link.youtube.trim()
    };

    Movie.create(newMovie, (err, createdMovie)=>{
        if(err){
            console.log(err);
            res.redirect('back');
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
                }
            });
        }
    });
}

//RATING A MOVIE  
router.post('/movies/:id/rating', haveYouRated, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        var rateIt = {
            rating: req.body.rating,
            ratedBy: {
                id: req.user._id,
                username: req.user.username
            },
            content: req.body.content,
            movie: {
                id: found._id,
                name: found.name
            }
        };

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
                            res.redirect('/movies/' + foundMovie._id + '/reviews');
                        }
                    });
                }
            });
        });    
    })
});

//DELETE A MOVIE ALONG WITH RATINGS AND ACTORS[MOVIES DONE LIST]
router.delete('/movies/:id', youAdmin, (req, res) => {
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
            movie = {
                id: req.params.id
            }
            Rating.deleteMany({movie: movie}, (err) => {
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
    Movie.findById(req.params.id, (err, found) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            res.render('movies/show', {movie: found});
        }
    });
});

//SHOW THE REVIEWS OF A MOVIE
router.get('/movies/:id/reviews', haveYouRated, (req, res) => {
    Movie.findById(req.params.id).populate({path: 'ratings', model: Rating}).exec((err, found) => {
        res.render('movies/reviews', {movie: found, isRated: isRated});
    });
});

router.get('/movies/:id/reviews/new', haveYouRated, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        res.render('movies/reviews/new', {movie: found}); 
    });
})

router.get('/movies/:id/reviews/edit', haveYouRated, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        if(err) {
            console.log(err);
            res.redirect('back');
        } else {
            movie = {
                id: found._id,
                name: found.name
            }
            Rating.findOne({movie: movie, ratedBy: person}, (err, foundRating) => {
                res.render('movies/reviews/reviewOption', {movie: found, rating: foundRating})
            })
        }
    });
})

router.put('/movies/:id/reviews/edit', haveYouRated, (req, res) => {
    console.log(req.body)
    console.log(person)
    console.log(ratingId)
    Rating.findByIdAndUpdate(ratingId, {$set: {rating: req.body.rating, content: req.body.content}}, (err)=>{
        ratingMovie(req.params.id)
        res.redirect('/movies/' + req.params.id + '/reviews');
    })
})

router.delete('/movies/:id/reviews/delete', (req, res) => {
    res.send('hello, you just deleted this review. LOL. Fooled You!')
})

//SHOW THE CAST OF A MOVIE
router.get('/movies/:id/cast', isLoggedIn, (req, res) => {
    Movie.findById(req.params.id).populate({path: 'actors', model: Actor}).exec((err, found) => {
        if(err){
            console.log(err);
        } else {
            res.render('movies/cast', {movie: found});
        }
    });
});

//SHOW A PAGE WITH LINKS TO WATCH A MOVIE
router.get('/movies/:id/stream', isLoggedIn, (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie)=>{
        res.render('movies/stream', {movie: foundMovie});
    });
});

//SHOW MORE MOVIES WITH RESPECT TO THE SELECTED MOVIE
router.get('/movies/:id/more', isLoggedIn, (req, res)=>{
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

var isRated, ratingId;

function haveYouRated(req, res, next) {
    if(req.isAuthenticated()){
        Movie.findById(req.params.id).populate({path: 'ratings', model: Rating}).exec((err, found) => {
            if (err) {
                res.redirect('back')
            } else {
                //DOES THE USER ALREADY HAS RATED THAT MOVIE
                person = {
                    id: req.user._id,
                    username: req.user.username
                }
                movie = {
                    id: found._id,
                    name: found.name
                }
                Rating.findOne({movie: movie, ratedBy: person}, (err, foundRating) => {
                    if(err){
                        res.redirect('back')
                    } else {
                        isRated = foundRating == null
                        if(foundRating){
                            ratingId = foundRating._id
                        }
                        next()
                    }
                })
            }
        });
    } else {
        console.log('YOU NEED TO LOG IN FIRST')
        res.redirect('back')
    }
}

function youAdmin(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.isAdmin){
            next()
        } else {
            res.redirect('back')
        }
    } else {
        res.redirect('back')
    }
}

module.exports = router;