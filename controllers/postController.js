const mongoose = require('mongoose')
const Post = require('../models/Post')

// create post controller

const createPost = (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        catagory: req.body.catagory || 'General',
        tag: req.body.tag || [],
        imageUrl: req.body.imageUrl || [],
        slug: req.body.slug || (function(){
            return req.body.title.split(' ').join('_')
        })()


    })

    post.save()
        .then(post => {
            res.status(201).json({
                message: 'post Created Succesfully',
                post
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message:"Server Error",
                error
            })
        })

}


// Get all post
const getAllPosts = (req, res, next) => {
    Post.find()
        .then(users =>{
            res.status(200).json({
                users
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message:"Server Error",
                error
            })
        })
}

// get single post 

const getSinglePost = (req, res, next) => {

    let  { id } = req.params

    if(mongoose.Types.ObjectId.isValid(id)) {

        Post.findById(id)
            .then(post =>{
                if(post){
                    res.status(200).json({
                        post
                    })

                }else {
                    res.status(204).json({
                        message:"No post found"
                    })
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({
                    message:"Server Error",
                    error
                })
            })

    }else{
        Post.findOne({slug: id})
            .then(post =>{
                if(post){
                    res.status(200).json({
                        post
                    })
                }else {

                    res.status(204).json({
                        message:"No post found",
                        
                    })
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({
                    message:"Server Error",
                    error
                })
            })

    }

}



module.exports = {

    createPost,
    getSinglePost,
    getAllPosts

}