const Connection = require('../../config/database');

class Repositories {

    async Create(username, phone, register, email, role, setor) {
        return Connection('operador').insert({ username, phone, register, email, role, setor });
    }

    async FindByRegister(register) {
        return Connection('operador').where('register', register);
    }

    async VerifyOperador(email) {
        // verificar se esse email exite no banco de dados - busca o pasword - services verifica se as senhas batem;
        let data = await Connection('operador').select('password', 'id', 'username').where('email', email).first();
        if (data) return { passwordOperador: data.password, id: data.id, username: data.username }
        return { passwordUser: null, id: null, username: null }
    }
}

module.exports = new Repositories();
