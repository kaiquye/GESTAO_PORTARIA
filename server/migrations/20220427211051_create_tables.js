/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('admin', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable()
        table.string('password').notNullable().unique()
        table.string('phone').unique
        table.string('email').unique().notNullable()
        table.integer('role', 3).notNullable()
        table.boolean('active').notNullable().defaultTo('1')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('admin')
};
