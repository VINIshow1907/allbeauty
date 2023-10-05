import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import primeiraimagem from "../img/primeiraimagem.png";
import imgcarrossel4 from "../img/manicure1.jpg";
import Rodape from "../componentes/rodape";
import introducao from "../img/introducao.png"; 
import { Route, useNavigate, Navigate } from "react-router-dom";
import Menusuperior from "../componentes/menusuperior";
import axios from "axios";
import { Grid } from "@mui/material";
import Carrossel from "../componentes/carrosselhome";
import "../estilos/fonte.css"; // Importe o arquivo CSS de estilos


export default function Home() {
  const navigate = useNavigate();

  const paginaCadastro = () => {
    navigate("/Cadastro");
  };
    
    return (
    <Box sx={{ maxWidth: 10000, flexGrow: 100,minHeight:250 ,textAlign: "center" }}>
      <Menusuperior />
      <Carrossel/>    
      
      <Grid sx={{
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 5,
        color: "rgba(227,0,39,1)",
        fontFamily: "monospace",
      }}>
        <h1>Agora, você cliente, poderá escolher o profissional que mais o agrada com base na cidade em que você está e no serviço que você precisa.</h1>
        <h3 className="">Selecione o seu estado, a sua cidade e o serviço que procura para 
        encontrar os profissionais que melhor atendem às suas necessidades.</h3>
      </Grid>
   <Rodape />
    </Box>
  );
              }
