const Controller = require('./visitante-controller');
const { Router } = require('express')
const Authorized = require('../../midlleware/Authentication');

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
        this.App.patch('/alter-status-visitante/:phone/:status', Controller.AlterStatus);
        this.App.get('/findall-visitantes', Controller.FindAll);
    }
}

module.exports = new Routes().App;