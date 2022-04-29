const Controller = require('./visitante-controller');
const { Router } = require('express')
const Authorized = require('../../midlleware/Authentication');


/**
 * @rs A MAIOR PARTE DO PROJETO É RESPONSÁVEL POR GERENCIA ESSA CAMADA( @VISITANTES )
 * - UM VISITANTE É CADASTRADO; 
 *  -OS OPERADORES RECEBEM UMA NOTIFICAÇÃO SOBRE O NOVO VISITTANTE;
 * @Operadores : OS OPERADORES CONSEGUEM ALTERAR O STATUS DESSE VISITANTE, DIZENDO SE ELE JÁ ESTA CARREGADO,
 * FINALIZADO OU ME ESPERA. TODO NOVO VISITANTE COMEÇA COM STATUS @AGUARDANDO = 0
 */

class Routes {
    App;

    constructor() {
        this.App = Router();
        this.middleware()
        this.Route();
    }

    middleware() {
        this.App.use(Authorized.Verify);
    }

    Route() {
        this.App.post('/create-visitante', Controller.Create); // novo visitante
        this.App.get('/find-visitante/:phone', Controller.FindByPhone); // buscar pelo telefone
        this.App.patch('/alter-status-visitante/:phone/:status', Controller.AlterStatus); // alterar o status do visitante {  0 : aguardando, 1 : carregando, 2: finalizado  }
        this.App.get('/findall-visitantes', Controller.FindBySituaion); // buscar pela situção do visitante
    }
}

module.exports = new Routes().App;