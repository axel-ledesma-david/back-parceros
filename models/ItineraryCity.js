
const mongoose =require('mongoose')

const schema = new mongoose.Schema({

  cityId: {type: mongoose.Types.ObjectId , ref: 'hotels' , required: true},
  name:{type: String , required: true},
  photo: [{type: String , required: true}],
  description: {type: String , required: true},
  price:{type: Number , required: true},
  duration: {type: Number , required: true},
  userId:{type: mongoose.Types.ObjectId , ref: 'users' , required: true},

})

const ItineraryCity = mongoose.model('ItineraryCities',schema)
module.exports = ItineraryCity