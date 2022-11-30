const joi = require('joi')

const schema = joi.array().items(joi.object({

  itineraryId: joi.string().required(),
  name: joi.string().required()
  .min(3)
  .max(50),
  icon: joi.string().required(),
  iconBack: joi.string().required() ,
  userId: joi.string().required(),

}))

module.exports = schema