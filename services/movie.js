const Movie = require('../database/model/movie');
const dbUtils = require('../utils/dbUtils');

module.exports.create = async (movieFromRequest) => {
    const movie = new Movie(movieFromRequest);
    const savedMovie = await movie.save();

    return savedMovie ? savedMovie.toObject() : {};
};

module.exports.update = async (movieFromRequest) => {
    dbUtils.validateMongoId(movieFromRequest.id);

    const updatedMovie = await Movie.findOneAndUpdate(
        { _id: movieFromRequest.id },
        movieFromRequest,
        { new: true }
    );

    console.log(updatedMovie);

    return updatedMovie ? updatedMovie.toObject() : {};
};

module.exports.delete = async (id) => {
    // findByIdAndDelete es un shorthand para findOneAndDelete({ _id: id })
    const deleted = await Movie.findByIdAndDelete(id);

    return deleted ? deleted.toObject() : {};
};

module.exports.getAll = async () => {
    const movies = await Movie.find({});
    const moviesToReturn = movies.map(m => m.toObject());

    return moviesToReturn;
};

module.exports.getById = async (id) => {
    dbUtils.validateMongoId(id);
    
    const movie = await Movie.findById(id);

    return movie ? movie.toObject() : {};
};