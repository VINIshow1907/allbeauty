import React from "react";
import Rotas from "../rotas";
import { Route, useNavigate, Navigate } from "react-router-dom";
import ProMenuSuperior from "../componentes/promenusuperior";
import Rodape from "../componentes/rodape";

export default function EditarProfissional() {
    const navigate = useNavigate();

  return (
    <>
      <ProMenuSuperior/>
      <h1>Inicial Profissional</h1>  
 <Rodape/>
    </>
 );
}
