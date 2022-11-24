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
    console.log(req.query);
    let query = {};
    if (req.query.cityId) {
      query = {
        ...query,
        cityId: req.query.cityId,
      };
    }

    if (req.query.userId) {
      query = {
        ...query,
        userId: req.query.userId,
      };
    }

    try{
      console.log(req.query.cityId);
      let all = await ItineraryCity.find(query)
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

  readitinerarybyid: async (req, res) => {

    try {
      let itinerary = await ItineraryCity.findOne({_id: req.params.id});

      if (itinerary) {
        res.status(200).json(itinerary);
      }
    } catch (error) {
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
