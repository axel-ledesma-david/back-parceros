const Show = require('../models/Show')

const controller = {
    create: async (req, res) => {
        try {

            let new_show = await (await Show.create(req.body)).populate("hotelId", "_id")

            res.status(201).json({
                res: new_show,
                success: true,
                message: "New show created successfully"
            })
        } catch (err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    read: async (req, res) => {

        let query = {}

        if(req.query.hotelId){
            query = {hotelId: req.query.hotelId}
        }

        if(req.query.userId){
            query = {
                ...query,
                userId: req.query.userId
            }
        }

        try {
            let all = await Show.find(query).populate("hotelId", "name")
            if(all){
                res.status(200).json({
                    res: all,
                    success: true,
                    message: "Show found successfully"
                })
            }

        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    showById: async (req, res) => {
        let { id } = req.params

        try {
            let showOne = await Show.findOne({ _id : id})

            if(showOne){
                res.status(200).json({
                    res: showOne,
                    success: true,
                    message: 'Show found successfully'
                }) 
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Show is not found'
                })
            }
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    update: async (req, res) => {
        let {id} = req.params

        try {
            let show = await Show.findOneAndUpdate({_id : id}, req.body, { new: true })

            if (show) {
                res.status(200).json({
                    res: show._id,
                    success: true,
                    message: "The show has been modified successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "The show is not found"
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
            
            let show = await Show.findOneAndDelete( { _id: id })
            if (show) {
                res.status(200).json({
                    res: show._id,
                    success: true,
                    message: "The show is deleted successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "The show is not found"
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