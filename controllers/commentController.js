const  Comment = require('../models/Comment')

const Post = require('../models/Post')


const postComment = (req, res, next) => {

    let {postId} = req.params

    let comment = new Comment({
        userid: req.body.userid,
        userName: req.body.userName,
        postId,
        body: req.body.body
    })

    comment.save()
            .then(data => {

                Post.findById(postId)
                    .then(post =>{
                        
                        post.comments.push(data._id)
                        Post.findOneAndUpdate({_id: postId}, {$set: post})
                            .then(data2 =>{
                                res.json({
                                    message:"Comment Added"
                                })    
                            })
                    })

                // Post.findById(postId)
                //     .then(post =>{
                
                //     Post.comments.push(data._id)

                //     Post.findOneAndUpdate({_id:postId}, {$set: post})
                //         .then(data2=>{
                //             res.json({
                //                 message:"Comment Added"
                //             })
                //         })
                //     })
                })
            
            
            .catch(error => {
               
                res.status(500).json({
                    message:"Server Error",
                    error
                })
            })
}


module.exports = {
    postComment
}


