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
            if (checkVisitantates[0]) return new AppError(400, 'Já existe um visitante cadastrado, verifique seu painel de visitantes.');
            await Repositories.Create(username, sector /*setor responsavel*/, phone, status_truck, plate_vehicle, plate_truck, active, services, auth);
        } catch (error) {
            console.log(error)
            return new AppError(400, 'erro ao criar um novo visitante');
        }
    }


    async FindBySituaion(condition) {
        try {
            /**
             * @IDEA 
            */

            // VERIFICAR SE O VALOR PASSADO É ACEITO
            let filter = ['all', "Waiting", "Loaded", "Finalized"]
            const valid = filter.find(conditions => conditions === condition);
            if(!validParam) return new AppError(404, 'Parametro não encontrado')
            let Visitante = await Repositories.FindAllBy(condition);
            
        } catch (error) {
            console.log(error)
            return new AppError(400, 'Erro ao busca visitantes.');
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
            // PASSA O EMAIL OU NOME DO OPERADOR QUE ACEITO A CARGA
            let Check = await Repositories.FindByPhone(phone);
            if (!Check[0]) return new AppError(400, 'Visitante não encontrado.');
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
