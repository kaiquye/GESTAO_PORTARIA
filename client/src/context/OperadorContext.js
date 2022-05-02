import { createContext } from 'react';
import VisitanteServices from '../services/Visitante';

export const OperadorContext = createContext();

export function OperadorContextProvider({children}) {

    function AlterarStatus(){
        
    } 

    function Finalizar(){

    }

    return (
        <OperadorContext.Provider>
            {children}
        </OperadorContext.Provider>
    )
}