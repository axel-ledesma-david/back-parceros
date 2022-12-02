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
    },
    update: async (req, res) => {
        let { id } = req.params

        try {
            
            let oneComment = await Comment.findOneAndUpdate({ _id : id }, req.body, { new: true })
            if(oneComment){
                res.status(200).json({
                    res: oneComment,
                    success: true,
                    message: 'comment updated successfully'
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'The comment is not found'
                })
            }

        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }

    },
    destroy: async (req, res) => {
        let { id } = req.params

        try {
            
            let oneComment = await Comment.findOneAndDelete({ _id: id })

            if(oneComment){
                res.status(200).json({
                    res: oneComment._id,
                    success: true,
                    message: 'Comment deleted successfully'
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

    }

}

module.exports = controller