import { useContext, useEffect, useState } from 'react';
import Formulario from './page-components/formulario';
import { VisitanteContext } from '../../context/VisitanteContext';

function PageCadastro() {

    const { GetVisitantes } = useContext(VisitanteContext);

    // const Socket = io("ws://localhost:4000", {
    //     transports: ["websocket"],
    // })

    // Socket.on('update', (data) => console.log('body', data))

    return (
        <>
            <main>
                <section>
                    status do cadastro
                </section>
                <sectio>
                    <button>
                        tested
                    </button>
                    <Formulario />
                </sectio>
            </main>
        </>
    )
}

export default PageCadastro;