import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { AuthContextProvider } from './context/Authentication';
import { BrowserRouter, Outlet, Routes } from 'react-router-dom'
import RouteApp from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <RouteApp />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
