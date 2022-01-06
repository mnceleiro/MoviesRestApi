const Joi = require('joi');

module.exports.createProductSchema = Joi.object({
    title: Joi.string().required(),

    // TODO: validar minima y maxima nota
    rating: Joi.number().required(),

    // TODO: validar minimo de minutos
    runtimeMinutes: Joi.number().required()
});