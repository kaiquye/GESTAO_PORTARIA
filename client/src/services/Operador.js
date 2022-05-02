/**
 * @Sevices Conexão com o a API
*/
import axios from 'axios';
import useStorageToken from '../hooks/localStorage';
const API = axios.create({
    baseURL: 'http://localhost:4000/operador'
})
export default function OperadorServices() {

    const Storage = useStorageToken();

    return ({
        /**
         * @LOGIN
         * @Retorno verifica se o usuario é valido. Retorna [ sucess | id | username | role | Token | message ]
         */
        Sign: async function (email, password) {
            try {
                const response = await API.post('/login-operador', { email, password }); 
                console.log(response);
                const data = response.data;
                return {
                    sucess: data.sucess,
                    id: data.data.id,
                    username: data.data.username,
                    role: data.data.role,
                    Token: data.token.Token,
                    message: 'Operador logado com sucesso.'
                }
            } catch (error) {
                console.log({ error })
                return {
                    sucess: false,
                    id: null,
                    username: null,
                    role: null,
                    Token: null,
                    message: error.response.data.error || error.response.data.status
                }
            }
        },
        Authorized: function () {
        },
        FindAll: function () {
        },
    })
}