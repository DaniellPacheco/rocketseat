// Configurando erro personalizado para isso usamos a lib express-async-errors
require("express-async-errors");

require("dotenv/config");

const uploadConfig = require("./configs/upload");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");
const cors = require("cors");

// não preciso deixar explicito index.js
const routes = require("./routes");

// Rodando as migrations
migrationsRun();

const app = express();

// liberando requisições para o frontend
app.use(cors());

// Habilitando recebimento de requisição via JSON
app.use(express.json());

// Habiltiando o express para servir arquivo statico (imagem)
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

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

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));