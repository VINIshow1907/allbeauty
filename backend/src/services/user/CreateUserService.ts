//import { PrismaClient } from '@prisma/client';
//import { hash } from 'bcryptjs';
//
//const prismaClient = new PrismaClient();
//
//interface UserRequest{
//    nome: string,
//    cpf: string,
//    telefone: string,
//    email: string,
//    senha: string,
//    cidade: string,
//    estado: string,
//}
//export class CreateUserService {
//    async execute({ nome, cpf, telefone, email, senha, cidade, estado }: UserRequest) {
//
//        //verificar se foi enviado o valor do e-mail
//        if (!email) {
//            throw new Error("E-mail não enviado");
//        }
//
//        //verifica se o email já foi cadastrado 
//        const UserAlreadyExists = await prismaClient.profissional.findFirst({
//            where: {
//                emailprofissional: email
//            }
//        });
//        if (UserAlreadyExists) {
//            throw new Error("E-mail já cadastrado!");
//        }
//
//        //criptografando a senha
//        const senhaHash = await hash(senha, 8);
//
//        //cadastro no banco de dados 
//        
//        
//        const user = await prismaClient.profissional.create({
//           data: {
//                nomeprofissional: nome,
//                cpfprofissional: cpf,
//                emailprofissional: email,
//                telefoneprofissional: telefone,
//                senhaprofissional: senha,
//                cidadeprofissional: cidade,
//                estadoprofissional: estado,
//            },
//            select: {
//                nomeprofissional: true,
//                cpfprofissional: true,
//                emailprofissional: true,
//                cidadeprofissional: true,
//                estadoprofissional: true,
//            }
//        });
//        return user;
// 
//
//    
//}
//const token = sign(
  //  {
    //    nome:user.name,
      //  usuario: user.email
   // },
   // process.env.JWT_SECRET,
   // {
     //   subject: user.id,
        
  //  }
// )    

//}
