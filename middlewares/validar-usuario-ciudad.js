const City = require("../models/City");

const validarUsuario = async (req, res, next) => {
  let id = req.id;
  let { id: cityId } = req.params;

  try {
    let city = await City.findOne({ userId: id, _id: cityId });
    if (city) {
      next()
    } else {
      res.status(400).json({
        success: false,
        message: "No hace parte de tus ciudades",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { validarUsuario }