import React from "react";
import Rotas from "../rotas";
import { Route, useNavigate, Navigate } from "react-router-dom";
import ProMenuSuperior from "../componentes/menusuperiorpro/promenusuperior";
import Rodape from "../componentes/rodape/rodape";
import Cadastro from "../paginas/cadastro";
import FormularioEditarPro from "../componentes/paginainicialpro/homeprofissional"

export default function EditarProfissional() {
    const navigate = useNavigate();

  return (
    <>
      <ProMenuSuperior/>
      <h1></h1> 
      <FormularioEditarPro/>
       <Rodape/>
    </>
 );
}
