const movieService = require('../services/movie');
const Movie = require('../database/model/movie');

module.exports.create = async (req, res) => {
    // Obtengo los datos de la peticion
    const data = req.body;

    // Anhado el elemento
    const result = await movieService.create(data);

    // Devuelvo la respuesta
    return res.status(200).send(result);
}

module.exports.getAll = async (req, res) => {
    const movies = await movieService.getAll();

    return res.status(200).send(movies);
}

module.exports.getById = async (req, res) => {
    const movie = await movieService.getById(req.params.id);

    return res.status(200).send(movie);
}

module.exports.update = async (req, res) => {
    const data = req.body;

    const result = await movieService.update(data);

    return res.status(200).send(result);
}

module.exports.delete = async (req, res) => {
    // Obtengo los datos de la peticion
    const data = req.body;
    const result = await movieService.delete(req.params.id);

    // Devuelvo la respuesta
    return res.status(200).send(result);
}