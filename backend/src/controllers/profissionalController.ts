import { PrismaClient } from '@prisma/client'
import { Request, Response,NextFunction } from 'express'


const prisma = new PrismaClient()

// export const getProducts = async (req, res) => {
//     try {
//         const response = await prisma.product.findMany()
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(500).json({ msg: error.message })
//     }
// }

// export const getProductById = async (req, res) => {
//     try {
//         const response = await prisma.product.findUnique({
//             where: {
//                 id: Number(req.params.id),
//             },
//         })
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(404).json({ msg: error.message })
//     }
// }


export const cadastroProfissional = async (req:Request, res:Response, next: NextFunction) => {
    console.log('Chegou no backend')
    const { nome, cpf, telefone, email, senha, cidade, estado } = req.body

    try {
        console.log('Recebeu os dados e vai tentar cadastrar')
        const profissional = await prisma.profissional.create({
            data: {
                nomeprofissional: nome,
                cpfprofissional: cpf,
                emailprofissional: email,
                telefoneprofissional: telefone,
                senhaprofissional: senha,
                cidadeprofissional: cidade,
                estadoprofissional: estado
            },
        })
        console.log('cadastrado')
        res.status(201).json(profissional)
    } catch (error) {
        console.log('deu erro no prisma')
        res.status(500).json({error})
    }
}
const express = require('express');
const app = express();
const port = 5000;
const pgp = require('pg-promise')();
const db = pgp('postgresql://postgres:1234@localhost:5432/allbeauty');


app.use(express.json());

app.post('/cadastroprofissional', (req: { body: { nome: any; cpf: any; telefone: any; email: any; senha: any; cidade: any; estado: any; servicosSelecionados: any } }, res: any) => {
    const { nome, cpf, telefone, email, senha, cidade, estado, servicosSelecionados } = req.body;
    
    db.tx(async (t: any) => {
        const profissional = await t.one('INSERT INTO profissionais(nome, cpf, telefone, email, cidade, estado) VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      [nome, cpf, telefone, email, cidade, estado]);

        // Crie entradas na tabela "itemservico" para serviços selecionados
    for (const service in servicosSelecionados) {
        if (servicosSelecionados[service]) {
          await t.none('INSERT INTO itemservico(profissional_id, servico) VALUES($1, $2)',
            [profissional.id, service]);
        }
      }

      res.json({ message: 'Profissional cadastrado com sucesso', profissionalId: profissional.id });
    })
      .catch((error: any) => {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar profissional' });
      });
  });
  
  app.listen(port, () => {
    console.log(`O servidor está rodando na porta  ${port}`);
  });



// export const updateProduct = async (req, res) => {
//     const { name, price } = req.body
//     try {
//         const product = await prisma.product.update({
//             where: {
//                 id: Number(req.params.id),
//             },
//             data: {
//                 name: name,
//                 price: price,
//             },
//         })
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(400).json({ msg: error.message })
//     }
// }

// export const deleteProduct = async (req, res) => {
//     try {
//         const product = await prisma.product.delete({
//             where: {
//                 id: Number(req.params.id),
//             },
//         })
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(400).json({ msg: error.message })
//     }
// }