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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    content: {type: String}
};

module.exports = mongoose.model("rating", ratingSchema);