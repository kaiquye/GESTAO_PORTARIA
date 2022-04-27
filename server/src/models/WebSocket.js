const { Server } = require('socket.io')

class WebSocket {
    io;
    Start(instacerHttp) {
        this.io = new Server(instacerHttp);
    }
    // methodos de busca não precisam de funções
    // methodos de envio precisam de funções
}
module.exports = new WebSocket();