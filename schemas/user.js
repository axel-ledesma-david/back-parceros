const joi = require('joi')

const schema = joi.object({

  name: joi.string().required()
  .min(3)
  .max(50) ,
  lastName: joi.string().required()
  .min(3)
  .max(50) ,
  
  role: joi.string().required(),

  photo: joi.string().required(),
  age: joi.number().required() ,

  email: joi.string().required().email({minDomainSegments:2}),

  password: joi.string().required()
  .min(3)
  .max(50),
})

module.exports = schema