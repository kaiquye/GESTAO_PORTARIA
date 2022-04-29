const { Router } = require('express');
const Authorized = require('../../midlleware/Authentication');
const Controller = require('./operador-controller');

class Routes {
    App;
    constructor() {
        this.App = Router();
        this.routesPublic();
        this.middleware();
        this.routes();
    }
    middleware() { 
        this.App.use(Authorized.Verify)
    }
    routes() {
        this.App.post('/create-operador', Controller.Create)
    }
    routesPublic() {
        this.App.post('/create-operador', Controller.Create)
    }
}

module.exports = new Routes().App;
