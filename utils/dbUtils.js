const mongoose = require("mongoose");

module.exports.validateMongoId = (id) => {
    if (!mongoIdIsValid(id)) {
        throw new Error(`La ID ${id} no es válida.`);
    }
}

const mongoIdIsValid = (id) => mongoose.Types.ObjectId.isValid(id); 