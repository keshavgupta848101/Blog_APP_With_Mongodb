const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    comment:{
        type: String,
        required: true
    }
})



const Comment = mongoose.model('Comment', comment);


module.exports = Comment;