const mongoose = require('mongoose');
const Comment = require('./comment');


const blog = new mongoose.Schema({
    title:{
        type:String
    },
    img:{
        type:String
    },
    author:{
        type:String
    },
    article:{
        type:String
    },
    comment:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

const Blog = mongoose.model('Blog', blog);


module.exports = Blog;