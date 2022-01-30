const Joi = require('joi');

// TODO: completar validaciones
module.exports.createMovieSchema = Joi.object({
    title: Joi.string().required(),
    rating: Joi.number().required(),
    runtimeMinutes: Joi.number().required(),

    genre: Joi.string(),
    platform: Joi.string(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    trailerUrl: Joi.string(),
    releaseYear: Joi.number(),
    country: Joi.string(),
    ageRating: Joi.number(),

    directorFirstname: Joi.string(),
    directorLastname: Joi.string(),
    directorFullname: Joi.string(),
    directorPhone: Joi.string(),

    musicDirector: Joi.string(),
    photographyDirector: Joi.string(),
    screenwriters: Joi.string(), // Guion
});

module.exports.updateMovieSchema = Joi.object({
    title: Joi.string(),
    rating: Joi.number(),
    runtimeMinutes: Joi.number(),
    genre: Joi.string(),
    platform: Joi.string(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    trailerUrl: Joi.string(),
    releaseYear: Joi.number(),
    country: Joi.string(),
    ageRating: Joi.number(),

    directorFirstname: Joi.string(),
    directorLastname: Joi.string(),
    directorFullname: Joi.string(),
    directorPhone: Joi.string(),

    musicDirector: Joi.string(),
    photographyDirector: Joi.string(),
    screenwriters: Joi.string(), // Guion
});