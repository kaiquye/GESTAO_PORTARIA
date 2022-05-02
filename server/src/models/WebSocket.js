class WebSocket {

    #Visitatantes = [];

    new(visitante) {
        this.#Visitatantes.push(visitante);
    }

    getVisitantesAtivos() {
        const T = this.#Visitatantes.filter(visitante => visitante.status_truck !== 1);
        return this.#Visitatantes;
    }
}

module.exports = new WebSocket();
