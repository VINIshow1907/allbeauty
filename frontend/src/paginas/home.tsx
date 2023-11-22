import * as React from "react";
import Box from "@mui/material/Box";
import { autoPlay } from "react-swipeable-views-utils";
import Rodape from "../componentes/rodape/rodape";
import { Route, useNavigate, Navigate } from "react-router-dom";
import Menusuperior from "../componentes/menuhome/menusuperior";
import axios from "axios";
import { Checkbox, FormControlLabel, Grid, Typography,TextField,Button } from "@mui/material";
import Carrossel from "../componentes/carrosselhome";
import "../estilos/fonte.css"; // Importe o arquivo CSS de estilos
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  const navigate = useNavigate();

  const paginaCadastro = () => {
    navigate("/Cadastro");
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
                  name="uf"
                  autoComplete="uf"
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
                  />
              </Grid>
              </Grid>
              <br></br>
              <br></br>
      <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Serviço Prestado
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="cabeleleiro" id="cabeleleiro" />}
          label="CABELELEIRO"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="depiladora" id="depiladora" />}
          label="DEPILADORA"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="designsobrancelha" id="designsobrancelha" />}
          label="DESIGN SOBRANCELHA"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="manicure" id="manicure" />}
          label="MANICURE"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="maquiador" id="maquiador" />}
          label="MAQUIADOR"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="pedicure" id="pedicure" />}
          label="PEDICURE"
        />
      </Grid>
    </Grid>
    <br></br>
    <Grid>
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
                padding: "1% 1%", // Use porcentagens para o tamanho do padding
                width: "300px",
              }}
              id="btnPesquisar"
            >
              Pesquisar <SearchIcon />
            </Button>
            </Grid>
            <p>AQUI EM BAIXO VAI FICAR OS DADOS DOS PROFISSIONAIS QUE ESTÃO NO BANCO DE DADOS ⬇️⬇️⬇️</p>
    <Rodape />
    </Box>
  );
}
