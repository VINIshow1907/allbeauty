//import {Request, response, Response} from 'express'
//import { CreateUserService } from "../../services/user/CreateUserService.js";
//
//class CreateUserController{
//
//    async handle(req: Request,res:Response){
//        const { nome,cpf,telefone,email,senha,cidade,estado} = req.body;
//
//        const createUserService = new CreateUserService();
//        const user = await createUserService.execute({nome,cpf,email,telefone,senha,cidade,estado});
//
//        console.log(req.body)
//     return res.json({ok:true})   
//    }
//}
//export{CreateUserController}