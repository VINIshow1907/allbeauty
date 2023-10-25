////import { compare } from "bcryptjs";
//import prismaClient  from "../../prisma/index.js";
//import {sign} from 'jsonwebtoken'
//import { Prisma } from "@prisma/client";
//
//
//interface AuthRequest{
//    email: string;
//    senha: string;
//}
//
//class AuthUserService{
//    async execute({email,senha}:AuthRequest){
//        //verifica se o e-mail está cadastrado
//        const user = await prismaClient.profissional.findFirst({
//            where:{
//                emailprofissional: email
//
//            }
//        })
//        if(!user)
//        {
//            throw new Error("Usuário ou senha incorretos!");
//        }
////const senhaMatch = senha && user.senhaprofissional ? await compare(senha, user.senhaprofissional) : false;
//
////if (!senhaMatch) {
////    throw new Error("Usuário ou senha incorretos");
//// }
//
//        console.log(email);
//
//        return{
//         // id: user.idProfissional,
//            nome: user.nomeprofissional,
//            email: user.emailprofissional,
//            cpf:user.cpfprofissional,
//            senha:user.senhaprofissional
//        }
//    }
//}
//
//export {AuthUserService}