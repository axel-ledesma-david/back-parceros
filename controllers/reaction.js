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
    let { id } = req.params;

    try {
      let one = await Reaction.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });

      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "the reaction was update successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "the reaction was not found",
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