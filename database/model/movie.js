const Joi = require("joi");
const mongoose = require("mongoose");

// TODO: Validar esquema
const movieSchema = new mongoose.Schema({
    title: String,
    runtimeMinutes: Number,
    rating: Number,
    genre: String,
    platform: String,
    description: String,
    imageUrl: String,
    trailerUrl: String,
    releaseYear: Number,
    country: String,
    ageRating: Number,

    directorFirstname: String,
    directorLastname: String,
    directorFullname: String,
    directorPhone: String,

    musicDirector: String,
    photographyDirector: String,
    screenwriters: String
}, {
    timestamps: true,

    toObject: {
        transform: (doc, ret, options) => {
            ret.id = ret._id;

            delete ret._id;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    }
});

module.exports = mongoose.model('Movie', movieSchema);