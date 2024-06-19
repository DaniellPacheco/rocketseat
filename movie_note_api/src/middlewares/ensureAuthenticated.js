const jwt  = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("JWT Token não informado.", 401);
    }

    const [, token] = authHeader.split(" "); // Formato token -> "Bare xxxx"

    try {
        const { sub: user_id } = jwt.verify(token, authConfig.jwt.secret);
        
        console.log('sub');

        request.user = {
            id: Number(user_id),
        };

        return next();
    } catch {
        throw new AppError("JWT Token inválido.", 401);
    }
}

module.exports = ensureAuthenticated;