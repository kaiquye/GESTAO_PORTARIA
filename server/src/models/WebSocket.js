


class WebSocket {

    #Visitatantes = [];

    new(visitante) {
        this.#Visitatantes.push(visitante);
    }

    getVisitantesAtivos() {
        return this.#Visitatantes;
    }
}

module.exports = new WebSocket();
