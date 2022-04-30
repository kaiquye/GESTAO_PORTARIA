import React from 'react';
import './App.css'
import FormularioLogin from './components/FormularioLogin';

function App() {
  return (
    <div className="App">
      <main>
        <p className='tituloPageLogin' >Gestão de portaria</p>
        <FormularioLogin />
      </main>
    </div>
  );
}

export default App;
