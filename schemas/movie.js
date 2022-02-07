const Joi = require('joi');

// TODO: completar validaciones
module.exports.createMovieSchema = Joi.object({
    title: Joi.string().required(),
    rating: Joi.number(),
    runtimeMinutes: Joi.number(),

    genre: Joi.string(),
    platform: Joi.string(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    trailerUrl: Joi.string(),
    releaseYear: Joi.number(),
    releaseDate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/),
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
    id: Joi.string().required(),
    title: Joi.string(),
    rating: Joi.number(),
    runtimeMinutes: Joi.number(),
    genre: Joi.string(),
    platform: Joi.string(),
    description: Joi.string(),
    imageUrl: Joi.string(),
    trailerUrl: Joi.string(),
    releaseYear: Joi.number(),
    releaseDate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/),
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