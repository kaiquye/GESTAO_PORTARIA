require("dotenv")
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // colocar em variaveis de ambiente
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'gestao_portaria',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
