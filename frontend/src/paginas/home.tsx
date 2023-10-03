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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "MAQUIAGEM",
    imgPath: introducao,
  },
  {
    label: "CABELO",
    imgPath: primeiraimagem,
  },
  {
    label: "PEDICURE",
    imgPath: terceiraimg,
  },
  {
    label: "MANICURE",
    imgPath: imgcarrossel4,
  },
];

export default function Home() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const paginaCadastro = () => {
    navigate("/Cadastro");
  
  };
  const MenuSuperior = () => {
    navigate("/MenuSuperior");
    }  
    return (
    <Box sx={{ maxWidth: 10000, flexGrow: 100,minHeight:250 ,textAlign: "center" }}>
      <Menusuperior />
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 5,
          bgcolor: "",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 350,
                  display: "block",
                  maxWidth: 1350,
                  overflow: "hidden",
                  width: "100%",
                  margin: 10,
                  alignItems: "center",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

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
      <h1>Selecione o seu estado, a sua cidade e o serviço que procura para encontrar os profissionais que melhor atendem às suas necessidades.</h1>
   <Rodape />
    </Box>
  );
              }
