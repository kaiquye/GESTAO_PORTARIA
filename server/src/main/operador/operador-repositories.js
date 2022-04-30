const Connection = require('../../config/database');

class Repositories {

    async Create(username, phone, register, email, role, setor, password) {
        return Connection('operador').insert({ username, phone, register, email, role, setor, password });
    }

    async FindByRegister(register) {
        return Connection('operador').where('register', register);
    }

    async LoginOperador(email) {
        // verificar se esse email exite no banco de dados - busca o pasword - services verifica se as senhas batem;
        let data = await Connection('operador').select('password', 'id', 'username').where('email', email).first();
        if (data) return { passwordOperador: data.password, id: data.id, username: data.username }
        return { passwordUser: null, id: null, username: null }
    }
}

module.exports = new Repositories();
