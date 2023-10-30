import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Route, useNavigate, Navigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Rodape() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          background: "linear-gradient(90deg, rgba(154,0,255,1) 0%, rgba(227,0,39,1) 48%, rgba(249,137,0,1) 100%);" ,
          display: "flex",
          flexDirection: "column",
          minHeight: "50vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb:2, color: "white" }} maxWidth="sm" >
          <Typography variant="h2" component="h1" gutterBottom textAlign={"center"}>
            ALLBEAUTY
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom textAlign={"center"}>
            {"Profissionais da mais alta qualidade estão aqui!"}
            <p></p>
            {"Melhor site de busca na aréa da beleza"}
          </Typography>
          <Typography variant="body1" textAlign={"center"}>ALLBEAUTY</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" textAlign={"center"}>Maria Clara e Vinicius</Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
