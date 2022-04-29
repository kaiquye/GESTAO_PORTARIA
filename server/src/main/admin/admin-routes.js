const { Router } = require('express');
const Controller = require('./admin-controller');
const Authorized = require('../../midlleware/Authentication')

class Routes {

    App;

    constructor() {
        this.App = Router();
        this.RoutesPublic();
        this.Middleware();
        this.Route();
    }
    Middleware() {
        this.App.use(Authorized.Verify);
    }
    RoutesPublic() {
        this.App.post('/login-admin', Controller.Login);
    }
    Route() {
        this.App.post('/create-admin', Controller.Create);
    }
}

module.exports = new Routes().App;
