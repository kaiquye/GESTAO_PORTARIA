const configKnex = require('../../knexfile');
const connection = require('knex')(configKnex);

module.export = {
    ConnectionServer: connection
}
