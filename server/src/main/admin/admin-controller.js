const AppError = require('../../models/AppError');
const Services = require('./services-admin');
const Authentication = require('../../../src/midlleware/Authentication');

class Admin {

    async Create(req, res) {
        try {
            /**
             * @YUP 
             * @AUTH QUANDO FOR VERIFICAR O CARGO DO USUARIO : JWT, BUSCAR UM USUARIO NO BANCO,
             * CASO EXITE LIBERAR.
             * @STATUS 206 
             */
            if (parseInt(req.role) !== 3 /* 3 = ADMIN */ ) return res.status(401).json(new AppError(401, 'Você não tem permissão. Entre em contato com um Administrador.').Error());
            const Created = await Services.Create(req.body);
            if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
            return res.status(201).json({ sucess: true, message: 'Admin cadastrado com sucesso.' })
        } catch (error) {
            console.log(error)
            return res.status(500).json(new AppError(500, 'Erro : Não foi possivel criar um novo admin.'))
        }
    }

    async Login(req, res) {
        /**
         * @YUP 
         * @AUTH QUANDO FOR VERIFICAR O CARGO DO USUARIO : JWT, BUSCAR UM USUARIO NO BANCO,
         * CASO EXITE LIBERAR.
         */
        const Created = await Services.Login(req.body);
        if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
        const Token = Authentication.AuthorizedCreateToken(Created);
        return res.status(200).json({ sucess: true, data: Created, token: Token });
    }
}

module.exports = new Admin();
