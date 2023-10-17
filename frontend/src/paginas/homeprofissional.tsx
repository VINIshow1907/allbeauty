import React from "react";
import Rotas from "../rotas";
import { Route, useNavigate, Navigate } from "react-router-dom";
import ProMenuSuperior from "../componentes/promenusuperior";
import Rodape from "../componentes/rodape";
import Cadastro from "../paginas/cadastro";
import FormularioEditarPro from "../componentes/formularioeditarpro"

export default function EditarProfissional() {
    const navigate = useNavigate();

  return (
    <>
      <ProMenuSuperior/>
      <h1>Edição Profissional</h1> 
      <FormularioEditarPro/>

 <Rodape/>
    </>
 );
}
