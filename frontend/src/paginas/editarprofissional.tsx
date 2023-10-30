import React from "react"
import Rotas from "../rotas"
import FormularioEditarPro from "../componentes/formularioeditarpro"
import ProMenuSuperior from "../componentes/promenusuperior"
import { Box, Typography } from "@mui/material"
import Rodape from "../componentes/rodape"

export default function EditarProfissional() {

    return (

        <>
       <ProMenuSuperior />
       <FormularioEditarPro />
       <Rodape />
       
        </>
        
    )

}