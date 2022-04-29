const JWT = require('jsonwebtoken');
const AppError = require('../models/AppError');

class Authentication {

    AuthorizedCreateToken(Authorized) {
        /**
         * @Login ADMIN, OPERADOR
         * **/
        const Token = JWT.sign({ Authorized }, process.env.SECRET, { expiresIn: '8600s' })
        return { Token };
    }
    VerifyAdmin(req, res, NEXT) {
        /**
         * @Token verificar se o token do admin e valido
         * @LINE VERIFICAR QUAL O NIVEL DE ACESSO E ENVIAR PELO REQUEST
         * **/
        console.log(req.headers['authorization'])
        let Token = req.headers['authorization'];
        if (!Token) return res.status(400).json(new AppError(400, 'Token não informado'))
        try {
            let { Authorized } = JWT.verify(Token, process.env.SECRET);
            req.role = Authorized.role
        } catch (error) {
            console.log(error)
            return res.status(400).json(new AppError(400, 'Não tem acesso'))
        }
        NEXT();
    }
}

module.exports = new Authentication();
