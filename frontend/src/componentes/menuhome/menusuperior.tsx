import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, Link, useNavigate } from "react-router-dom";
import Cadastro from "../../paginas/cadastro";


export default function MenuSuperior() {
  const navigate = useNavigate();
  const paginaCadastro = () => {
    navigate("/cadastro");
  };
  const paginaLogin = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(90deg, rgba(154,0,255,1) 0%, rgba(227,0,39,1) 48%, rgba(249,137,0,1) 100%);",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AllBeauty
          </Typography>
          <Button color="inherit" onClick={paginaCadastro} >
            Cadastre-se
          </Button>

          <Button color="inherit" onClick={paginaLogin} >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
