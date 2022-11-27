const joi = require('joi')

const schemaSignIn = joi.object({

  name: joi.string().required()
  .min(3)
  .max(50) ,
  password: joi.string().required()
  .min(3)
  .max(50),
})

module.exports = schemaSignIn