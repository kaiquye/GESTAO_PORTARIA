const Services = require('./visitantes-services');
const AppError = require('../../models/AppError');

class ControllerVisitante {

    async Create(req, res) {
        try {
            // enviar e-mail
            /* 
            segurança
            */
            const Created = await Services.Create(req.body);
            if (Created instanceof AppError) return res.status(Created.Status).json(Created.Error());
            res.status(201).json({ message: 'visitante criado com sucesso.', sucesso: true });
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
            console.log(req.params)
            const Visitante = await Services.FindByPhone(req.params.phone);
            if (Visitante instanceof AppError) return res.status(Visitante.Status).json(Visitante.Error());
            if (!Visitante) return res.status(201).json({ data: 'No data !' });
            return res.status(201).json({ data: Visitante });
        } catch (error) {
            console.log(error)
            res.status(500).json(new AppError(500, 'Erro ao criar um novo visitante').Error());
        }
    }
}

module.exports = new ControllerVisitante();
