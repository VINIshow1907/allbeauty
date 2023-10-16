import {Router} from "express";

import { CreateUserController } from "../src/controllers/user/CreateUserController";
import { AuthUserController } from "../src/controllers/AuthUserController";

const router = Router();

// ROTAS PARA USER//
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)


export{router};