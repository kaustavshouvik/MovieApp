var mongoose = require("mongoose");

var ratingSchema = {
    rating: String,
    review: String,
    ratedBy: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
};
var Rating = mongoose.model("rating", ratingSchema);

module.exports = Rating;