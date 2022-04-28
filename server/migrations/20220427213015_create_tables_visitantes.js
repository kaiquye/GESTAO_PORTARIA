/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {

    /**
     * @Tabela Dados os 
     */


    return knex.schema.createTable('visitantes', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable()
        table.string('setor').notNullable().unique()
        table.string('phone').unique
        table.integer('status_truck').notNullable()
        table.integer('plate_vehicle').notNullable()
        table.boolean('plate_truck').notNullable()
        table.string('s_servico').notNullable()
        table.integer('auth').notNullable().defaultTo('1')
        table.string('services')
        table.boolean('active').notNullable().defaultTo('1');
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
