const AppError = require('../../models/AppError');
const Services = require('./operador-services');
/** 
    O operador é responsavel por aceita a carga a garca.Ele tem um painel aonde pode "puxar" o proximo 
    caminhão para ser carregado.
    @Create criar um novo operador (Cada setor tem um administrador/operador);
    @Status alterar o status do operador (Setor administrador/operador);
    @SocketIO EMIT AS MENSAGENS APENAS PARA EQUIPE DE OPERADORES
*/

class ControllerOperador {

    async Create(req, res) {
        try {
            if (req.role !== 3 /* 3 = ADMIN */ ) return res.status(401).json(new AppError(401, 'Você não tem permissão para criar um novo operador. Entre em contato com um adminitrador.').Error());
            const { username, email, setor, phone, role } = req.body;
            const Created = await Services.Create(username, email, setor, phone, role)
            if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
            return res.status(201).json({ sucess: true, message: 'Novo operador criado com sucesso.' });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo operador').Error());
        }
    }

    async Login(req, res) {
        /**
         * @YUP 
         * @AUTH QUANDO FOR VERIFICAR O CARGO DO USUARIO : JWT, BUSCAR UM USUARIO NO BANCO,
         * CASO EXITE LIBERAR.
         */
        const Authorized = await Services.Login(req.body);
        if (Authorized instanceof AppError) return res.status(Authorized.Status).json(Authorized.Error());
        const Token = Authentication.AuthorizedCreateToken(Authorized);
        return res.status(200).json({ sucess: true, data: Authorized, token: Token });
    }
}

module.exports = new ControllerOperador();
