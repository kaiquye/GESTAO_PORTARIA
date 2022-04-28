const Controller = require('./visitante-controller');
const { Router } = require('express')

class Routes {
    App;

    constructor() {
        this.App = Router();
        this.Route();
    }

    middleware() { }

    Route() {
        this.App.post('/create-visitante', Controller.Create); // novo visitante
        this.App.get('/find-visitante/:phone', Controller.FindByPhone); // buscar pelo telefone
        this.App.patch('/alter-status-visitante/:phone', Controller.AlterStatus);
    }
}

module.exports = new Routes().App;