const Repositories = require('./operador-repositories');
const AppError = require('../../models/AppError');

class ServicesOperador {

    async Create({ username, phone, register, email, role, setor }) {
        try {
            /**
             * @ROLE Niveis de acesso : 0 basico, 1 medio, 2 inteiro;
             */
            const Check = await Repositories.FindByRegister(register);
            if (Check[0]) return AppError(400, 'Operador ja cadastado.');
            await Repositories.Create(username, phone, register, email, role, setor);
        } catch (error) {
            console.log(error)
            return new AppError(400, 'Error ao criar um novo operador.');
        }
    }

    async Login({ email, password }) {
        try {
            const { passwordOperador, id, username } = await Repositories.VerifyOperador(email);
            console.log(passwordUser);
            if (!passwordUser) return new AppError(400, 'Email não encontrado.');
            const match = await Bycrpy.compare(password, passwordOperador);
            if (!match) return new AppError(300, 'Senha invalida.');
            /**
             * @TOKEN salvar o Refresh-token no banco ou no Regis 
             */
            return { id, username, role : 2 /* admin */ } // valido.
        } catch (error) {
            console.log(error)
            return new AppError(500, 'Não foi possivel cadastra um novo admin');
        }
    }
}

module.exports = new ServicesOperador();
