const City = require('../models/City')

const controller = {

  create: async () => {

  },
    read: async () => {

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


    destroy: async () => {

    },
}

module.exports = controller