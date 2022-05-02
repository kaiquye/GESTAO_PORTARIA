import { createContext } from 'react';
import VisitanteServices from '../services/Visitante';
import useStorage from '../hooks/localStorage';
import { io } from 'socket.io-client';


export const VisitanteContext = createContext({});

export function VisitanteContextProvider({ children }) {

    function ConnectionWebSocket() {
        // const Socket = io("ws://localhost:4000", {
        //     transports: ["websocket"],
        // })
        // return Socket;
    }


    const Storage = useStorage();

    async function CadastrarVisitante(username, sector, phone, plate_vehicle, plate_truck, services, auth, active) {
        const Token = Storage.get();
        const { sucess, message } = await VisitanteServices().Create(username, sector, phone, plate_vehicle, plate_truck, services, auth, active, Token)
        alert(message, Token)
        console.log(sucess);
        if (sucess) return true;
        return false;
    };

    async function GetVisitantes() {
        const vs = VisitanteServices().findAll();
        console.log(vs);
    }

    async function AlterStatus(phone, status) {
        await VisitanteServices().updateStatus(phone, status);
    }


    return (
        <VisitanteContext.Provider value={{ CadastrarVisitante, AlterStatus, GetVisitantes, ConnectionWebSocket }} >
            {children}
        </VisitanteContext.Provider>
    )

}