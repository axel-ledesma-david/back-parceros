const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req, res = response, next) => {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la validacion",
    });
  }

  try {
    const { id } = jwt.verify(token, "seed123");
    req.id = id;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
  next();
};

module.exports = { validarJWT };