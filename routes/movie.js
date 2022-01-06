const express = require('express');
const moviesController = require('../controllers/movie');

const router = express.Router();

router.get('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Obtiene la lista de peliculas.'   
*/
    moviesController.getAll
);

router.get('/:id', 
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Obtiene una pelicula por su id.'   
*/
    moviesController.getById
);

router.post('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Crear una nueva pelicula.'   
*/
    moviesController.create
);

router.put('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Actualiza una pelicula.'   
*/
    moviesController.update
);

router.delete('/:id', 
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Elimina una película.'   
*/
    moviesController.delete
);

module.exports = router;