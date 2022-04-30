/**
 * @Sevices Conexão com o a API
*/
import axios from 'axios';
import useStorageToken from '../hooks/localStorage';
const API = axios.create({
    baseURL: 'http://localhost:4000/admin'
})
export default function AdminServices() {

    const Storage = useStorageToken();

    return ({
        /**
         * @LOGIN
         * @Retorno verifica se o usuario é valido. Retorna [ sucess | id | username | role | Token | message ]
         */
        Sign: async function (email, password) {
            try {
                const response = await API.post('/login-admin', { email, password });
                const data = response.data;
                return {
                    sucess: data.sucess,
                    id: data.data.id,
                    username: data.data.username,
                    role: data.data.role,
                    Token: data.token.Token,
                    message: 'Administrador logado com sucesso.'
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