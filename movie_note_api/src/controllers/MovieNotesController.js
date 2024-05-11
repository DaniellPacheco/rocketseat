const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController {

    async create(request, response) {
        
        const { title, description, rating } = request.body;

        if (!title) {
            throw new AppError("Title is required");
        }

        if (!description) {
            throw new AppError("Description is required");
        }

        if (!rating) {
            throw new AppError("Rating is required");
        }

        const [movieNote] = await knex("movie_notes").where({ title });

        if (movieNote) {
            throw new AppError("Note already exists");
        }

        await knex("movie_notes").insert({
            title,
            description,
            rating
        });

        response.status(201).json({
            message: "Successfully created",
            note: {
                ...request.body
            }
            });

    }

    async index(request, response) {
        const movieNotes = await knex("movie_notes").select();

        response.json(movieNotes);
    }

    async show(request, response) {
        const { id } = request.params;

        const movieNote = await knex("movie_notes").where({ id });

        response.json(movieNote);
    }

    async update(request, response) {

        const { title, description, rating } = request.body;
        const { id } = request.params;

        const [movieNote] = await knex("movie_notes").where({ id });

        if(!movieNote) {
            throw new AppError("Movie Note not found")
        }

        movieNote.title = title ?? movieNote.title;
        movieNote.description = description ?? movieNote.description;
        movieNote.rating = rating ?? movieNote.rating;

        await knex("movie_notes").update(movieNote);

        response.json({
            message: "Movie Note has been updated",
            note: {
                ...movieNote
            }
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_notes").where({ id }).delete();

        return response.json({message: "Movie Note has been deleted"});
    }

}

module.exports = MovieNotesController;