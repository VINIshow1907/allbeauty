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

  const [profissional, setProfissional] = React.useState({
    nome: '',
    cpf: '',
    telefone: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    servicos: {
      manicure: false,
      pedicure: false,
      cabeleleiro: false,
      maquiador: false,
      designSobrancelha: false,
      depiladora: false,
    }
  });

  // Use o useEffect para buscar os dados do profissional quando o componente for montado
  React.useEffect(() => {
    // Faça uma solicitação para obter os dados do profissional
    axios.get('/formulario')
      .then(response => {
        setProfissional(response.data); // Atualize o estado com os dados reais do profissional
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Certifique-se de passar as dependências corretas, caso contrário, isso pode causar um loop infinito

  const paginaLogin = () => {
    navigate("/login");
  };
  const FormularioEditarPro = () => {
    navigate("/editarprofissional");
  };
  const paginaHomeProfissional = () => {
    navigate("/homeprofissional");
  
  }  
  

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
                
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
            <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Pedicure"
                
              />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
            <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Cabeleleiro"
                
              />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Maquiador"
               
              />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Design Sobrancelha"
                
              />
             </Grid>
             
              <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel   
                control={<Checkbox value="remember" color="primary" />}
                label="Depiladora"  
              />
             </Grid>
          </Grid>

            <Button onClick={paginaHomeProfissional}
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
            <Button onClick={paginaHomeProfissional}
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
             VOLTAR 
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}