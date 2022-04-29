const AppError = require('../../models/AppError');
const Repositories = require('./admin-repositories');
const Bycrpy = require('bcrypt')

class Services {

    async Create({ username, password, phone, email, role, active }) {
        try {
            const salt = Bycrpy.genSaltSync(10);
            const hash = Bycrpy.hashSync(password, salt)
            const checkAdmin = await Repositories.FindByEmail(email);
            console.log(checkAdmin)
            if (checkAdmin) return new AppError(400, 'E-mail ja cadastrado.');
            await Repositories.Create(username, hash, phone, email, role, active);
        } catch (error) {
            console.log(error)
            return new AppError(500, 'Não foi possivel cadastra um novo admin');
        }
    }

    async Login({ email, password }) {
        try {
            const { passwordUser, id, username } = await Repositories.VerifyUser(email);
            console.log(passwordUser);
            if (!passwordUser) return new AppError(400, 'Email não encontrado.');
            const match = await Bycrpy.compare(password, passwordUser);
            if (!match) return new AppError(300, 'Senha invalida.');
            /**
             * @TOKEN salvar o Refresh-token no banco ou no Regis 
             */
            return { id, username, role : '3' /* admin */ } // valido.
        } catch (error) {
            console.log(error)
            return new AppError(500, 'Não foi possivel cadastra um novo admin');
        }
    }

}

module.exports = new Services();
