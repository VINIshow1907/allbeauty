import React from "react";
import Cadastro from "./paginas/cadastro";
import Home from "./paginas/home";
import Rodape from "./componentes/rodape";
import Box from '@mui/material/Box'
import MenuSuperior from "./componentes/menusuperior";
//import Formulario from "./frontend/componentes/formulario";                  
function App() {
  return (
    <>
      <Home/>
      |<Rodape/>
      <MenuSuperior/>
       </>
  );
}

export default App;
