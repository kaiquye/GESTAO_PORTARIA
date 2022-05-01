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

    /**
     * @method getVisitantes vou buscar todos os visitantes cadastrados com useEffect, depois vou 
     * coloca-los em um stato e qtn um um novo visitante for cadastrodo vou fica esperando 
     * ser emeitido um evendo. Logo em seguida vou adiciona-lo no mesmo stado.
      */


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
