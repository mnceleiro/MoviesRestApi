const { response } = require('express');
const express = require('express');

const router = express.Router();

router.post('/signup', 
/*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Registra un usuario.'   
*/
    (req, res) => { console.log('Sign up user'); return res.status(200).send(""); }
);

router.post('/login',
/*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Obtiene la lista de peliculas.'   
*/
    (req, res) => console.log('Log in')
);

module.exports = router;