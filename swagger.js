const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFiles = ['./server.js'];

const doc = {
    info: {
        version: "1.0.0",
        title: "API Rest de gestión de películas",
        description: "La documentación ha sido parcialmente autogenerada por el módulo: <b>swagger-autogen</b>."
    },
    host: "localhost:3002",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        }
    },
    definitions: {
        User: {
            $email: "mi.email@gmail.com",
            $password: "1234",
            firstName: "Marcos",
            lastName: "Nunez"
        },
        Movie: {
            $title: "Edge of Tomorrow",
            $runtimeMinutes: 128,
            $rating: 9
        }
    }
}

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require('./server.js')
});