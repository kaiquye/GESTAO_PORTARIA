const Repositories = require('./visitante-repositories');
const AppError = require('../../models/AppError');
const io = require('../../models/WebSocket');

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
            return Visitante[0]
        } catch (error) {
            console.log(error)
            return new AppError(400, 'erro ao criar um novo visitante');
        }
    }

    async AlterStatus(phone, status) {
        try {
            /**
             * @STATUS 1 : AGUARDANDO 2: CARREGANDO 3: CARREGADO
            */
            let Check = await Repositories.FindByPhone(phone);
            if (!Check) return new AppError(400, 'Visitante não encontrado.');
            await Repositories.AlterStatus(phone, status);
            /**
             * @SOCKETio Toda vez que o status do veiculo for alterado emitir uma mensagem com socket.oi  
             * troca visitante de sala, enviar para de concluidos; salvar os dados no banco, e as atividades do dia
             * no socket.io
             */
        } catch (error) {
            console.log(error);
            return new AppError(400, 'erro ao criar um novo visitante');
        }
    }
}

module.exports = new ServicesVisitante();
