const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    recipeID:{
        type: Number,
        required: true
    },
    rating:{
        type: mongoose.SchemaTypes.Decimal128,
        required: true,
        default: null
    },
    review:{
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review',ReviewSchema,'reviews');

module.exports = Review;