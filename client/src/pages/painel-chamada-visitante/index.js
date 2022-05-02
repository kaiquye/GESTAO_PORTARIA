import { useEffect, useState, useContext } from 'react';
import { VisitanteContext } from '../../context/VisitanteContext';
import { io } from 'socket.io-client';

import style from './index.module.css';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function PainelChamadaVisitante() {

    /**
     * so machar o metood do socket
     * so funciona s eue chama
     */

    const [visitantes, setVisitantes] = useState(null);

    const Socket = io("ws://localhost:4000", {
        transports: ["websocket"],
    })

    useEffect(() => {
        Socket.emit('findAll')
    }, [])

    Socket.on('update', (data) => {
        if (!visitantes === null) {
            const array = [...visitantes, ...data];
            setVisitantes(array);
        } else {
            setVisitantes(data);
        }
    });
    // tenho que busca todos que estão com o status alterado. O backend vai emitr um evento. 
    Socket.on('getAll', (data) => {
        console.log([data])
        console.log('data....', { data });
        if (data.length) {
            setVisitantes(data)
        }
    })


    return (
        <>
            <section>
                <h1 className={style.listadechamada} >
                    Lista de chamada
                </h1>
                <main>
                    <div className={style.anuncio} >
                        {visitantes && <>
                            <div className={style.placa} >
                            <label style={{ fontSize: '25px', color: 'pink' }} >Nome </label>
                                <h1>
                                    {
                                        visitantes[0].username
                                    }
                                </h1>
                            </div>
                            <div className={style.nome} >
                                <label style={{ fontSize: '25px', color: 'pink' }} >Placa</label>
                                <h1>
                                    {
                                        visitantes[0].plate_truck
                                    }
                                </h1>
                            </div>
                        </>
                        }
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <h1 className={style.listadechamada} >Passados</h1>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Nome </TableCell>
                                        <TableCell align="left">Placa </TableCell>
                                        <TableCell align="left">Setor </TableCell>
                                        <TableCell align="left">Serviço </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {visitantes && visitantes.map((vistante, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {vistante.username}
                                            </TableCell>
                                            <TableCell align="left">{vistante.plate_truck}</TableCell>
                                            <TableCell align="left">{vistante.sector}</TableCell>
                                            <TableCell align="left">{vistante.services}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </main>
            </section>
        </>
    )
}

export default PainelChamadaVisitante;
