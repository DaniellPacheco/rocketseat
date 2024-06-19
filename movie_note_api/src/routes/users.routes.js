const { Router } = require("express");

const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userController = new UserController();

const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.get("/:id", userController.show);
userRouter.post("/", userController.create);
// porque o middleware retorna o id do usuário, não precisa passar como parametro da url
userRouter.put("/", ensureAuthenticated, userController.update);
userRouter.delete("/:id", userController.delete);




module.exports = userRouter;
