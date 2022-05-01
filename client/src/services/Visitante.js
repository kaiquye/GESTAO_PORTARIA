/**
 * @Sevices Conexão com o a API
*/
import axios from 'axios';
import useStorageToken from '../hooks/localStorage';
const API = axios.create({
    baseURL: 'http://localhost:4000/visitante'
})
export default function VisitanteServices() {

    const Storage = useStorageToken();

    return ({
        /**
         * @LOGIN
         * @Retorno verifica se o usuario é valido. Retorna [ sucess | id | username | role | Token | message ]
         */
        Create: async function (username, sector, phone, plate_vehicle, plate_truck, services, auth, active, Token) {
            try {
                const response = await API.post('/create-visitante', { username, sector, phone, status_truck: 1, plate_vehicle, plate_truck, services, auth, active }, { headers: { 'authorization': Token } });
                const data = response.data;
                return {
                    sucess: data.sucess,
                    message: 'Visitante cadastrado com sucesso.'
                }
            } catch (error) {
                console.log({ error })
                return {
                    sucess: false,
                    message: error.response.data.error || error.response.data.status
                }
            }
        },
        updateStatus: function () {
        },
        delete: function () {
        },
        findByRegister: function () {
        },
        findAll: function () {
        },
    })
}