const { hash, compare } = require("bcryptjs");
const AppError = require('../utils/AppError');
const sqliteConnection = require("../database/sqlite");
const { use } = require("../routes/users.routes");

class UsersController {

    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */



    async create(request, response) {
        
        const { name, email, password } = request.body
        
        if(!name) {
            throw new AppError("Nome é obrigatório!");
        }

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashedPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
        
        response.status(201).json({ message: "Usuário criado com sucesso.", name, email });
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        // const { id } = request.params;
        // const user_id = require.user.id;
        const user_id = request.user.id;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

        if(!user) {
            throw new AppError("Usuário não encontrado.");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
            throw new AppError("Este e-mail já está em uso.");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha.");
        }

        if(password && old_password) {
            // comparar a senha antiga digitada na requisição com a senha salvo no banco de dados
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere.");
            }

            user.password = await hash(password, 8);
        }

        await database.run(`
            UPDATE users SET
                name = ?,
                email = ?,
                password = ?,
                updated_at = DATETIME('now')
            WHERE id = ?`,
            [user.name, user.email, user.password, user_id]
        );

        return response.status(200).json({ message: "Usuário atualizado com sucesso." });
    }


}

module.exports = UsersController;