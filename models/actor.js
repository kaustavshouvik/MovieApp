const mongoose = require("mongoose");

var actorSchema = {
    name: {type: String, required: true},
    image: {type: String, required: true},
    dob: {type: Date, required: true},
    bio: {type: String, required: true},
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
    upcomingMovies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
}

module.exports = mongoose.model("Actor", actorSchema);