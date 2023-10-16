import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';



export class CreateUserService {
    async execute({ nome, cpf, email, senha }: UserRequest) {

        //verificar se foi enviado o valor do e-mail
        if (!email) {
            throw new Error("E-mail não enviado");
        }

        //verifica se o email já foi cadastrado 
        const UserAlreadyExists = await prismaClient.profissional.findFirst({
            where: {
                email: email
            }
        });
        if (UserAlreadyExists) {
            throw new Error("E-mail já cadastrado!");
        }

        //criptografando a senha
        const senhaHash = await hash(senha, 8);

        //cadastro no banco de dados 
        const user = await prismaClient.profissional.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senhaHash,
            },
            select: {
                nome: true,
                cpf: true,
                email: true,
            }
        });
        return user;


    }

}
