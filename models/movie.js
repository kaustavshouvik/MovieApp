const mongoose = require("mongoose");

var movieSchema = {
    name: String,
    poster: String,
    image: String,
    genres: [String],
    actors: [String],
    plot: String,
    boxoffice: {
        budget: String,
        profit: String
    },
    addedBy: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    ratingValue: String,
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ]
}

module.exports = mongoose.model("movie", movieSchema);