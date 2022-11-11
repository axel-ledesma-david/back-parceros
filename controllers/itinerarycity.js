const ItineraryCity = require('../models/ItineraryCity')

const controller ={

Create: async(req,res)=>{
try{

    let new_itinerarycity = await ItineraryCity.create(req.body)

    res.status(201).json({
      id: new_itinerarycity._id,
      success: true,
      message: "the itinerary was created successfully"
    })

}catch(error){
  res.status(400).json({
    success: false,
    message: error.message
  })

}
},
}

module.exports = controller