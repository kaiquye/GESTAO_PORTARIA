const Repositories = require('./operador-repositories');
const AppError = require('../../models/AppError');

class ServicesOperador {

    async Create({ username, phone, register, email, role, setor }) {
        try {
            const Check = await Repositories.FindByRegister(register);
            if (Check[0]) return AppError(400, 'Operador ja cadastado.');
            await Repositories.Create(username, phone, register, email, role, setor);
        } catch (error) {
            console.log(error)
            return new AppError(400, 'Error ao criar um novo operador.');
        }
    }
}

module.exports = new ServicesOperador();
