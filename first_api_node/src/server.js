// Configurando erro personalizado para isso usamos a lib express-async-errors
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express");

// não preciso deixar explicito index.js
const routes = require("./routes");

// Rodando as migrations
migrationsRun();

const app = express();

// Habilitando recebimento de requisição via JSON
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello World");
});

// Usando as rotas importadas
app.use(routes);



app.use((error, request, response, next) => {

    // caso o tipo do erro for gerador por nós através da classe AppError
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    // debugar o erro;
    console.error(error);

    // Se não for um erro gerador por nós, voltará esse erro genérico
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));