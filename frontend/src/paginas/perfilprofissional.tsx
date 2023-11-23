import React from "react"
import Rotas from "../rotas"
import FormularioEditarPro from "../componentes/editarprofissional/formularioeditarpro"
import ProMenuSuperior from "../componentes/menusuperiorpro/promenusuperior"
import MenuEditarPro from"../componentes/menueditarpro"
import { Box, Typography } from "@mui/material"
import Rodape from "../componentes/rodape/rodape"
import PerfilProfissional from "../componentes/perfildoprofissional"


export default function PerfildoProfissional() {

    return (

        <>
       <MenuEditarPro />
       <PerfilProfissional />
       <Rodape />
       
        </>
        
    )

}