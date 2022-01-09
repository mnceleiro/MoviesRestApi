const express = require('express');
const moviesController = require('../controllers/movie');
const apiUtils = require('../utils/apiUtils');
const router = express.Router();

router.get('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Obtiene la lista de peliculas.'   
*/
    apiUtils.validateToken,
    moviesController.getAll
);

router.get('/:id', 
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Obtiene una pelicula por su id.'
*/
    apiUtils.validateToken,
    moviesController.getById
);

router.post('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Crear una nueva pelicula.'
*/
    apiUtils.validateToken,
    moviesController.create
);

router.put('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Actualiza una pelicula.'   
*/
    apiUtils.validateToken,
    moviesController.update
);

router.delete('/:id', 
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Elimina una película.'   
*/
    apiUtils.validateToken,
    moviesController.delete
);

module.exports = router;