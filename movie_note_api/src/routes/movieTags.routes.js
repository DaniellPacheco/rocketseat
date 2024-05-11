const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController");
const movieTagsController = new MovieTagsController();

const movieTagsRouter = Router();

movieTagsRouter.get("/", movieTagsController.index);
movieTagsRouter.get("/:id", movieTagsController.show);
movieTagsRouter.post("/", movieTagsController.create);
movieTagsRouter.put("/:id", movieTagsController.update);
movieTagsRouter.delete("/:id", movieTagsController.delete);

module.exports = movieTagsRouter;