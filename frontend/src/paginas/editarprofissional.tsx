import React from "react"
import Rotas from "../rotas"
import FormularioEditarPro from "../componentes/editarprofissional/formularioeditarpro"
import ProMenuSuperior from "../componentes/menusuperiorpro/promenusuperior"
import { Box, Typography } from "@mui/material"
import Rodape from "../componentes/rodape/rodape"

export default function EditarProfissional() {

    return (

        <>
       <ProMenuSuperior />
       <FormularioEditarPro />
       <Rodape />
       
        </>
        
    )

}