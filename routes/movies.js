const express = require('express'),
    router = express.Router(),
    Movie = require('../models/movie'),
    Actor = require('../models/actor'),
    Rating = require('../models/rating'),
    middleware = require('../middlewares');

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
router.get('/movies/new', middleware.youAdmin, (req, res)=>{
    res.render('movies/new'); 
});

//ADD A MOVIE TO THE DATABASE
router.post('/movies', middleware.youAdmin, (req, res)=>{
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
        boxoffice: {
            budget: req.body.budget,
            profit: req.body.profit
        },
        release: releaseDate,
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
            Movie.findByIdAndUpdate(id, {$set: {ratingCount: count, ratingValue: total}}, (err)=>{
                if(err){
                    console.log(err);
                    res.redirect('back');
                } else {
                    console.log(`New rating: ${total}, New Count: ${count}`);
                }
            });
        }
    });
}

//RATING A MOVIE  
router.post('/movies/:id/rating', middleware.haveYouRated, (req, res) => {
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
                            console.log(`Old rating: ${savedMovie.ratingValue}, Old count: ${savedMovie.ratingCount}`);
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
router.delete('/movies/:id', middleware.youAdmin, (req, res) => {
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

//SHOW PAGE TO EDIT THE MOVIE
router.get('/movies/:id/edit', middleware.youAdmin, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else if(!found){
            req.flash('error', 'Movie not found')
            res.redirect('back');
        } else {
            res.render('movies/edit', {movie: found});
        }
    });
});

router.put('/movies/:id', middleware.youAdmin, (req, res) =>{
    var genres = title(req.body.genres);    //GENRES SETUP
    genres = genres.toLowerCase();
    req.body.genres = genres.split(',');

    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
        if(err) {
            console.log(err);
        } else {
            req.flash('success', 'Movie successfully updated')
            res.redirect(`/movies/${req.params.id}/`);
        }
    })
})

//SHOW MORE DETAILS ABOUT A MOVIE
router.get('/movies/:id', middleware.isLoggedIn, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else if(!found){
            console.log('movie not found')
            res.redirect('back');
        } else {
            res.render('movies/show', {movie: found});
        }
    });
});

//SHOW THE REVIEWS OF A MOVIE
router.get('/movies/:id/reviews', middleware.haveYouRated, (req, res) => {
    var text = {path: 'ratings', model: Rating};
    Movie.findById(req.params.id).populate(text).exec((err, found) => {
        res.render('movies/reviews', {movie: found, isRated: middleware.isRated});
    });
});

router.get('/movies/:id/reviews/new', middleware.haveYouRated, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        res.render('movies/reviews/new', {movie: found}); 
    });
})

router.get('/movies/:id/reviews/edit', middleware.haveYouRated, (req, res) => {
    Movie.findById(req.params.id, (err, found) => {
        if(err) {
            console.log(err);
            res.redirect('back');
        } else {
            if(middleware.isRated){
                req.flash('error', 'You have not rated the movie');
                res.redirect(`/movies/${found._id}/reviews`)
            }
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

router.put('/movies/:id/reviews/edit', middleware.haveYouRated, (req, res) => {
    Rating.findByIdAndUpdate(middleware.ratingId, {$set: {rating: req.body.rating, content: req.body.content}}, (err)=>{
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            ratingMovie(req.params.id)
            res.redirect('/movies/' + req.params.id + '/reviews');    
        }
    })
})

router.delete('/movies/:id/reviews/delete', middleware.haveYouRated, (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        console.log(foundMovie.ratings);
        movie = {
            id: foundMovie._id,
            name: foundMovie.name
        }
        person = {
            id: req.user._id,
            username: req.user.username
        }
        currentList = foundMovie.ratings;
        Rating.findOneAndDelete({movie: movie, ratedBy: person}, (err, found) => {
            console.log(found._id);
            for(i=0; i<foundMovie.ratings.length; i++){
                if(foundMovie.ratings[i].equals(found._id)){
                    break;
                }
            }
            currentList.splice(i, 1);
            Movie.findByIdAndUpdate(foundMovie._id, {$set: {ratings: currentList}}, (err, updated) => {
                ratingMovie(foundMovie._id)
            })
            res.redirect('/movies/' + foundMovie._id + '/reviews');
        })
    })
})

//SHOW THE CAST OF A MOVIE
router.get('/movies/:id/cast', middleware.isLoggedIn, (req, res) => {
    Movie.findById(req.params.id).populate({path: 'actors', model: Actor}).exec((err, found) => {
        if(err){
            console.log(err);
        } else {
            res.render('movies/cast', {movie: found});
        }
    });
});

//SHOW A PAGE WITH LINKS TO WATCH A MOVIE
router.get('/movies/:id/stream', middleware.isLoggedIn, (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie)=>{
        res.render('movies/stream', {movie: foundMovie});
    });
});

//SHOW MORE MOVIES WITH RESPECT TO THE SELECTED MOVIE
router.get('/movies/:id/more', middleware.isLoggedIn, (req, res)=>{
    Movie.findById(req.params.id, (err, foundMovie)=>{
        var like1 = foundMovie.genres[0], like2 = foundMovie.genres[1];
        Movie.find({$and: [{genres: {$eq: like1}}, {genres: {$eq: like2}}, {name: {$ne: foundMovie.name}}]}, (err, found) => {
            res.render('recommendation/more', {recommendedMovies: found, movie: foundMovie});
        });
    });
});

module.exports = router;