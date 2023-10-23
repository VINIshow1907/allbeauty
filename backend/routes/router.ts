import {Router} from "express";
// import { CreateUserController } from "../src/controllers/user/CreateUserController.js";
// import { AuthUserController } from "../src/controllers/user/AuthUserController.js";
//import { isAuthenticated } from "../src/middleware/isAuthenticated";
import { DetailUserController } from "../src/controllers/user/DetailUserController.js";
import { cadastroProfissional } from "../src/controllers/profissionalController.js";

const router = Router();

// ROTAS PARA USER//
// router.post('/user', new CreateUserController().handle)
// router.post('/session', new AuthUserController().handle)
router.post('/cadastroprofissional', cadastroProfissional)
//router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

export{router};