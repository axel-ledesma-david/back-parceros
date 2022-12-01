const Reaction = require("../models/Reaction");

const controller = {
  create: async (req, res) => {
    try {
      let new_reaction = await Reaction.create(req.body);

      res.status(201).json({
        id: new_reaction._id,
        success: true,
        message: "the reaction was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let query = {};


    if (req.query.name) {
      query = {
        ...query,
        name: req.query.name,
      };
    }

    if (req.query.itineraryId) {
      query = {
        ...query,
        itineraryId: req.query.itineraryId,
      };
    }

    try {
      let all = await Reaction.find(query);
      res.status(200).json({
        response: all,
        success: true,
        message: "Reaction Update",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      }); 
    }
},

readitineraryid: async (req, res) => {
  let query = {};

  if (req.query.itineraryId) {
    query = {
      ...query,
      itineraryId: req.query.itineraryId,
    };
  }

  try {
    let all = await Reaction.find(query);
    res.status(200).json({
      response: all,
      success: true,
      message: "Reaction were found",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    }); 
  }
},

readuserid: async (req, res) => {
  let query = {};

  if (req.query.userId) {
    query = {
      ...query,
      userId: req.query.userId,
    };
  }

  try {
    let all = await Reaction.find(query);
    res.status(200).json({
      response: all,
      success: true,
      message: "Reaction were found",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    }); 
  }
},

destroy: async (req, res) => {
  let { id } = req.params;
  try {
    let one = await Reaction.findOneAndDelete({ _id: id });
    if (one) {
      res.status(200).json({
        id: one._id,
        success: true,
        message: "the reaction was deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "the reactions was not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
},


}



 


module.exports = controller;