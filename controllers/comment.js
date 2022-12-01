const Comment = require('../models/Comment')
/* const { error } = require('../schemas/comment') */

const controller = {

    read: async (req, res) => {

        let  query = {}

        if (req.query.showId) {
            query = { showId: req.query.showId }
        }

        try {
            let allComments =  await Comment.find(query).sort({ date: 'desc' })
            if (allComments) {
                res.status(200).json({
                    response: allComments,
                    success: true,
                    message: 'comments found successfully'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Comment is not found'
                })
            }
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    create: async (req, res) => {

        let { user } = req

        try {
            const newComment = await Comment.create({...req.body, userId: user.id})
            res.status(200).json({
                res: newComment,
                success: true,
                message: 'The comment has been created successfully'
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err
            })
            
        }
    }

}

module.exports = controller