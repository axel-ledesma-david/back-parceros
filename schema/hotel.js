const joi = require('joi')

const schema = joi.object({
    name: joi
        .string()
        .required()
        .min(4)
        .max(50)
        .messages({
            "string.base": "Please, enter a name!!",
            "any.required": "This field is required!",
            "string.epmty": "This field name is empty!",
            "string.min": "The name must to have more than 4 characters!!",
            "string.max": "The name must to have less than 50 characters!!"
        }),
    photo: joi
        .string()
        .required()
        .uri()
        .messages({
            "string.base": "Please, enter a url!!",
            "any.required": "This field is required!",
            "string.empty": "This field photo is empty!"
        }),
    capacity: joi
        .number()
        .required()
        .messages({
            "number.base": "Please, enter a number!!",
            "any.required": "This field is required!",
            "number.empty": "This field capacity is empty!"
        }),
    cityId: joi
        .string()
        .required()
        .messages({
            "any.required": "This field is required!",
            "string.empty": "This field city is empty!"
        }),
    userId: joi
        .string()
        .required()
        .messages({
            "any.required": "This field is required!",
            "string.empty": "This field user is empty!"
        })
})

module.exports = schema
