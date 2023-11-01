import Formulario from "../componentes/cadastro/formulario";
import React from "react";
import Rodape from "../componentes/rodape/rodape";

export default function Cadastro() {
  return (
    <>
      <div className="img-fundo">
        <Formulario />
      </div>
      <Rodape />
    </>
  );
}
