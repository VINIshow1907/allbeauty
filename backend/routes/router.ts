import {Router} from "express";
// import { CreateUserController } from "../src/controllers/user/CreateUserController.js";
// import { AuthUserController } from "../src/controllers/user/AuthUserController.js";
//import { isAuthenticated } from "../src/middleware/isAuthenticated";
//import { DetailUserController } from "../src/controllers/user/DetailUserController.js";
import { cadastroProfissional,  } from "../src/controllers/profissionalController.js";
import { pesquisaServico } from "../src/controllers/servicoController.js";

const router = Router();

router.post('/cadastroprofissional', cadastroProfissional)
router.get('/pesquisaservico', pesquisaServico)
router.get('')
router.get('/teste', () => {
    console.log("Servidor recebeu req GET")
})

export{router};