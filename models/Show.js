const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    hotelId: { type: mongoose.Types.ObjectId, ref: 'hotels'},
    userId: { type: mongoose.Types.ObjectId, ref: 'users' }
})

const Show = mongoose.model('shows', schema)

module.exports = Show