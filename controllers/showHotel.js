const Show = require('../models/Show')

const controller = {
    create: async (req, res) => {
        try {

            let new_show = await Show.create(req.body)

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
        try {
            let all = await Show.find({ hotelId : req.query.hotelId }).populate("hotelId", "name")
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
    }
}
 
module.exports = controller