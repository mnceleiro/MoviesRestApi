const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

// Configuracion
dotEnv.config();
const app = express();
app.use(cors());

// Rutas
app.use('/api/v1/movie', require('./routes/movie.js'));
app.use('/api/v1/user', require('./routes/user.js'));

// Documentacion del API
if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Arranco el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});