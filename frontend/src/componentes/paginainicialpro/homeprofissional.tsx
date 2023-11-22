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
import { Route, Link, useNavigate, Navigate,useParams } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from 'axios'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DeleteExpression } from "typescript";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Formulario() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  const [profissional, setprofissional] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    cidade: '',
    estado: '',
    descricao:'',
    servicos: {
      manicure: false,
      pedicure: false,
      cabeleleiro: false,
      maquiador: false,
      designSobrancelha: false,
      depiladora: false,
    }
  });
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

        setprofissional({
          ...profissional,
          cidade: cidadeprofissional,
          estado: estadoprofissional,
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


  //esse e da checkbox
    
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
    setprofissional({ ...profissional, [name]: value });
  };
   
  //esse e da checkbox

 //   const servicosSelecionadosArray = Object.keys(servicosSelecionados).filter(
 //   (servico: keyof typeof servicosSelecionados) => servicosSelecionados[servico]
 // );
  

//  console.log('Serviços selecionados:', servicosSelecionadosArray);

 
// React.useEffect(() => {
//    axios.get
// }, [])

  //// id do profissional
  // Agora você tem o ID do profissional, que pode ser usado para associá-lo aos serviços.
  ///const profissionalId = response.data.id;
  
  // Aqui, você pode chamar a função para criar o item do serviço, passando o profissionalId e os serviços selecionados.
  //const itemServico = createItemServico(profissionalId, servicosSelecionados);

  // Em seguida, você pode enviar os dados do item de serviço para o servidor.
  // Certifique-se de que seu servidor possua um endpoint para lidar com a criação de itens de serviço.

  // Exemplo de como enviar o item de serviço para o servidor:
 // axios.post("http://localhost:5000/criaritemservico", itemServico)
 // .then(response => {
 //   console.log("Item de serviço cadastrado:", response.data);
 // })
 
  //CRIANDO A CHECKBOX 
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
            Perfil
          </Typography>
          <Box
            component="form"
            noValidate
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
                  disabled
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
                  disabled
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
                  disabled
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
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
                  disabled
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
                  disabled
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
                disabled
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
                <TextField
                disabled
                  required
                  fullWidth
                  id="descricao"
                  label="DESCRIÇÃO DO SEU SERVIÇO"
                  name="descricao"
                  autoComplete="descricao"
                  value={profissional.descricao}
                  onChange={valueInput}
                  inputProps={{maxLength:200}}
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
                      
                      color="primary"
                      name="manicure"
                      id="manicure"
                      disabled
                      />
                  }
                  label="MANICURE"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="pedicure"
                      id="pedicure"
                      disabled
                       />
                  }
                  label="PEDICURE"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="cabeleleiro"
                      id="cabeleleiro"
                      disabled
                      />
                  }
                  label="CABELEREIRO"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="maquiador"
                      id="maquiador"
                      disabled
                      />
                  }
                  label="MAQUIADOR"
                />
              </Grid>
              
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="depiladora"
                      id="depiladora"
                      disabled
                      />
                  }
                  label="DEPILADORA"
                />
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="designsobrancelha"
                      id="designsobrancelha"
                      disabled
                       />
                  }
                  label="DESIGN SOBRANCELHA"
                />
              </Grid>
            </Grid>

            <Button
            
           
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
              
            >
              Deletar conta <DeleteOutline />
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid container>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
      );
}



