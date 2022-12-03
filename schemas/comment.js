const joi = require('joi')

const schema = joi.object({
    showId: joi.string(),
    userId: joi.string(),
    date: joi.date()
             .required(),
    comment: joi.string()
                .required()
                .min(3)
                .messages({
                    "string.min": "The comment must have a minimum of three characters!."
                })
})

module.exports = schema