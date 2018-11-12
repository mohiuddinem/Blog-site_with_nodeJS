const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentsSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    postId:{
        type: Schema.Types.ObjectId,
        required:true
    },
    body:{
        type: String,
        required:true,
        maxlength: 1000,
        trim: true
    }
})


const Comment = mongoose.model('Comment',CommentsSchema)

module.exports = Comment
