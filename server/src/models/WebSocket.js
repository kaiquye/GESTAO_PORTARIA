const { Server } = require('socket.io')

class WebSocket {
    io;
    constructor(instacerHttp) {
        this.io = new Server(instacerHttp);
        this.start();
    }

    // static start() {
    //     this.io.on('connection', (socket) => {
    //         socket.emit('teste', 'teste emit');
    //     })
    // }

    // methodos de busca não precisam de funções
    // methodos de envio precisam de funções
}
module.exports = WebSocket;