require('dotenv').config();
const express = require('express');
const { Server } = require('socket.io');
const Visitantes = require('./src/main/visitantes/visitantes-routes');
const Operadores = require('./src/main/operador/operador-routes');
const Admin = require('./src/main/admin/admin-routes');
const Cors = require('./src/midlleware/cors');
const http = require('http');
const WebSocket = require('../server/src/models/WebSocket')

const App = express();
/**
 * @MyServer config connection to websocket.
 * @Annotation Arquivo principal não segue o padrão de class. 
 */
const MyServer = http.createServer(App);

App.use(Cors.Config());
App.use(express.json());

// iniciando o webSocket
const io = new Server(MyServer);
io.on('connection', (socket) => {
    socket.on('findAll', () => {
        console.log('chamou findall')
        const Visitantes = WebSocket.getVisitantesAtivos();
        io.emit('getAll', Visitantes);
    })
})

// Passando a instacia do websocket para todas as rotas.
App.use((req, res, NEXT) => {
    req.io = io
    NEXT()
});

// rotas principais
App.use('/admin', Admin);  // responsavel por cadastrar os visitantes e controllar os acessos dos usuarios.
App.use('/visitante', Visitantes);   // aguardam serem chamados.
App.use('/operador', Operadores); // responsavel por aceita e finalizar as operações dos 

MyServer.listen(process.env.PORT, console.log(`server connected in ${process.env.PORT}`));
