const Services = require('./visitantes-services');
const AppError = require('../../models/AppError');

class ControllerVisitante {

    async Create(req, res) {
        try {
            // enviar e-mail
            // verificar se esta cadastrado
            const Created = await Services.Create(req.body);
            if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
            res.status(201).json({ message: 'visitante criado com sucesso.', data: 'no data' });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo visitante').Error());
        }
    }

    async FindByPhone(req, res) {
        try {
            // enviar e-mail
            // verificar se esta cadastrado
            const Created = await Services.FindByPhone(req.params);
            if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
            res.status(201).json({ message: 'visitante criado com sucesso.', data: 'no data' });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo visitante').Error());
        }
    }
}

module.exports = new ControllerVisitante();
