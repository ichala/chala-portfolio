import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AdminContextProvider } from './config/Admin/AdminContext';
import './config/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
);
