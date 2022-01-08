const mongoose = require("mongoose");
const AppError = require('../exceptions/AppError');

module.exports.validateMongoId = (id) => {
    if (!mongoIdIsValid(id)) {
        // TODO: a fichero de constantes
        throw new AppError(`La ID ${id} no es válida.`, 400);
    }
}

const mongoIdIsValid = (id) => mongoose.Types.ObjectId.isValid(id); 