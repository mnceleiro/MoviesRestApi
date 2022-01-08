module.exports = class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

      // Separamos cualquier error que especificamos nosotros (operacionales) de errores del desarrollador (TODO: ¿seria mejor heredar con dos clases diferentes?)
      this.isOperational = true;
      
      // Evita que la consola muestre la traza
      Error.captureStackTrace(this, this.constructor);
    }
  }