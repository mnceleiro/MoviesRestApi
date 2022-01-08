const { response } = require('express');
const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/signup', 
/*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Registra un usuario.'   
*/
    userController.signup
);

router.post('/login',
/*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Obtiene la lista de peliculas.'   
*/
    userController.login
);

module.exports = router;