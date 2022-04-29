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
    Verify(req, res, NEXT) {
        /**
         * @Token verificar se o token do admin e valido
         * @LINE VERIFICAR QUAL O NIVEL DE ACESSO E ENVIAR PELO REQUEST
         * **/
        console.log(req.headers['authorization'])
        let Token = req.headers['authorization'];
        if (!Token) return res.status(401).json(new AppError(401, 'Token não informado').Error())
        try {
            let { Authorized } = JWT.verify(Token, process.env.SECRET);
            req.role = Authorized.role
        } catch (error) {
            console.log(error)
            return res.status(401).json(new AppError(401, 'Não tem acesso').Error())
        }
        NEXT();
    }
}

module.exports = new Authentication();
