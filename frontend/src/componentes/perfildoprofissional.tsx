import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import gridinformacoesprofissional from "../componentes/gridinformacoes";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PerfilProfissional() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string}> ();

  const [profissional, setProfissional] = React.useState({
    nome: '',
    cpf: '',
    telefone: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    descricao: '',
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
    axios.get(`http://localhost:5000/visualizarprofissional/${id}`)
      .then(response => {
        console.log(response.data)
        const {
          cidadeprofissional,
          estadoprofissional,
          nomeprofissional,
          telefoneprofissional,
          cpfprofissional,
          emailprofissional,
          senhaprofissional,
          descricaoprofissional
        } = response.data

        setProfissional({
          ...profissional,
          cidade: cidadeprofissional,
          uf: estadoprofissional,
          nome: nomeprofissional,
          telefone: telefoneprofissional,
          cpf: cpfprofissional,
          email: emailprofissional,
          senha: senhaprofissional,
          descricao: descricaoprofissional

        }); // Atualize o estado com os dados reais do profissional
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Certifique-se de passar as dependências corretas, caso contrário, isso pode causar um loop infinito

  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfissional({ ...profissional, [name]: value });
  };

  const paginaLogin = () => {
    navigate("/login");
  };
  const FormularioEditarPro = () => {
    navigate("/editarprofissional");
  };
  const paginaHomeProfissional = () => {
    navigate("/homeprofissional");
  }  
  const handleHomeClick = () => {
    // Navegue para a página "home" quando o ícone Home for clicado
    navigate("/");
  };

  const editarprofissional = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(profissional)
    await axios.put(`http://localhost:5000/editarprofissional/${id}`, profissional)
     .then(response => {
      console.log(response)
     })
     .catch(erro => console.log(erro))
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
             PERFIL DO PROFISSIONAL 
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={editarprofissional}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} >
              <Grid container item xs={12} sm={6}  >
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
                  disabled
                />
                </Grid>
              <br></br>
              
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
                  value={profissional.uf}
                  onChange={valueInput}
                  inputProps={{maxLength:2}}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6} >
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
                  disabled
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="descricao"
                  label="DESCRIÇÃO DO SEU SERVIÇO"
                  name="descricao"
                  autoComplete="descricao"
                  value={profissional.descricao}
                  onChange={valueInput}
                  inputProps={{ maxLength: 200 }}
                  disabled
                />
              </Grid>
          </Grid>

            <Button  onClick={handleHomeClick}
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
             VOLTAR <ExitToAppIcon />
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}