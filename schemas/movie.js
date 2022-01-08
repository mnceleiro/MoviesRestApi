const Joi = require('joi');

// TODO: completar validaciones
module.exports.createProductSchema = Joi.object({
    title: Joi.string().required(),

    // TODO: validar minima y maxima nota
    rating: Joi.number().required(),

    // TODO: validar minimo de minutos
    runtimeMinutes: Joi.number().required()
});