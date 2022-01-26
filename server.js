const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require('./swagger_output.json');
const databaseConnection = require('./database/connection');

// Configuracion
dotEnv.config();
const app = express();
app.use(cors());

// Necesario para que funcionen las peticiones con un body y los parametros de las url correctamente
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexion con la BBDD
databaseConnection();

// Rutas
app.use('/api/v1/movies', require('./routes/movie.js'));
app.use('/api/v1/users', require('./routes/user.js'));

// TODO: refactorizar
// Documentacion del API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "API de gestión de películas",
        description: "API REST de gestión de películas."
    },
    servers: [{
        url: "http://localhost:3002/api/v1"
    }, {
      url: "https://damapi.herokuapp.com/api/v1/"
    }],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: ["./routes/*.js"],
}

const specs = swaggerJsDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
//app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Rutas no contempladas (404)
// TODO: pasar mensaje a fichero de constantes
app.all('*', (req, res, next) => {
    res.status(404).send({
      status: '404',
      message: `No se ha encontrado la URL ${req.originalUrl} en este servidor.`,
      body: {}
    });
  });

// Middleware que maneja errores de servidor
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.statusCode || 500).send({
        status: err.statusCode,
        message: err.message,
        body: {}
    });
});

// Arranco el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});