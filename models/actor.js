const mongoose = require("mongoose");

var actorSchema = {
    name: String,
    image: String,
    dob: Date,
    bio: String,
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
    upcomingMovies: [String]
}

module.exports = mongoose.model("Actor", actorSchema);