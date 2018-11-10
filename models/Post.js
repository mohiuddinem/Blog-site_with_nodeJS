const mongoose = require('mongoose')
const Scheam = mongoose.Schema

const PostSchema = new Scheam({
    title: {
        type:String,
        required:true,
        maxlength:100,
        trim:true
    },
    body:{
        type:String,
        required:true,
        maxlength:5000
    },
    author:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        default:'General'
    },
    tag:{
        type:[String]
    },
    vote:{
        type:Number,
        default:0
    },
    imageUrl:String,
    slug:{
        type:String,
        required: true,
        trim:true
    }

},{
    timestamps:true
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
