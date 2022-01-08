const mongoose = require("mongoose");

// TODO: Validar esquema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: '{PATH} is required'
    },
    password: {
        type: String,
        required: '{PATH} is required'
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
}, {
    timestamps: true,

    toObject: {
        transform: (doc, ret, options) => {
            ret.id = ret._id;

            delete ret._id;
            delete ret.__v;
            delete ret.password;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    }
});

module.exports = mongoose.model('User', userSchema);