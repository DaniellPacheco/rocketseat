exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("email").notNullable();
  table.text("password").notNullable();

  // nome coluna, valores requisitados, useNative - usa de acordo com o drive do banco de dados, nome enum
  table.enum("role", ["admin", "customer", "sale"], { useNative: true, enumName: "roles" }).notNullable().default("customer");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users");