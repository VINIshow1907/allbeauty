import * as React from "react";
import  useTheme  from "@mui/material";
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
import axios from "axios";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function FormularioEditarPro() {
  const navigate = useNavigate();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      cpf: data.get("cpf"),
      servico: data.get("servico"),
      telefone: data.get("telefone"),
      uf: data.get("uf"),
      cidade: data.get("cidade"),
    });
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
            EDITAR PERFIL 
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid container item xs={12} sm={6}  >
                <TextField
                  autoComplete="nome completo"
                  name="nome completo"
                  required
                  fullWidth
                  id="nomecompleto"
                  label="NOME COMPLETO"
                  disabled
                  autoFocus
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
                  disabled
                  autoComplete="cpf"
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
                  disabled
                />
              </Grid>

              <Grid item xs={12} sm={6} >
                <TextField 
                  
                  required
                  fullWidth
                  id="uf"
                  label="UF"
                  name="uf"
                  autoComplete="uf"
                  disabled
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="cidade"
                  label="CIDADE"
                  name="cidade"
                  autoComplete="cidade"
                  disabled
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
                disabled
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
                id="Senha"
                autoComplete="nova senha"
                disabled
              />
            </Grid>
              <Grid item xs={12} >
          <Typography variant="h6" textAlign={"center"}>
             Serviço Prestado                 
          </Typography>
          </Grid>
            <br></br>
            <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Manicure"
                disabled
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
            <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Pedicure"
                disabled
              />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
            <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Cabeleleiro"
                disabled
              />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Maquiador"
                disabled
              />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Design Sobrancelha"
                disabled
              />
             </Grid>
             
              <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Depiladora"
                disabled
              />
             </Grid>
          </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                mb: 2,
                  bgcolor: "#ad1457",
              '&:hover': {
               bgcolor: "#ec407a",
             },
             }}
            >
              Editar
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                mb: 2,
                  bgcolor: "#ad1457",
              '&:hover': {
               bgcolor: "#ec407a",
             },
             }}
            >
              Salvar
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                mb: 2,
                  bgcolor: "#ad1457",
              '&:hover': {
               bgcolor: "#ec407a",
             },
             }}
            >
              Atualizar
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                mb: 2,
                  bgcolor: "#ad1457",
              '&:hover': {
               bgcolor: "#ec407a",
             },
             }}
            >
                DELETAR
            </Button>
<p></p>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
