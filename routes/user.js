const express = require('express');
const userController = require('../controllers/user');
const userSchema = require('../schemas/user');
const apiSchemaValidation = require('../utils/apiSchemaValidationUtils');

const router = express.Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *      BearerAuth:
 *          type: http
 *          scheme: Bearer
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              id:
 *                  type: string
 *                  description: La id autogenerada para el usuario
 *              email:
 *                  type: string
 *                  description: Correo electrónico del usuario
 *              password:
 *                  type: string
 *                  description: Contraseña asociada al usuario
 *              firstname:
 *                  type: string
 *                  description: Nombre del usuario
 *              lastName:
 *                  type: string
 *                  description: Apellidos del usuario
 */

/**
 * @swagger
 * /user/signup:
 *  post:
 *      summary: registra a un usuario
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses: 
 *          200:
 *              description: El usuario ha sido creado con éxito
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/User'
 *          400:
 *              description: Ha ocurrido un error.
 *  
 */


router.post('/signup', 
/*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Registra un usuario.'   
*/

    apiSchemaValidation.validateBody(userSchema.signup),
    userController.signup
);

router.post('/login',
/*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Obtiene la lista de peliculas.'   
*/
    apiSchemaValidation.validateBody(userSchema.login),
    userController.login
);

module.exports = router;