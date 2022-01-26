const mongoose = require("mongoose");

// TODO: Validar esquema
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    platform: String,
    description: String,
    imageUrl: String,
    runtimeMinutes: Number,
    rating: Number,
    directorFirstname: String,
    directorLastname: String,
    directorPhone: String
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