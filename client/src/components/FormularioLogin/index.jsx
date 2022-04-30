import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './formulario.module.css'
import Radios from './components/radios';

function FormularioLogin() {

    const [email, setEmail] = useState(null);
    const [password, setPassowrd] = useState(null);
    const [tipoAcesso, setTipoAcesso] = useState(0);

    function AtivaButton() {
        // ativa o botão caso preencha todos os campos q
        if (tipoAcesso !== 0 & password !== null & email !== null) {
            return false;
        }
        return true;
    }

    return (
        <main className={style.root}  >
            <form className={style.form} noValidate autoComplete="off">
                <TextField className={style.input} id="standard-basic" label="E-mail"
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField className={style.input} id="standard-basic" label="Password" type='password'
                    onChange={(e) => setPassowrd(e.target.value)} />
                <Radios setAcesso={setTipoAcesso} acesso={tipoAcesso} />
                <Button type='submit' variant="contained" disabled={AtivaButton()}>
                    Entrar
                </Button>
            </form>
        </main>
    )
}


export default FormularioLogin;
