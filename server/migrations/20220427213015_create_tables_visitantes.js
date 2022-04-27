/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('visitantes', function (table) {
        table.increments('id')
        table.string('username').notNullable()
        table.string('setor').notNullable().unique()
        table.string('phone').unique
        table.integer('status_truck').notNullable()
        table.integer('plate_vehicle').notNullable()
        table.boolean('plate_truck').notNullable()
        table.string('s_servico').notNullable()
        table.integer('auth').notNullable().defaultTo('1')
        table.string('setor_area')
        table.string('services')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('visitantes')
};
