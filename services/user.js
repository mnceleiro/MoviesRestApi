const User = require('../database/model/user');
const AppError = require('../exceptions/AppError');
const dbUtils = require('../utils/dbUtils');
const constants = require('../constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async (userFromRequest) => {

    // Compruebo que no haya un usuario ya registrado con ese email
    const u = await User.findOne({ email: userFromRequest.email });
    if (u) {
        throw new AppError(constants.user.messages.DUPLICATE_EMAIL);
    }

    // Genero un hash para la password y lo guardo en la BBDD
    userFromRequest.password = await bcrypt.hash(userFromRequest.password, 12);
    const newUser = new User(userFromRequest);
    const savedUser = await newUser.save();

    return savedUser ? savedUser.toObject() : {};
};

module.exports.login = async ({ email, password }) => {
    if (!email || !password) {
        throw new AppError(constants.user.messages.EMAIL_OR_PASSWORD_MISSING);
    }
    const user = await User.findOne({ email });

    if (!user) {
        throw new AppError(constants.user.messages.USER_NOT_FOUND);
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        throw new Error(constants.user.messages.INVALID_PASSWORD)
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.SECRET_KEY || 'my-secret-key',
        { expiresIn: '1d' }
    );

    return { token }
}