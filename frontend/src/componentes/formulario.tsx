import * as React from "react";
import useTheme from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Link, useNavigate, Navigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from 'axios'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Formulario() {
  const navigate = useNavigate();

  const [profissional, setprofissional] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    cidade: '',
    estado: ''
  });

  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setprofissional({ ...profissional, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Frontend - tentando cadastrar")
    
    axios.post("http://localhost:5000/cadastroprofissional", profissional)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    console.log('passou pelo axios')
  };
  const paginaLogin = () => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            bgcolor: "white",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#ad1457" }}></Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid container item xs={12} sm={6}>
                <TextField
                  autoComplete="nome completo"
                  name="nome"
                  required
                  fullWidth
                  id="nomecompleto"
                  label="NOME COMPLETO"
                  value={profissional.nome}
                  onChange={valueInput}
                  autoFocus
                  inputProps={{maxLength:40}}
                />
              </Grid>
              <br></br>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="cpf"
                  label="CPF"
                  name="cpf"
                  autoComplete="cpf"
                  value={profissional.cpf}
                  onChange={valueInput}
                  inputProps={{maxLength:11}}
                />
              </Grid>
              <br></br>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="telefone"
                  label="TELEFONE"
                  name="telefone"
                  autoComplete="telefone"
                  value={profissional.telefone}
                  onChange={valueInput}
                  inputProps={{maxLength:11}}
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="estado"
                  label="Estado"
                  name="estado"
                  autoComplete="estado"
                  value={profissional.estado}
                  onChange={valueInput}
                  inputProps={{maxLength:2}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cidade"
                  label="CIDADE"
                  name="cidade"
                  autoComplete="cidade"
                  value={profissional.cidade}
                  onChange={valueInput}
                  inputProps={{maxLength:50}}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="DIGITE SEU EMAIL"
                  name="email"
                  autoComplete="email"
                  value={profissional.email}
                  onChange={valueInput}
                  inputProps={{maxLength:50}}
                />
              </Grid>
              <br></br>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="senha"
                  label="DIGITE SUA SENHA"
                  type="password"
                  id="senha"
                  autoComplete="nova senha"
                  value={profissional.senha}
                  onChange={valueInput}
                  inputProps={{maxLength:25}}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" textAlign={"center"}>
                  Serviço Prestado
                </Typography>
              </Grid>
              <br></br>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="manicure"
                      id="manicure"
                    />
                  }
                  label="Manicure"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="pedicure"
                      id="pedicure"
                    />
                  }
                  label="Pedicure"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="cabeleleiro"
                      id="cabeleleiro"
                    />
                  }
                  label="Cabeleleiro"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="maquiador"
                      id="maquiador"
                    />
                  }
                  label="Maquiador"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="designsobrancelha"
                      id="designsobrancelha"
                    />
                  }
                  label="Design Sobrancelha"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="depiladora"
                      id="depiladora"
                    />
                  }
                  label="Depiladora"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#ad1457",
                "&:hover": {
                  bgcolor: "#ec407a",
                },
              }}
              id="btnCadastro"
            >
              INSCREVER-SE
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid container>
                <Button onClick={paginaLogin}>
                  Já possui uma conta? Entrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
      );
}
