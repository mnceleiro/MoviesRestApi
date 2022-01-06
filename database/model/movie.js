const mongoose = require("mongoose");

// TODO: Validar esquema
const movieSchema = new mongoose.Schema({
    title: String,
    runtimeMinutes: Number,
    rating: Number,
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