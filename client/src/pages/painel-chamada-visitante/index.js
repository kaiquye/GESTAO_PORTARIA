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
        <section>
            <h1>
                lista de visitantesasss
            </h1>
            <main>
                <div className={style.anuncio} >
                    {visitantes[0] && <>
                        <div className={style.placa} >
                            <h1>
                                {
                                    visitantes[0].username
                                }
                            </h1>
                        </div>
                        <div className={style.nome} >
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
                        <h1>Passados</h1>
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
    )
}

export default PainelChamadaVisitante;
