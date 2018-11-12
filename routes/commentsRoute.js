const route = require('express').Router()

const {
    postComment
} = require('../controllers/commentController')

// Create comment
route.post('/:postId/comments', postComment)
// Edit comment
route.patch('/:id',(req, res, next) =>{

})
// Delete comment
route.delete('/',(req, res, next) =>{

})
// Get All acomments comment
route.get('/',(req, res, next) =>{

})


module.exports = route