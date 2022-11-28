const joi = require('joi')

const schemaSignIn = joi.object({

  email: joi.string().required()
  .min(3)
  .max(50) ,
  password: joi.string().required()
  .min(3)
  .max(50),
})

module.exports = schemaSignIn