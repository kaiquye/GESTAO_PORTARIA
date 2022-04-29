require('dotenv').config();
const express = require('express');
const expressjwt = require('express-jwt')
// server para o websocket
const server = require('http').createServer(express());
const io = require('./src/models/WebSocket');
const Cors = require('./src/midlleware/cors');
const Visitantes = require('./src/main/visitantes/visitantes-routes');
const Operadores = require('./src/main/operador/operador-routes');
const Admin = require('./src/main/admin/admin-routes');

class Server {
    App;
    constructor() {
        this.App = express();
        this.middlleware();
        this.routes();
    }
    middlleware() {
        this.App.use(Cors.Config());
        this.App.use(express.json());
    }
    routes() {
        this.App.use('/api', [
            Visitantes,  // aguardam serem chamados.
            Operadores, // responsavel por aceita e finalizar as operações dos vistantes.
            // Admin      // responsavel por cadastrar os visitantes e controllar os acessos dos usuarios.
        ])
    }
    StartServer() {
        this.App.listen(process.env.PORT, () => console.log(`start server in ${process.env.URL}`))
    }
}
(() => {
    // configura o ambiente P/D
    const app = new Server();
    new io(server) // iniciando o websocket
    app.StartServer(); // iniciando o servidor
})()
