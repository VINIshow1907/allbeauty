import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './rotas';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material';
import tema from './estilos/tema';
import Rodape from './componentes/rodape';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <Rotas/>
      
    </ThemeProvider>
  </React.StrictMode>
  
);








