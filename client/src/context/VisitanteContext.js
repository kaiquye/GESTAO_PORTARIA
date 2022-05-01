import { createContext } from 'react';
import VisitanteServices from '../services/Visitante';
import useStorage from '../hooks/localStorage';

export const VisitanteContext = createContext({});

export function VisitanteContextProvider({ children }) {

    const Storage = useStorage();

    async function CadastrarVisitante(username, sector, phone, plate_vehicle, plate_truck, services, auth, active) {
        const Token = Storage.get();
        const { sucess, message } = await VisitanteServices().Create(username, sector, phone, plate_vehicle, plate_truck, services, auth, active, Token)
        alert(message, Token)
        console.log(sucess);
        if (sucess) return true;
        return false;
    };


    return (
        <VisitanteContext.Provider value={{ CadastrarVisitante }} >
            {children}
        </VisitanteContext.Provider>
    )

}