const Joi = require('joi');

// TODO: completar validaciones
module.exports.createMovieSchema = Joi.object({
    title: Joi.string().required(),

    // TODO: validar minima y maxima nota
    rating: Joi.number().required(),

    // TODO: validar minimo de minutos
    runtimeMinutes: Joi.number().required(),
    
    genre: Joi.string(),
    platform: Joi.string(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    directorFirstname: Joi.string(),
    directorLastname: Joi.string(),
    directorPhone: Joi.string()
});

module.exports.updateMovieSchema = Joi.object({
    title: Joi.string(),
    genre: Joi.string(),
    platform: Joi.string(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    rating: Joi.number(),
    runtimeMinutes: Joi.number(),
    directorFirstname: Joi.string(),
    directorLastname: Joi.string(),
    directorPhone: Joi.string()
});