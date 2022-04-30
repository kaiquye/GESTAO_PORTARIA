import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { AuthContextProvider } from './context/Authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  </React.StrictMode>
);
