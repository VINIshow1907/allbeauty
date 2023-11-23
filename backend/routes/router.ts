import {Router} from "express";
// import { CreateUserController } from "../src/controllers/user/CreateUserController.js";
// import { AuthUserController } from "../src/controllers/user/AuthUserController.js";
//import { isAuthenticated } from "../src/middleware/isAuthenticated";
//import { DetailUserController } from "../src/controllers/user/DetailUserController.js";
import { associarProfissionalServico, cadastroProfissional, editarProfissional, visualizarprofissional, deletarprofissional, buscaprofissional } from "../src/controllers/profissionalController.js";
import { pesquisaServico } from "../src/controllers/servicoController.js";

const router = Router();

router.post('/cadastroprofissional', cadastroProfissional)
router.get('/pesquisaservico', pesquisaServico)
router.post('/associarprofissionalservico', associarProfissionalServico)
router.get('/visualizarprofissional/:id', visualizarprofissional)
router.delete('/deletarprofissional/:id', deletarprofissional)
router.get('/buscaprofissional', buscaprofissional)
router.put('/editarprofissional/:id', editarProfissional)
router.get('/teste', () => {
    console.log("Servidor recebeu req GET")
})

export{router};