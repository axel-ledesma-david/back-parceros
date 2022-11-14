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
    update: async () => {

    },
    destroy: async () => {

    },
}

module.exports = controller