import Joi from "joi"

export const userValidator = Joi.object({
    title: Joi.string()
        .required()
        .pattern(/^\w{5,40}$/)
        .messages({
            "any.required": "Title is required",
            "string.pattern.base": "Title must be between 5 and 40 characters",
            "string.empty": "Title cannot be empty"
        }),
    body: Joi.string()
        .required()
        .messages({
            "any.required": "Body is required",
            "string.empty": "Body cannot be empty"
        }),
    userId: Joi.string()
        .min(1)
        .max(5)
        .required()
        .messages({
            "any.required": "User ID is required",
            "string.empty": "User ID cannot be empty",
            "string.max": "User ID must be less than 5"

        })
})