const express = require('express');
const moviesController = require('../controllers/movie');
const apiUtils = require('../utils/apiUtils');
const apiSchemaValidation = require('../utils/apiSchemaValidationUtils');
const movieSchema = require('../schemas/movie');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Movie:
 *          type: object
 *          required:
 *              - title
 *              - rating
 *              - runtimeMinutes
 *          properties:
 *              id:
 *                  type: string
 *                  description: La id autogenerada de la película
 *              title:
 *                  type: string
 *                  description: Título de la película
 *              genre:
 *                  type: string
 *                  description: Género de la peícula
 *              description:
 *                  type: string
 *                  description: Descripción de la película
 *              imageUrl:
 *                  type: string
 *                  description: URL de la carátula de la película
 *              directorFirstname:
 *                  type: string
 *                  description: Nombre del director
 *              directorLastname:
 *                  type: string
 *                  description: Apellidos del director
 *              directorPhone:
 *                  type: string
 *                  description: Teléfono del director
 */

/**
 * @swagger
 * /movies:
 *  get:
 *      summary: devuelve la lista de películas
 *      tags: [Movies]
 *      responses: 
 *          200:
 *              description: Lista de películas
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Movie'
 *  
 */

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
    apiSchemaValidation.validateBody(movieSchema.createMovieSchema),
    moviesController.create
);

router.put('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Actualiza una pelicula.'   
*/
    apiUtils.validateToken,
    apiSchemaValidation.validateBody(movieSchema.updateMovieSchema),
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