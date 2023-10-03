import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  const paginaCadastro = () => {
    navigate("/cadastro");
  };
  const paginaHomeProfissional = () => {
    navigate("/homeprofissional");
  
  }  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          bgcolor: "white",
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#ad1457" }}></Avatar>
        <Typography component="h1" variant="h5">
            Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="novasenha"
            label="DIGITE SUA NOVA SENHA"
            type="password" 
            name="novasenha"
            autoComplete="novasenha"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="senha"
            label=" DIGITE SUA NOVA SENHA"
            type="password"
            name="novasenha"
            autoComplete="Senha atual"
            autoFocus
          />
          <FormControlLabel
            control={<Checkbox value="Lembredemim" color="primary" />}
            label="Lembre de mim"
          />
          <Button onClick={paginaHomeProfissional}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,bgcolor:"#e00baf" }}
          >
            NOVA SENHA
          </Button>
          
          </Box>
      </Box>
    </Container>
  );
}
