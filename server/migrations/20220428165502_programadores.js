/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('programadores', function (table) {
        table.increments('id').primary();
        table.string('name_group').notNullable() // EX : CCA-SINISTRO | EXPEDICAO PROGRAMAR CARGA
        table.string('name_setor').notNullable()
        table.string('emails').notNullable() // envio de e-mail quando um novo visitante é cadastrado. 
        table.integer('setor').notNullable() // qual o setor do programador
        table.integer('setor_area').notNullable() // qual area esse setor pertence 
        table.integer('servicos') // descobri 
        table.boolean('situacao').notNullable() // ativo ou inativo
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('programadores')
};
