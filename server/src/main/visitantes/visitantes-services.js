const Repositories = require('./visitante-repositories');
const AppError = require('../../models/AppError');

class ServicesVisitante {

    async Create({ username, sector /*setor responsavel*/, phone, status_truck, plate_vehicle, plate_truck, active, services, auth }) {
        try {
            /**
             * @IDEA Verificar se ja exite um visitante ativo. Alterar status
            */
            let checkVisitantates = await Repositories.FindByPhone(phone);
            if (checkVisitantates) return new AppError(400, 'Já existe um visitante cadastrado, verifique seu painel de visitantes.');
            await Repositories.Create(username, sector /*setor responsavel*/, phone, status_truck, plate_vehicle, plate_truck, active, services, auth);
        } catch (error) {
            console.log(error)
            return new AppError(400, 'erro ao criar um novo visitante');
        }
    }

    /*
    BUSCAR VISITANTES PELO CPF ? TELEFONE ? PLACA ;
    */

    async FindByPhone(phone) {
        try {
            /**
             * @IDEA 
            */
            let Visitante = await Repositories.FindByPhone(phone);
            if (!Visitante) return new AppError(400, 'Visitante não encontrado.');
            console.log(Visitante)
            return Visitante
        } catch (error) {
            console.log(error)
            return new AppError(400, 'erro ao criar um novo visitante');
        }
    }
}

module.exports = new ServicesVisitante();
