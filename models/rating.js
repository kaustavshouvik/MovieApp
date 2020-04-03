var mongoose = require("mongoose");

var ratingSchema = {
    rating: {type: String},
    ratedBy: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: {type: String}
    },
    movie: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        },
        name: {type: String}
    },
    content: {type: String}
};

module.exports = mongoose.model("rating", ratingSchema);