/**
 * Arquivo que juntará todas as rotas do sistema e facilitará o export para o server.js
 */

const { Router } = require("express");

// importar a rota
const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router()

// vincula a rota /users com minha rota user

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes