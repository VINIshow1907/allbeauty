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
import terceiraimg from"../img/terceiraimg.png";
import { Grid } from "@mui/material";
import Carrossel from "../componentes/carrosselhome";


export default function Home() {
  const navigate = useNavigate();


  const paginaCadastro = () => {
    navigate("/Cadastro");
  
  };
    
    return (
    <Box sx={{ maxWidth: 10000, flexGrow: 100,minHeight:250 ,textAlign: "center" }}>
      <Menusuperior />
      <Carrossel/>    
      <Button
        onClick={paginaCadastro}
        type="submit"
        variant="contained"
        sx={{ 
          mt: -12,
           mb: 1,
            bgcolor: "#ad1457",
             '&:hover': {
              bgcolor: "#ec407a",
            },
           }}
      >
        CADASTRE-SE
      </Button>
      <Grid sx={{
        textAlign: "left",
      }}>
      <h1>Selecione o seu estado, a sua cidade e o serviço que procura para encontrar os profissionais que melhor atendem às suas necessidades.</h1>
      </Grid>
    
   <Rodape />
    </Box>
  );
              }
