import { compare } from "bcryptjs";
import prismaClient  from "../../prisma";
import {sign} from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    senha: string;
}

class AuthUserService{
    async execute({email,senha}:AuthRequest){
        //verifica se o e-mail está cadastrado
        const user = await prismaClient.profissional.findFirst({
            where:{
                email: email
            }
        })
        if(!user)
        {
            throw new Error("Usuário ou senha incorretos!");
        }
const senhaMatch = await compare(senha, user.senha);

if(!senhaMatch)
{
    throw new Error("Usuário ou senha incorretos");
}
        console.log(email);

        return{ok:true}
    }
}
export {AuthUserService}