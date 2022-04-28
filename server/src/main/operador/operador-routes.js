const { Router } = require('express');
const Controller = require('./operador-controller');

class Routes {
    App;
    constructor() {
        this.App = Router();
        this.routes();
    }
    middleware() { }
    routes() {
        this.App.post('/create-operador', Controller.Create)
    }
}

module.exports = new Routes().App;
