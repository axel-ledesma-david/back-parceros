const joi = require('joi')

const schema = joi.object({

  name: joi.string().required()
  .min(3)
  .max(50) ,
  continent: joi.string().required()
  .min(3) ,
  photo: joi.string().required()
  ,
  population: joi.number().required() ,
  userId: joi.string().required(),

})

module.exports = schema