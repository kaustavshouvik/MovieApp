var mongoose = require("mongoose");

var ratingSchema = {
    rating: String,
    ratedBy: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }
};
var Rating = mongoose.model("rating", ratingSchema);

module.exports = Rating;