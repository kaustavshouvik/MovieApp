const mongoose = require("mongoose");

var movieSchema = {
    name: {type: String, required: true},
    poster: {type: String, required: true},
    image: {type: String, required: true},
    genres: [{type: String}],
    actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor"
        }
    ],
    release: {type: Date, required: true},
    plot: {type: String},
    boxoffice: {    //IN MILLIONS[DOLLARS]
        budget: {type: Number},
        profit: {type: Number}
    },
    ratingValue: {type: String, default: 'Unrated'},
    ratingCount: {type: Number, default: 0},
    primeLink: {type: String, default: ''},
    netflixLink: {type: String, default: ''},
    hotstarLink: {type: String, default: ''},
    youtubeLink: {type: String, default: ''},
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ]
}

module.exports = mongoose.model("movie", movieSchema);