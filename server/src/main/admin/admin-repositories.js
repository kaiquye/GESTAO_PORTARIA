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
    // verificar se exite um usuario com esse e-mail
    async FindByEmail(email){
        return Connection('Admin').where('email', email).first();
    }

    async VerifyUser(email){
        // verificar se esse email exite no banco de dados - busca o pasword - services verifica se as senhas batem;
        let data = await Connection('Admin').select('password', 'id', 'username').where('email', email).first();
        if(data) return {passwordUser : data.password, id: data.id, username: data.username}
        return {passwordUser : null, id: null, username: null}
    }
}
module.exports = new Admin();