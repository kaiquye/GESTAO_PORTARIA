import react, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useStorageToken from '../hooks/localStorage';
import AdminServices from '../services/Admin';
import OperadorServices from '../services/Operador';

export const AuthContext = createContext({});
/**
 * @Context de authenticação de usuario.
 * Desenvolvido com a idea de que o contexto serviria de "interface" para os componentes (telas).
 */
export function AuthContextProvider({ children }) {

    // Navegação entre paginas 
    const NavigateTo = useNavigate();

    //LocalStorage
    const Storage = useStorageToken();

    const [Authenticated, setAuthenticated] = useState(0);
    const [username, setUsername] = useState();
    const [role, setRole] = useState();
    const [id, setId] = useState();

    async function SignAdmin(email, password) {
        const { Token, id, message, role, sucess, username } = await AdminServices().Sign(email, password);
        if (!sucess) return alert(message);
        alert(message)
        setAuthenticated(id);
        setUsername(username);
        setRole(role);
        setId(id);
        Storage.set(Token);
        NavigateTo('/painel-admin')
    }

    async function SignOperador(email, password) {
        const { Token, id, message, role, sucess, username } = await OperadorServices().Sign(email, password);
        if (!sucess) return alert(message);
        alert(message)
        setAuthenticated(id);
        setUsername(username);
        setRole(role);
        setId(id);
        Storage.set(Token);
        NavigateTo('/painel-operador')
    }

    return (
        <AuthContext.Provider value={{ SignAdmin, SignOperador }}>
            {children}
        </AuthContext.Provider>
    )
}