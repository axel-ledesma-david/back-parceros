const Show = require('../models/Show')

const controller = {
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