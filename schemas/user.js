const Joi = require('joi');

module.exports.signup = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string(),
    lastName: Joi.string()
});

module.exports.login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});