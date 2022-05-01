import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import style from './index.module.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { VisitanteContext } from '../../../../context/VisitanteContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    nome: yup.string('is not valid').required('is required'),
    setor: yup.string('is not valid').required('is required'),
    telefone: yup.string('is not valid').required('is required'),
    placaCarreta: yup.string('is not valid').required('is required'),
    placaCaminhao: yup.string('is not valid').required('is required'),
    servico: yup.string('is not valid').required('is required'),
}).required();

function Formulario() {

    const { CadastrarVisitante } = useContext(VisitanteContext);
    const NavigateTo = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async data => {
        const cadastrado = await CadastrarVisitante(data.nome, data.setor, data.telefone, data.placaCaminhao, data.placaCarreta, data.servico);
        console.log(data);
        console.log(cadastrado)
        if (cadastrado) return NavigateTo('/painelasdjkaskkdjakjsdkajsdkj');
    };

    return (
        <main className={style.formulario} >
            <form onSubmit={handleSubmit(onSubmit)} className={style.root} noValidate autoComplete="off">
                <TextField {...register('nome')} name='nome' className={style.inputForm} id="filled-basic" label="Nome completo" variant="filled" />
                <TextField {...register('setor')} name='setor' className={style.inputForm} id="filled-basic" label="Setor de carregamento" variant="filled" />
                <TextField {...register('telefone')} name='telefone' className={style.inputForm} id="filled-basic" label="Telefone" variant="filled" />
                <TextField {...register('placaCarreta')} name='placaCarreta' className={style.inputForm} id="filled-basic" label="Placa carreta" variant="filled" />
                <TextField {...register('placaCaminhao')} name='placaCaminhao' className={style.inputForm} id="filled-basic" label="Placa caminhão" variant="filled" />
                <TextField {...register('ativo')} name='ativo' className={style.inputForm} id="filled-basic" label="Ativo" variant="filled" />
                <TextField {...register('servico')} name='servico' className={style.inputForm} id="filled-basic" label="Serviço" variant="filled" />
                <TextField {...register('autorizacao')} name='autorizacao' className={style.inputForm} id="filled-basic" label="Autorização" variant="filled" />
                <div>
                    <Button type='submit' variant="contained" color="primary">
                        cadastrar
                    </Button>
                    <Button variant="contained" color="primary">
                        cancelar
                    </Button>
                </div>
            </form>
        </main>
    )
}

export default Formulario
