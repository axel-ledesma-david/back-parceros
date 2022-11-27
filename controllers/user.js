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
  read: async (req, res)=> {
    try {
      let usersAll = await user.find()
      if(usersAll){
        res.status(200).json({
          res: usersAll,
          success: true,
          message: "Users found"
        })
      } else {
        res.status(404).json({
          success: false,
          message: "The users is not found"
        })
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  },
  signIn : async (req, res) => {
    let { password } = req.body
    let { user } = req
    try {
      
    } catch (err) {
      
    }
  },
  signInWithToken: async (req, res) => {
    try {
      
    } catch (err) {
      
    }
  }
};

module.exports = controller;