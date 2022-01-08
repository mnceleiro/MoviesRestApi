module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    product: {
        message: {
            MOVIE_CREATED: 'La película ha sido actualizada correctamente',
            MOVIE_FETCHED: 'Las películas se han obtenido con éxito',
            MOVIE_UPDATED: 'La película ha sido actualizada',
            MOVIE_DELETED: 'Película borrada',
            MOVIE_NOT_FOUND: 'Película no encontrada'
        }
    },
    user: {
        messages: {
            SIGNUP_SUCCESS: 'Usuario registrado con éxito',
            LOGIN_SUCCESS: 'Login correcto',
            DUPLICATE_EMAIL: 'Ya existe un usuario con el email proporcionado',
            USER_NOT_FOUND: 'Usuario no encontrado',
            INVALID_PASSWORD: 'Contraseña incorrecta',
            EMAIL_OR_PASSWORD_MISSING: 'Es necesario indicar un usuario y contrasenha'
        }
    },
    request: {
        validation: {
            message: {
                BAD_REQUEST: 'Campos incorrectos',
                TOKEN_MISSING: 'Es necesario porporcionar el token de autenticación'
            }
        }
    },
    database: {
        message: {
            INVALID_ID: 'Invalid Id'
        }
    }
}