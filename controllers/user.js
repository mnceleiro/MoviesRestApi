const { catchAsync } = require("../utils/apiUtils")
const userService = require('../services/user.js');

module.exports.signup = catchAsync(async (req, res, next) => {
    const user = await userService.signup(req.body);

    return res.status(200).send(user);
});

module.exports.login = catchAsync(async (req, res, next) => {
    // TODO: Validar login correcto
    const token = await userService.login(req.body)

    return res.status(200).send(token);
});