import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import primeiraimagem from "../img/primeiraimagem.png";
import introducao from "../img/introducao.png";
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
  <div style={{ maxWidth: "100%", overflow:  "hidden"}}>
  <AutoPlaySwipeableViews
    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
  >
    {images.map((step, index) => (
      <div key={index}>
        {Math.abs(activeStep - index) <= 2 ? (
          <Box
            component="img"
            sx={{
              display: "block",
              maxWidth: "100%",
              width: "100%",
              margin: "0 auto",
            }}
            src={step.imgPath}
          />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>
  </div>
);
}
