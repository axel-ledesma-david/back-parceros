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
    read: async () => {

    },
    update: async () => {

    },
    destroy: async () => {

    },
}

module.exports = controller