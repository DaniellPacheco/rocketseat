const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieTagsController {

    async create(request, response) {

        const { name, note, user } = request.body;

        if (!name) {
            throw new AppError("Title is required");
        }

        if (!note) {
            throw new AppError("Description is required");
        }

        if (!user) {
            throw new AppError("Rating is required");
        }

        const [movieTag] = await knex("movie_tags").where({ name, note });

        if (movieTag) {
            throw new AppError("Tag already exists for this movie");
        }

        await knex("movie_tags").insert({
            name,
            note,
            user
        });   

        response.status(201).json({
            message: "Tag successfully created",
            note: {
                ...request.body
            }
            });

    }

    async index(request, response) {
        const movieTags = await knex("movie_tags").select();

        response.json(movieTags);
    }

    async show(request, response) {
        const { id } = request.params;

        const [movieTag] = await knex("movie_tags").where({id});

        if (!movieTag) {
            throw new AppError("Tag not found");
        }

        response.json(movieTag);
    }

    async update(request, response) {
        const { name } = request.body;
        const { id } = request.params;

        const [movieTag] = await knex("movie_tags").where({ id });
        
        if(!movieTag) {
            throw new AppError("Tag not found");
        }
        
        movieTag.name = name ?? movieTag.name;

        await knex("movie_tags").update(movieTag);
        
        response.json({
            message: "Tag has been updated",
            tag: {
                ...movieTag
            }
        })
        
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_tags").where({ id }).delete();

        response.json({
            message: "Tag has been deleted"
        })
    }

}

module.exports = MovieTagsController;