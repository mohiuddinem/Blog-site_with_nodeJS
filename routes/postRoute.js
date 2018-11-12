const route = require('express').Router()
const Post = require('../models/Post')
const { 
    createPost,
    getSinglePost,
    getAllPosts,
    upvote,
    downvote,
    updatePost,
    deletePost,
    search 
} = require('../controllers/postController')

const commentRouter = require('./commentsRoute')



// get all post
route.get('/', getAllPosts)

// get single post
route.get('/:id', getSinglePost)

// create new post
route.post('/', createPost)

// edit post
route.patch('/:id', updatePost)

// delete post
route.get('/:id',deletePost)

// search post
route.post('/:terms',search)
// up vote
route.patch('/:id/upvote', upvote)

// Downvote
route.patch('/:id/downvote', downvote)



route.use('/', commentRouter)

module.exports = route