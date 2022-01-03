const express = require('express');


const router = express.Router();

router.get('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Obtiene la lista de peliculas.'   
*/
    (req, res) => { console.log('get all') }
);

router.get('/:id', 
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Obtiene una pelicula por su id.'   
*/
    (req, res) => console.log('get by id')
);

router.post('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Crear una nueva pelicula.'   
*/
    (req, res) => console.log('create new')
);

router .put('/',
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Actualiza una pelicula.'   
*/
    (req, res) => console.log('update existing one')
);

router .delete('/', 
/*
    #swagger.tags = ['Peliculas']
    #swagger.summary = 'Elimina una película.'   
*/
    (req, res) => console.log('delete existing one')
);

module.exports = router;