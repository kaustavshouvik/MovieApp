var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("cssFiles"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost/movie_app", {useNewUrlParser: true, useUnifiedTopology: true});

var Rating = require("./models/rating");


var movieSchema = {
    name: String,
    image: String,
    ratingValue: String,
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ]
}
var Movie = mongoose.model("movie", movieSchema);


app.get("/", function(req, res){
    res.render("home")
});

//RATING A MOVIE
app.post("/movies/:id/rating", function(req, res){
    
    var rateIt = {
        rating: req.body.rating 
    };

    Rating.create(rateIt, function(err, data){
        Movie.findById(req.params.id, function(err, foundMovie){
            if(err){
                console.log(err);
            } else {
                foundMovie.ratings.push(data);
                foundMovie.save(function(err, data2){
                    if(err){
                        console.log(er);
                    } else {
                        console.log(data2);
                        movieFound(data2.name);
                        res.redirect("/movies");
                    }
                });
            }
        });
    });
});
function movieFound(str){
    var total = 0, count = 0;
    Movie.findOne({name: str}).populate({ path: 'ratings', model: Rating }).exec(function(err, foundMovie){
        if(err){
            console.log(err);
        } else {
            console.log(foundMovie);
            foundMovie.ratings.forEach(function(rating){
                total = total + Number(rating.rating);
            });
            count = foundMovie.ratings.length;
            total = total/count;
            rateMovie(total, foundMovie.name);
            console.log(total);
        }
    });
}
function rateMovie(num, str){
    Movie.updateOne({name: str}, {$set: {ratingValue: num}}, function(err, found){
        console.log(found);
    });
}

app.get("/movies", function(req, res){
    var movie = Movie.find({}, function(err, movies){
        if(err){
            console.log(err);
        } else {
            res.render("movies", {movies: movies});
        }
    });
});

app.post("/movies", function(req, res){
    var name = req.body.name;
    var image = req.body.image;

    var newMovie = {
        name: name,
        image: image,
        ratingValue: "0"
    }

    Movie.create(newMovie, function(err, movie){
        if(err){
            console.log(err);
        } else {
            console.log(movie);
            res.redirect("/movies");
        }
    });
});

app.delete("/movies/:id", function(req, res){
    Movie.findByIdAndDelete(req.params.id, function(err){
        if(err){
            res.send("ERROR HAPPENED!");
        } else {
            res.redirect("/movies");
        }
    })
});




app.get("/movies/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(req, res){
    console.log("SERVER STARTED AT PORT 3000!");
});