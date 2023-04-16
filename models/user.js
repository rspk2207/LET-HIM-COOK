const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        default: ""
    },
    savedRecipes: [{
        type: Number,
    }]
})

const User = mongoose.model('User',UserSchema,'users');

module.exports = User;