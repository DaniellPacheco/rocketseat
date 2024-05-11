const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesController");
const movieNotesController = new MovieNotesController();

const movieNotesRouter = Router();

movieNotesRouter.get("/", movieNotesController.index);
movieNotesRouter.get("/:id", movieNotesController.show);
movieNotesRouter.post("/", movieNotesController.create);
movieNotesRouter.put("/:id", movieNotesController.update);
movieNotesRouter.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRouter;