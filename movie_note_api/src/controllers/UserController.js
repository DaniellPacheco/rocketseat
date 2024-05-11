const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UserController {
    
    async create(request, response) {

        const { name, email, password, avatar } = request.body;

        // validar dados vazio
        if (!name) {
            throw new AppError("Name is required");
        }

        if (!email) {
            throw new AppError("Email is required");
        }

        if (!password) {
            throw new AppError("Password is required");
        }

        
        // validar se esse usuário já existe no banco
        const userExists = await knex("users").where({ email });

        if(userExists.length > 0) {
            throw new AppError("User already exists");
        }
        

        // criptografar a senha
        const hashedPassword = await hash(password, 8);

        // criar usuário
        const user = await knex("users").insert({
            name,
            email,
            password: hashedPassword,
            avatar
        });

        // retornar que usário foi criado
        return response.status(201).json({message: "User has been created"})
        
    }

    async index(request, response) {

        const users = await knex("users").select(
            "id",
            "name",
            "email",
            "avatar",
            "created_ad",
            "updated_at"
        );
        
        return response.json(users);

    }

    async show(request, response) {

        const { id } = request.params;

        const user = await knex("users").select(
            "id",
            "name",
            "email",
            "avatar",
            "created_ad",
            "updated_at"
        ).where({ id });

        if (user.length <= 0) {
            throw new AppError("User not found");
        }

        response.json(user);

    }

    async update(request, response) {

        // pegar dados
        const { name, email, password, old_password, avatar } = request.body;
        const { id } = request.params;

        // verificar se o usuário existe

        const [user] = await knex("users").where({ id });

        if(!user) {
            throw new AppError("User not exists");
        }

        // verificar se o email a ser trocado tem parecido no banco
        const [userWithUpdatedEmail] = await knex("users").where({ email });

        if(userWithUpdatedEmail) {
            throw new AppError("This email is alraedy been used");
        }

        // verificar se a senha antiga é a mesma do banco
        if(password && !old_password) {
            throw new AppError("You must enter your old password before you can pass a new password")
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError("The old password is wrong")
            }

            user.password = await hash(password, 8);
        }

        // mudar dados do name e avatar
        user.name = name ?? user.name;
        user.email = email ?? user.email;
        user.avatar = avatar ?? user.avatar;

        // atualizar o usuario
        await knex("users").where({ id }).update(user);

        // mensagem avisando que usuario foi atualizado
        response.json({message: "User is updated"});

    }

    async delete(request, response) {

        const { id } = request.params;

        await knex("users").where({ id }).delete();

        response.json({ message: "User deleted"});

    }

}


module.exports = UserController;