import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import EditarProfissional from "../paginas/editarprofissional";

export default function ProMenuSuperior() {
  const navigate = useNavigate();
  const editarprofissional = () => {
    navigate("/editarprofissional");
  }
  const paginahomeprofissional = () => {
    navigate("/homeprofissional");
  };
  const excluirprofissional = () => {
    navigate("/excluirprofissional");
  };
  const homeprofissional = () => {
    navigate("/homeprofissional");
  }
  const paginaLogin = () => {
    navigate("/login");
  };
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    // Navegue para a página "home" quando o ícone Home for clicado
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
      </FormGroup>
      <AppBar position="static">
        <Toolbar sx={{background: "linear-gradient(90deg, rgba(154,0,255,1) 0%, rgba(227,0,39,1) 48%, rgba(249,137,0,1) 100%);" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleHomeClick}
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display:"flex", justifyContent:"center", }}>
            ALLBEAUTY
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
