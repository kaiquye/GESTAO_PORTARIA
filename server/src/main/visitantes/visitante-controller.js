const Services = require('./visitantes-services');
const AppError = require('../../models/AppError');
const WebSocket = require('../../models/WebSocket');

class ControllerVisitante {

    async Create(req, res) {
        try {
            // enviar e-mail
            /* 
            segurança
            */
            if (parseInt(req.role) !== 3 /* 3 = ADMIN -  */) return res.status(401).json(new AppError(401, 'Você não tem permissão para cadastrar um novo visitante. Entre em contato com um administrador.').Error());
            const Created = await Services.Create(req.body);
            if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
            // EMITIR UM EVENTO PARA A TELA DE OPERADORES QUANDO FOR CRIADO
            WebSocket.new(req.body); // adiciono o novo visitante a um array;
            req.io.emit('newVisitante', WebSocket.get());
            res.status(201).json({ message: 'visitante criado com sucesso.', sucess: true });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo visitante').Error());
        }
    }


    async FindBySituaion(req, res) {
        try {
            /* 
            segurança
            */
            const Query = req.query.condition || 'all';
            const Visitante = await Services.FindAll(Query);
            if (Visitante instanceof AppError) return res.status(Visitante.Status).json(Visitante.Error());
            if (!Visitante) return res.status(201).json({ data: 'No data !' });
            return res.status(201).json({ data: Visitante });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo visitante').Error());
        }
    }

    async FindByPhone(req, res) {
        try {
            /* 
            segurança
            */
            const Visitante = await Services.FindByPhone(req.params.phone);
            if (Visitante instanceof AppError) return res.status(Visitante.Status).json(Visitante.Error());
            if (!Visitante) return res.status(201).json({ data: 'No data !' });
            return res.status(201).json({ data: Visitante });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo visitante').Error());
        }
    }

    async AlterStatus(req, res) {
        try {
            /* 
            segurança
            */
            if (parseInt(req.role) !== 2 /* 3 = ADMIN -  */) return res.status(401).json(new AppError(401, 'Você não tem permissão para cadastrar um novo visitante. Entre em contato com um operador.').Error());
            const Visitante = await Services.AlterStatus(req.params.phone, req.params.status);
            if (Visitante instanceof AppError) return res.status(Visitante.Status).json(Visitante.Error());
            const visitantes = WebSocket.newVisitanteInt(req.params.phone);
            console.log('esses', visitantes);
            req.io.emit('update', visitantes);
            return res.status(200).json({ sucess: true, message: 'alterado com sucesso.' });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao alterar status do visitante').Error());
        }
    }
}

module.exports = new ControllerVisitante();
