import { useContext, useEffect, useState } from 'react';
import Formulario from './page-components/formulario';
import { VisitanteContext } from '../../context/VisitanteContext';
import logo from './logo.png'
import style from './index.module.css'

function PageCadastro() {

    const { GetVisitantes } = useContext(VisitanteContext);

    // const Socket = io("ws://localhost:4000", {
    //     transports: ["websocket"],
    // })
    // Socket.on('update', (data) => console.log('body', data))

    return (
        <main className={style.main}>
            <section className={style.section} >
                <img className={style.img} src={logo} />
            </section>
            <sectio className={style.form} >
                <Formulario />
            </sectio>
        </main>
    )
}

export default PageCadastro;