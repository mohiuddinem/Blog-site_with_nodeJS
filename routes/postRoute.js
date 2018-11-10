const route = require('express').Router()
const Post = require('../models/Post')
const { createPost, getSinglePost, getAllPosts } = require('../controllers/postController')


// get all post
route.get('/', getAllPosts)

// get single post
route.get('/:id', getSinglePost)
// create new post
route.post('/', createPost)
// edit post
route.patch('/:id',(req, res) => {
    
})
// delete post
route.get('/:id',(req, res) => {
    
})
// search post
route.post('/:terms',(req, res) => {
    
})
// up vote
route.patch('/:id/upvote',(req, res) => {
    
})
// Downvote
route.get('/:id/downvote',(req, res) => {
    
})



module.exports = route