class WebSocket {

    #Visitatantes = [];
    #VisitantesInt = [];

    new(visitante) {
        this.#Visitatantes.push(visitante);
    }

    newVisitanteInt(phone){
        console.log(this.#Visitatantes);
        if(!phone) return this.#VisitantesInt;
        const visitante = this.#Visitatantes.filter(visitante => visitante.phone == phone);
        console.log("filtro", visitante);
        this.#VisitantesInt.push(...visitante);
        return this.#VisitantesInt.reverse();
    }

    getVisitantesAtivos() {
        const T = this.#Visitatantes.filter(visitante => visitante.status_truck !== 1);
        return T;
    }
}

module.exports = new WebSocket();
