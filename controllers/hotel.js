const Hotel = require('../models/Hotel')

const controller = {
    create: async (req, res) => {
        try {
            let new_hotel = await Hotel.create(req.body)

            res.status(201).json({
                id : new_hotel._id,
                succsess: true,
                message: 'Hotel created succssefuly'
            })

        } catch (err) {
            res.status(400).json({
                succsess: false,
                message: err.message
            })
        }
    },

    // comentario para poder pushear

    read: async (req, res) => {
        let query = {}
        let order = {}

        if (req.query.name){
            query = {name : new RegExp(req.query.name, 'i')}
        }
        if (req.query.order){
            order = {name: req.query.order}
        }
        try {
            let all = await Hotel.find(query).sort(order)
            
            if (all){
                res.status(200).json({
                    response: all,
                    success: true,
                    message: "Hotel found successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Hotel is not found"
                })
            }
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    },
    readHotelDetail: async (req, res) => {
        let { id } = req.params
        try {
            let hotelDetail = await Hotel.findOne({_id : id})
            if (hotelDetail){
                res.status(200).json({
                    res: hotelDetail,
                    success: true,
                    message: "Hotel detail Found" 
                })
            } else {
                res.status(404).json({
                    seccess: false,
                    message: "The hotel detail is not found"
                })
            }
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message 
            })
        }
    },
    update: async () => {

    },
    destroy: async () => {

    },
}

module.exports = controller