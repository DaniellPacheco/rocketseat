const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UserController = require("../controllers/UserController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userController = new UserController();

const userRouter = Router();
const upload = multer(uploadConfig.MULTER);

const userAvatarController = new UserAvatarController();

userRouter.get("/", userController.index);
userRouter.get("/:id", userController.show);
userRouter.post("/", userController.create);
// porque o middleware retorna o id do usuário, não precisa passar como parametro da url
userRouter.put("/", ensureAuthenticated, userController.update);
userRouter.delete("/:id", userController.delete);
userRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);




module.exports = userRouter;
