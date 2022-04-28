require('dotenv').config();
const express = require('express');
// server para o websocket
const server = require('http').createServer(express());
const io = require('./src/models/WebSocket');
const Cors = require('./src/midlleware/cors');
const Visitantes = require('./src/main/visitantes/visitantes-routes');

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
            Visitantes,
        ])
    }
    StartServer() {
        this.App.listen(process.env.PORT, () => console.log(`start server in ${process.env.URL}`))
    }
}
(() => {
    // configura o ambiente P/D
    const app = new Server();
    io.Start(server) // iniciando o websocket
    app.StartServer(); // iniciando o servidor
})()
