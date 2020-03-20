const mongoose = require("mongoose");

var movieSchema = {
    name: String,
    image: String,
    ratingValue: String,
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ]
}
module.exports = mongoose.model("movie", movieSchema);