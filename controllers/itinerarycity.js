const ItineraryCity = require("../models/ItineraryCity");

const controller = {
  Create: async (req, res) => {
    try {
      let new_itinerarycity = await ItineraryCity.create(req.body);

      res.status(201).json({
        id: new_itinerarycity._id,
        success: true,
        message: "the itinerary was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  readitinerarycity: async (req, res) => {
    try{
      console.log(req.query.cityId);
      let all = await ItineraryCity.find({cityId: req.query.cityId}).populate("cityId","name")
      res.status(200).json({
        response: all,
        success: true,
        message: "Itineraries were found",
      });
    }catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  
  },

  update: async (req, res) => {
    let { id } = req.params;

    try {
      let one = await ItineraryCity.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });

      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "the itinerary was update successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "the itinerary was not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },


destroy: async(req,res)=>{
  let {id} = req.params
  try{
    let one = await ItineraryCity.findOneAndDelete({_id: id})
    if(one){
      res.status(200).json({
        id: one._id,
        success: true,
        message: "the itinerary was deleted successfully"
      })
    }else{
      res.status(404).json({
        success: false,
        message: "the itinerary was not found"
      })
    }
  }catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  }
}

 


module.exports = controller;
