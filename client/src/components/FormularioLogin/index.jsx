import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './formulario.module.css'
import Radios from './components/radios';

// contexto de autenticação.
import { AuthContext } from '../../context/Authentication';

const schema = yup.object({
    email: yup.string('is not valid').required('is required'),
    password: yup.string('is not valid').required('is required'),
}).required();


function FormularioLogin() {

    const { SignAdmin } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassowrd] = useState(null);q
    const [tipoAcesso, setTipoAcesso] = useState(0);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async data => {
        alert('terd')
        console.log('data', data)
    };

    function AtivaButton() {
        // ativa o botão caso preencha todos os campos q
        if (tipoAcesso !== 0 & password !== null & email !== null) {
            return false;
        }
        return true;
    }

    return (
        <main className={style.root}  >
            <form onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate autoComplete="off">
                <TextField {...register('email')} name='email' className={style.input} id="standard-basic" label="E-mail"
                    onChange={(e) => setEmail(e.target.value)} />
                <p style={{ color: 'red' }} >{errors.email?.message}</p>
                <TextField  {...register('password')} name='password' className={style.input} id="standard-basic" label="Password" type='password'
                    onChange={(e) => setPassowrd(e.target.value)} />
                <p style={{ color: 'red' }} >{errors.password?.message}</p>
                <Radios  {...register('acesso')} setAcesso={setTipoAcesso} acesso={tipoAcesso} />
                <Button type='submit' variant="contained" disabled={AtivaButton()}>
                    Entrar
                </Button>
            </form>
        </main>
    )
}


export default FormularioLogin;
