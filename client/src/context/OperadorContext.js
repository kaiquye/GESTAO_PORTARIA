import { createContext } from 'react';

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