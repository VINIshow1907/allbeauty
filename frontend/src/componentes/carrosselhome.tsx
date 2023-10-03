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
import terceiraimg from "../img/terceiraimg.png";
import { Grid } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    imgPath: introducao,
  },
  {
    imgPath: primeiraimagem,
  },
  {
    imgPath: terceiraimg,
  },
  
];

export default function Carrossel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const theme = useTheme();

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
return(
  <AutoPlaySwipeableViews
    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
  >
    {images.map((step, index) => (
      <div>
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
          />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>
)
}
