const user = require("../models/User");

const controller = {
  Create: async (req, res) => {
    try {
      let new_user = await user.create(req.body);

      res.status(201).json({
        id: new_user._id,
        success: true,
        message: "the user was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;