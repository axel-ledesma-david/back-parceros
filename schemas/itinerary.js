const joi = require('joi')

const schema = joi.object({

  cityId: joi.string().required(),
  name: joi.string().required()
  .min(3)
  .max(50) ,
  photo: joi.string().required(),
  description: joi.string().required()
  .min(3) ,

  price: joi.number().required() ,
  duration: joi.number().required() ,
  userId: joi.string().required(),

})

module.exports = schema