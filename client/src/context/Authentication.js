import react, { createContext } from 'react';
import AdminServices from '../services/Admin';

export const AuthContext = createContext({});


/**
 * @Context de authenticação de usuario.
 * Desenvolvido com a idea de que o contexto serviria de "interface" para os componentes (telas).
 */
export function AuthContextProvider({ children }) {

    async function SignAdmin(email, password) {
        const response = await AdminServices().Sign(email, password);
    }

    return (
        <AuthContext.Provider value={{ SignAdmin }}>
            {children}
        </AuthContext.Provider>
    )
}