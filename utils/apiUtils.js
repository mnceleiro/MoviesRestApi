const constants = require('../constants');
const jwt = require('jsonwebtoken');
const AppError = require('../exceptions/AppError');

// Info sobre catchAsync: https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139
module.exports.catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err)); // Se puede simplificar err => next(err) solo con "next"
    }
}

module.exports.validateToken = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw new AppError(constants.request.validation.message.TOKEN_MISSING, 401);
        }
        
        const token = req.headers.authorization.split('Bearer')[1]?.trim();
        if (!token) {
            throw new AppError(constants.request.validation.message.TOKEN_BAD_FORMAT, 400);
        }
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY || 'api-secret-key', (err) => {
            if (err) throw new AppError(constants.request.validation.message.TOKEN_EXPIRED, 401);
        });

        return next();

    } catch (error) {
        next(error);
    }
}