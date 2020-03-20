var mongoose = require("mongoose");

var ratingSchema = {
    rating: String
};
var Rating = mongoose.model("rating", ratingSchema);
module.exports = Rating;