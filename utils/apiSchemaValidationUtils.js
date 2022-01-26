const Joi = require('joi');
const constants = require('../constants');
const AppError = require('../exceptions/AppError');

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body);

        //console.log(result.error.details);

        if (result.error) {
            throw new AppError(constants.request.validation.message.BAD_REQUEST + ": " + result.error.details[0].message, 400);
        }

        return next();
    }
}