const Repositories = require('./operador-repositories');
const AppError = require('../../models/AppError');
const Bycrpy = require('bcrypt');

class ServicesOperador {

    async Create({ username, phone, register, email, role, setor, password }) {
        try {
            /**
             * @ROLE Niveis de acesso : 0 basico, 1 medio, 2 inteiro;
             */
            const Check = await Repositories.FindByRegister(register);
            const salt = Bycrpy.genSaltSync(10);
            const hash = Bycrpy.hashSync(password, salt)
            if (Check[0]) return new AppError(400, 'Operador ja cadastado.');
            await Repositories.Create(username, phone, register, email, role, setor, hash);
        } catch (error) {
            console.log('------------------', error)
            return new AppError(400, 'Error ao criar um novo operador.');
        }
    }

    async Login({ email, password }) {
        try {
            const { passwordOperador, id, username } = await Repositories.LoginOperador(email);
            if (!passwordOperador) return new AppError(400, 'Email não encontrado.');
            console.log('tested', passwordOperador);
            const match = await Bycrpy.compare(password, passwordOperador);
            if (!match) return new AppError(300, 'Senha invalida.');
            /**
             * @TOKEN salvar o Refresh-token no banco ou no Regis 
             */
            return { id, username, role: 2 /* admin */ } // valido.
        } catch (error) {
            console.log(error)
            return new AppError(500, 'Error ao tentar fazer login como operador.');
        }
    }
}

module.exports = new ServicesOperador();
