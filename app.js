var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("cssFiles"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/movie_app");

var movieSchema = {
    name: String,
    image: String
}

var Movie = mongoose.model("movie", movieSchema);

app.get("/", function(req, res){
    res.render("home")
});

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
        image: image
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

app.get("/movies/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(req, res){
    console.log("SERVER STARTED AT PORT 3000!");
});