class WebSocket {

    #Visitatantes = [];
    #VisitantesInt = [];

    new(visitante) {
        this.#Visitatantes.push(visitante);
    }

    newVisitanteInt(phone) {
        console.log(this.#Visitatantes);
        if (!phone) return this.#VisitantesInt;
        const visitante = this.#Visitatantes.filter(visitante => visitante.phone == phone);
        console.log("filtro", visitante);
        this.#VisitantesInt.push(...visitante);
        return this.#VisitantesInt.reverse();
    }

    getVisitantesAtivos() {
        const T = this.#Visitatantes.filter(visitante => visitante.status_truck !== 1);
        return T;
    }


    alterStatus() {
        // busco o visitante.
        const visitante = this.#Visitatantes.find(visitante)
        console.log(visitante);
        const newVisitante = visitante.phone = phone;
        const arraySemOvisitate = this.#Visitatantes.filter(visitante => visitante.phone !== phone);
        console.log(arraySemOvisitate);
    }

    get() {
        const T = this.#Visitatantes.filter(visitante => visitante.status_truck === 1);
        return T;
    }
}

module.exports = new WebSocket();
