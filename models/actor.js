const mongoose = require("mongoose");

var actorSchema = {
    name: String,
    image: String,
    dob: Date,
    bio: String,
    movies: [String],
    upcomingMovies: [String]
}

module.exports = mongoose.model("Actor", actorSchema);