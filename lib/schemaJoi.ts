import Joi from "joi";

export const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20)
        .required()
        .alphanum()
        .messages({
            'string.base': `"name" should be a type of 'text'`,
            'string.empty': `"name" cannot be an empty field`,
            'string.min': `"name" should have a minimum length of {#limit}`,
            'string.max': `"name" should have a maximum length of {#limit}`,
            'string.alphanum': `"name" should only contain alpha-numeric characters`,
            'any.required': `"name" is a required field`,
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'string.email': `"email" must be a valid email address`,
            'any.required': `"email" is a required field`,
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
        .required()
        .messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'string.pattern.base': `"password" must only contain alphanumeric characters and be between 3 and 30 characters long`,
            'string.min': `"password" should have a minimum length of {#limit}`,
            'string.max': `"password" should have a maximum length of {#limit}`,
            'any.required': `"password" is a required field`,
        })
})