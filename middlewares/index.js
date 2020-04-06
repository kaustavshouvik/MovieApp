//ALL THE MIDDLEWARE GOES HERE
middlewareObj = {}
const Movie = require('../models/movie'),
    Rating = require('../models/rating');

middlewareObj.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'Please login first!')
    res.redirect('/login');
}

middlewareObj.youAdmin = (req, res, next) => {
    if(req.isAuthenticated()){
        if(req.user.isAdmin){
            next()
        } else {
            req.flash('error', `You don't have permission to do that!`)
            res.redirect('/movies')
        }
    } else {
        req.flash('error', 'Please log in first!')
        res.redirect('back')
    }
}

middlewareObj.ratingId;
middlewareObj.isRated;
middlewareObj.haveYouRated = (req, res, next) => {
    if(req.isAuthenticated()){
        Movie.findById(req.params.id).populate({path: 'ratings', model: Rating}).exec((err, found) => {
            if (err) {
                req.flash('error', 'Movie not found');
                console.log('movie not found');
                res.redirect('back')
            } else {
                //DOES THE USER ALREADY HAS RATED THAT MOVIE
                if(!found){
                    return res.redirect('back');
                }
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
                        middlewareObj.isRated = foundRating == null
                        if(foundRating){
                            middlewareObj.ratingId = foundRating._id
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

module.exports = middlewareObj;