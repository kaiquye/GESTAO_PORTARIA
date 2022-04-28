const Connection = require('../../config/database');

class Repositories {

    async Create(username, phone, register, email, role, setor) {
        return Connection('operador').insert({ username, phone, register, email, role, setor });
    }

    async FindByRegister(register) {
        return Connection('operador').where('register', register);
    }
}

module.exports = new Repositories();
