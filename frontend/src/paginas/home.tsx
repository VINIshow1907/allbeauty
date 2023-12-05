import * as React from "react";
import Box from "@mui/material/Box";
import { autoPlay } from "react-swipeable-views-utils";
import Rodape from "../componentes/rodape/rodape";
import { Route, useNavigate, Navigate } from "react-router-dom";
import Menusuperior from "../componentes/menuhome/menusuperior";
import axios from "axios";
import { useState } from "react";
import { Checkbox, FormControlLabel, Grid, Typography,TextField,Button } from "@mui/material";
import Carrossel from "../componentes/carrosselhome";
import "../estilos/fonte.css"; // Importe o arquivo CSS de estilos
import SearchIcon from '@mui/icons-material/Search';
import Gridinformacoesprofissional from "../componentes/gridinformacoes";

export default function Home() {
  const navigate = useNavigate();

  const paginaCadastro = () => {
    navigate("/Cadastro");
  }; 
  const [profissionais, setprofissionais] = useState ([])

  const buscaprofissional  = () =>{
    axios.get(`http://localhost:5000/buscaprofissional`, {
      params: {
        cidade: profissional.cidade,
        estado: profissional.estado,
      },
    } )
    .then(response => {
      console.log(response.data)
      setprofissionais(response.data)
  })
  .catch(error => {
    console.error(error);
  });
  }
  const [profissional, setprofissional] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    cidade: '',
    estado: '',
    descricao:'',
  });
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setprofissional({ ...profissional, [name]: value });
  };
  return (
    <Box
      sx={{
        maxWidth: 10000,
        flexGrow: 100,
        minHeight: 250,
        textAlign: "center",
      }}
    >
      <Menusuperior />
      <Carrossel />

      <Grid
        container
        justifyContent="center" // centralize o conteudo horizontalmente
        alignItems="center" // centraliza o conteudo verticalmente
        sx={{
          marginTop: 5,
          marginBottom: 5,
          color: "rgba(227,0,39,1)",
          fontFamily: "monospace",
          fontSize: "2em", //Tamanho da fonte padrão
          textAlign: "center",
          "@media (max-width: 768px)": {
            fontSize: "1.5em", // Tamanho de fonte para dispositivos menores
          },
        }}
      >
        <Grid item xs={12}>
          <h2> Escolha o Profissional que mais o agrada</h2>
          <p>
            Selecione o seu estado, a sua cidade e o serviço que procura para
            encontrar os profissionais que melhor atendem às suas necessidades.
          </p>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="uf"
                  label="UF"
                  name="estado"
                  autoComplete="uf"
                  value={profissional.estado}
                  onChange={valueInput}
                  inputProps={{ maxLength: 2}}
                  
                />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
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
              </Grid>
              <br></br>
              <br></br>
    <br></br>
    <Grid>
      <Button
              onClick={buscaprofissional}
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
                padding: "1% 1%", // Use porcentagens para o tamanho do padding
                width: "300px",
              }}
              id="btnPesquisar"
            >
              Pesquisar <SearchIcon />
            </Button>
            </Grid>
            <p></p>
            <Gridinformacoesprofissional profissionais={profissionais} />
    <Rodape />
    </Box>
  );
}
