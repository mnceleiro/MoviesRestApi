const movieService = require('../services/movie');
const { catchAsync } = require('../utils/apiUtils');

module.exports.create = catchAsync(async (req, res, next) => {
    const data = req.body;
    const result = await movieService.create(data);

    return res.status(200).send(result);
});

module.exports.getAll = catchAsync(async (req, res, next) => {
    const movies = await movieService.getAll();

    return res.status(200).send(movies);
});

module.exports.getById = catchAsync(async (req, res, next) => {
    const movie = await movieService.getById(req.params.id);

    return res.status(200).send(movie);
});

module.exports.update = catchAsync(async (req, res, next) => {
    const data = req.body;
    const result = await movieService.update(data);

    return res.status(200).send(result);
});

module.exports.delete = catchAsync(async (req, res, next) => {
    const data = req.body;
    const result = await movieService.delete(req.params.id);

    return res.status(200).send(result);
});