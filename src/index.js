import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AdminContextProvider } from './config/Admin/AdminContext';
import './config/global.css';
import { ThemeProvider } from './config/Theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>,
);
