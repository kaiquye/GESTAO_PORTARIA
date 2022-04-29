const { Server } = require('socket.io')

class WebSocket {
    io;
    constructor(instacerHttp) {
        return this.io = new Server(instacerHttp);
    }

    // static SendUpdateStatus() {
    //     this.io.on('connection', (socket) => {
    //         socket.emit('update', 'teste emit');
    //     })
    // }

    // methodos de busca não precisam de funções
    // methodos de envio precisam de funções
}
module.exports = WebSocket;