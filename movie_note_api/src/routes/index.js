const { Router } = require("express");

const userRouter = require("./users.routes");

const routes = Router();

routes.use("/users", userRouter);

routes.get("/", (req, res) => res.json({message: "alo"}));

module.exports = routes;