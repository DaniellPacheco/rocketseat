/**
 * Padronizar as mensagens de erro quando tiver uma excessão
 */

class AppError {

    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }

}

module.exports = AppError;