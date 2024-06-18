const { Router } = require("express");

const userRouter = require("./users.routes");
const movieNotesRouter = require("./movieNotes.routes");
const movieTagsRouter = require("./movieTags.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRoutes);
routes.use("/notes", movieNotesRouter);
routes.use("/tags", movieTagsRouter);


module.exports = routes;