const City = require('../models/City')

const controller = {

  Create: async (req, res) => {
    console.log("inicio cities");
    console.log(req.body);
    try {
      let new_city = await City.create(req.body);
      console.log(new_city);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "the city was created successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },


    read: async (req, res) => {
      let query = {}
      let order ={}


      if(req.query.name){
        query= {name: new RegExp(req.query.name, 'i')}
      }

      if(req.query.continent){
        query= {
          ...query,
          continent: req.query.continent }
      }


      try{
        let all = await City.find(query).populate("userId","name")
        res.status(200).json({
          response: all,
          success: true,
          message: "cities were found",
        });
      }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    },



    readcitybyid: async (req, res) => {
      let { id } = req.params;
  
      try {
        let city = await City.findOne({ _id: id });
  
        if (city) {
          res.status(200).json(city);
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
        let one = await City.findOneAndUpdate({ _id: id }, req.body, {
          new: true,
        });
  
        if (one) {
          res.status(200).json({
            id: one._id,
            success: true,
            message: "the city was update successfully",
          });
        } else {
          res.status(400).json({
            success: false,
            message: "the city was not found",
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
        let one = await City.findOneAndDelete({_id: id})
        if(one){
          res.status(200).json({
            id: one._id,
            success: true,
            message: "the city was deleted successfully"
          })
        }else{
          res.status(404).json({
            success: false,
            message: "the city was not found"
          })
        }
      }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      },


}

module.exports = controller