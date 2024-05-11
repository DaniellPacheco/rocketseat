/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("movie_tags", (table) => {
    table.increments("id");
    table.string("name").notNullable();

    table.integer("note").references("id").inTable("movie_notes").onDelete("CASCADE");
    table.integer("user").references("id").inTable("users");

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("movie_tags");
};
