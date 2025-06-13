/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("NEWID()"));
    table.string("name").notNullable();
    table.string("description");
    table.double("price", 10, 2).notNullable();
    table.string("category").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
