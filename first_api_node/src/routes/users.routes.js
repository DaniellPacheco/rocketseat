const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload");

// chamo cotrollers para lidar com a requisição
const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware!");

  // console.log(request.body);

  // if(!request.body.isAdmin) {
  //   return response.status(401).json({message: "user unautherized"});
  // }

  // next = destino (passa para a próxima função da pilha que neste caso é o usersController.create)
  next();
}




// instancio o objeto
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

/**
 * Fazer isso, você irá aplicar para todas as rotas
 */
// usersRoutes.use(myMiddleware);

/**
 * Fazer isso, você irá aplicar apenas para uma rota
 */
// passo a função do objeto instanciada para a rota
usersRoutes.post("/", myMiddleware, usersController.create);
// usersRoutes.put("/:id",  usersController.update);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);


/**
 * Route Params
 */
// usersRoutes.get("/user/:id/:user", (request, response) => {

//   const { id, user } = request.params;

//   response.send(`
//       Usuário ID: ${id}.
//       Nome do usuário: ${user}.
//   `);
  
// });


/**
 * Query Params
 */
// usersRoutes.get("/users", (request, response) => {

//   const { page, limit } = request.query;

//   response.send(`Página: ${page}. Mostrar ${limit}`);

// });

/**
* A diferença entre o Route Params e o Query Params é que o Route Paramns é obrigatório.
*/

/**
 * Body Params
 */
// usersRoutes.post("/users", (request, response) => {

//   const { name, email, password } = request.body;

//   // response.json(`Usuário: ${name} - Email ${email} - Senha: ${password}`);
//   response.json({name, email, password});

// });

module.exports = usersRoutes