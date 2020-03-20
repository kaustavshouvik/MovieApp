const mongoose = require("mongoose");

var movieSchema = {
    name: {type: String, required: true},
    poster: String,
    image: String,
    genres: [String],
    actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor"
        }
    ],
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
    ratingCount: Number,
    primeLink: String,
    netflixLink: String,
    hotstarLink: String,
    youtubeLink: String,
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ]
}

module.exports = mongoose.model("movie", movieSchema);