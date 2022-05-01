import { useEffect, useState, useContext } from 'react';
import { VisitanteContext } from '../../context/VisitanteContext';
import { io } from 'socket.io-client';

function PainelChamadaVisitante() {

    /**
     * so machar o metood do socket
     * so funciona s eue chama
     */

    const [visitantes, setVisitantes] = useState([]);

    const Socket = io("ws://localhost:4000", {
        transports: ["websocket"],
    })

    useEffect(() => {
        Socket.emit('findAll')
    }, [])

    Socket.on('update', (data) => {
        console.log('tedted', data)
        setVisitantes([...visitantes, data]);
    });

    Socket.on('getAll', (data) => {
        console.log([data])
        console.log('data....', { data });
        setVisitantes(data)
    })

    return (
        <>
            <h1>
                lista de visitantesasss
            </h1>
            {visitantes &&
                visitantes.map((vistante) => (
                    <p>{vistante.username}</p>
                ))
            }
            <button>
                TESTE
            </button>
        </>
    )
}

export default PainelChamadaVisitante;
