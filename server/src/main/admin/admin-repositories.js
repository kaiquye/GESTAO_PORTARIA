/**
 * @Create : Novo usuario da aplicação. Pode ser comum ou Admin
 */

const Connection = require('../../../src/config/database');

class Admin {

    // novo admin/usuario
    async Create(username, password, phone, email, role, active) {
        return Connection('Admin').insert({ username, password, phone, email, role, active });
    }
    // atualizar dados
    async Update(username, phone, email, role, active) {
        return Connection('Admin').update({ username, phone, email, role, active }).where('email', email);
    }
    // atualizar permissão
    async UpdateRole(role, email) {
        return Connection('Admin').insert({ role }).where('email', email)
    }

}
module.exports = new Admin();