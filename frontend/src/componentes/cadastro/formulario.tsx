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
import { useState, useEffect } from "react";
import axios from "axios";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface Servico {
  idservico: number;
  nomeservico: string;
}

export default function Formulario() {
  const navigate = useNavigate();

  const [profissional, setprofissional] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
    cidade: "",
    estado: "",
    descricao: "",
  });
  const [servicosSelecionados, setServicosSelecionados] = useState<{ [key: number]: boolean }>({});
  const handleCheckboxChange = (idServico: number) => {
    setServicosSelecionados((prevSelecionados) => ({
      ...prevSelecionados,
      [idServico]: !prevSelecionados[idServico],
    }));
  };

  const [servicos, setservicos] = useState<Servico[]>([])

  const pesquisaservico = () => {
    axios.get<Servico[]>("http://localhost:5000/pesquisaservico")
      .then((response) => {
        console.log(response.data)
        setservicos(response.data)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log("rodandoo")
    pesquisaservico()
  }, []);

  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setprofissional({ ...profissional, [name]: value });
  };

  //esse e da checkbox

  //   const servicosSelecionadosArray = Object.keys(servicosSelecionados).filter(
  //   (servico: keyof typeof servicosSelecionados) => servicosSelecionados[servico]
  // );

  //  console.log('Serviços selecionados:', servicosSelecionadosArray);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Frontend - tentando cadastrar");

    try {
      // Cadastra o profissional
      const responseProfissional = await axios.post("http://localhost:5000/cadastroprofissional", profissional);
      const idProfissional = responseProfissional.data.id;
      console.log("ID do profissional cadastrado:", idProfissional);
  
      // Cadastra os serviços
      for (const servico of servicos) {
        // verifica quais serviços foram selecionados
        

        // Associa o profissional e o serviço na tabela itemservico
        await associarProfissionalServico(idProfissional, servico.idservico);
      }
  
      console.log("Cadastro concluído");
  
    } catch (error) {
      console.error(error);
    }
  };
  
  const associarProfissionalServico = async (idProfissional: number, idServico: number) => {
    try {
      const response = await axios.post("http://localhost:5000/associarprofissionalservico", {
        idProfissional,
        idServico,
      });
  
      console.log("Associação concluída:", response.data);
  
    } catch (error) {
      console.error("Erro ao associar profissional e serviço:", error);
    }


    //axios
    //  .post("http://localhost:5000/cadastroprofissional", profissional)
    //  .then((response) => {
    //    console.log("ID do profissional cadastrado:", response.data.id);
    //  })
    //  .catch((error) => {
    //    console.error(error);
    //  });
    //console.log("passou pelo axios");
//
    //axios
    //.post("http://localhost:5000/pesquisaservico", servicos)
    //.then((response) =>{
    //  console.log("ID do servico cadastrado:", response.data.idservico)
    //})
    //.catch((error) => {
    //  console.log("mandou o id servico");
    //})  
  };
//


  const manipuladorsubmitservico = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Frontend - tentando cadastrar o servico");

    //USAR A MAP, criar checklist em javascript com map, caso nao a MAP nao conseguir fazer isso sozinha usar um forEach
    //pegar informação do banco de dados
  };

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
            Cadastro
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  inputProps={{ maxLength: 40 }}
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
                  inputProps={{ maxLength: 11 }}
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
                  inputProps={{ maxLength: 11 }}
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
                  inputProps={{ maxLength: 2 }}
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
                  inputProps={{ maxLength: 50 }}
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
                  inputProps={{ maxLength: 50 }}
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
                  inputProps={{ maxLength: 25 }}
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
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" textAlign={"center"}>
                  Serviço Prestado
                </Typography>
              </Grid>
              <br></br>
            {servicos.map(item => {
              return (
                <>
                  <Grid item xs={6} sm={4} md={4}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary"   checked={servicosSelecionados[item.idservico] || false}
                onChange={() => handleCheckboxChange(item.idservico)} />}
                label={item.nomeservico}
              />
            </Grid>
                </>
              )
            })}
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
              INSCREVER-SE <PersonAddIcon />
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
