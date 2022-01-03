const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointFiles).then(() => {
    require('./server.js')
});