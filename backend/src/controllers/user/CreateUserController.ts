import {Request, response, Response} from 'express'
import { CreateUserService } from "../../services/user/CreateUserService.1";

class CreateUserController{

    async handle(req: Request,res:Response){
        const { nome,cpf,email,senha} = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({nome,cpf,email,senha});

        console.log(req.body)
     return res.json({ok:true})   
    }
}
export{CreateUserController}