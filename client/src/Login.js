import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import FormularioLogin from './components/FormularioLogin';

function Login() {
  return (
    <>
      <div className="App">
        <main>
          <p className='tituloPageLogin' >Gestão de portaria</p>
          <FormularioLogin />
        </main>
      </div>
    </>
  );
}

export default Login;
