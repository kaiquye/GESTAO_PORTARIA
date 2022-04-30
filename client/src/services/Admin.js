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
        Authorized: function () {

        },
        Sign: async function (email, password) {
            try {
                const response = await API.post('/login-admin', { email, password });
                console.log(response);
                return response.data;
            } catch (error) {
                console.log({ error })
                return error
            }
        },
        FindAll: function () {

        },
    })
}