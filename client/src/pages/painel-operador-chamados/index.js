import { useContext, useEffect, useState } from 'react'
import style from './index.module.css';
import { io } from 'socket.io-client';
import { VisitanteContext } from '../../context/VisitanteContext';
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function PageOperador() {

    const { AlterStatus } = useContext(VisitanteContext);
    const [visitantes, setVisitantes] = useState();


    const Socket = io("ws://localhost:4000", {
        transports: ["websocket"],
    })

    useEffect(() => {
        Socket.emit('find')
    }, [])

    Socket.on('newVisitante', (data) => {
        console.log([data])
        console.log('data....', { data });
        if (visitantes.length) {
            const array = [...data]
            console.log('arrrarrrarrarar', array)
            setVisitantes(array);
        } else {
            setVisitantes([...data]);
        }
    })

    // tenho que busca todos que estão com o status alterado. O backend vai emitr um evento. 
    Socket.on('all', (data) => {
        console.log([data])
        console.log('data....', { data });
        if (data.length) {
            setVisitantes(data)
        }
    })

    return (
        <main>
            <section>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="right">sdasdasdasdasda</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visitantes && visitantes.map((visitante, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {visitante.username}
                                    </TableCell>
                                    <TableCell align="right">{visitante.sector}</TableCell>
                                    <TableCell align="right">{visitante.phone}</TableCell>
                                    <TableCell align="right">{visitante.plate_truck}</TableCell>
                                    <TableCell align="right">{visitante.services}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </main>
    )
}

export default PageOperador;
