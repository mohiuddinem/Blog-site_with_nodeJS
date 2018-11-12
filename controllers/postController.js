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

const upvote = (req, res, next) =>{
    let {id} = req.params

    Post.findById(id)
        .then(post=>{
            Post.findByIdAndUpdate(id, {$set: {vote: post.vote + 1}})
                .then(post1=>{
                    res.json({
                        message: "Done"
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        message:"Server Error",
                        error
                    })
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
const downvote = (req, res, next) =>{
    let {id} = req.params

    Post.findById(id)
        .then(post=>{
            Post.findByIdAndUpdate(id, {$set: {vote: post.vote - 1}})
                .then(post1=>{
                    res.json({
                        message: "Done"
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        message:"Server Error",
                        error
                    })
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


// Edit a post 

const updatePost = (req, res, next) =>{
    let {id} = req.params

    Post.findOneAndUpdate({_id: id}, {$set: req.body})
        .then(post => Post.findById(id))
        .then(post =>{
            res.json({
                message:"Yes Updated",
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

const deletePost = (req, res, next) => {
    let {id} = req.params

    Post.findOneAndDelete({_id:id})
        .then(post=>{
            res.json({
                message:"POst Deleted Successfully",
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

const search = (req, res, next) =>{
    let  terms = req.body.terms

    Post.find({ $text: { $search:terms }})
        .then(results=>{
            if(results.lenght===0){
                res.json({
                    message:"No data Found"
                })
            }else{
                res.json({
                    results
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



module.exports = {

    createPost,
    getSinglePost,
    getAllPosts,
    upvote,
    downvote,
    updatePost,
    deletePost,
    search

}