const { date } = require('joi')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    showId: { type: mongoose.Types.ObjectId, ref: 'shows' },
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    date: { type: Date, required: true },
    comment: { type: String, required: true }
})

const Comment = mongoose.model('coments', schema)

module.exports = Comment