import { PrismaClient } from '@prisma/client'
import { Request, Response,NextFunction, request, response } from 'express'
import prismaClient from '../prisma';

const prisma = new PrismaClient();

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
    const { nome, cpf, telefone, email, senha, cidade, estado, descricao } = req.body
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
                estadoprofissional: estado,
                descricaoprofissional: descricao
            },
        })
        console.log('cadastrado')
        res.status(201).json(profissional)
    } catch (error) {
        console.log('deu erro no prisma')
        res.status(500).json({error})
    }
}  
export const associarProfissionalServico = async (req:Request, res:Response) => {
    const {idprofissional, idservico} = req.body

    try {
         // Verificar se o profissional existe
         const profissionalExistente = await prisma.profissional.findUnique({
            where: { idprofissional: Number(idprofissional) }
        });

        if (!profissionalExistente) {
            return res.status(404).json({ msg: 'Profissional não encontrado.' });
        }

         // Verificar se o serviço existe
         const servicoExistente = await prisma.servico.findUnique({
            where: { idservico: Number(idservico) }
        });

        if (!servicoExistente) {
            return res.status(404).json({ msg: 'Serviço não encontrado.' });
        }
        
        const itemservico = await prisma.itemservico.create({
            data: {
                profissional: {
                    connect:{ idprofissional: Number(idprofissional)}
                },
                servico: {
                    connect: { idservico: Number(idservico) }
                }
                
            },
        })
        res.status(200).json(itemservico)
    } catch(error){
        if(error instanceof Error){
            res.status(500).json({msg:error.message})
        } else {
            res.status(500).json({ msg: 'Erro desconhecido ao criar itemservico.' });
        }
    }
}

export const perfilprofissional = async (req: Request, res:Response) => {
    try {
        const response = await prisma.profissional.findUnique({
            where: {
                idprofissional: Number(req.params.id)

            },
        })
        res.status(200).json(response)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({msg:error.message})
        }
    }
    }


export const visualizarprofissional = async (req: Request, res:Response) => {
    try {
        const response = await prisma.profissional.findUnique({
            where: {
                idprofissional: Number(req.params.id)

            },
        })
        res.status(200).json(response)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({msg:error.message})
        }
    }
    }

    export const buscaprofissional = async (req: Request, res:Response) => {
         const {cidade, estado} = req.query
      try {
        console.log('Parâmetros da consulta:', cidade, estado);
        if (!cidade || !estado) {
            return res.status(400).json({ msg: 'Os parâmetros cidade e estado são obrigatórios.' });
          }
          
            const response = await prisma.profissional.findMany({
                where: {
                    estadoprofissional:  String(estado),
                    cidadeprofissional:  String(cidade)
                },
            })
            res.status(200).json(response)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).json({msg:error.message})
            }
        }
       }

    export const deletarprofissional = async (req: Request, res:Response) => {
        try {
            const response = await prisma.profissional.delete({
                where: {
                    idprofissional: Number(req.params.id)
    
                },
            })
            res.status(200).json(response)
        } catch (error) {
            if(error instanceof Error){
                res.status(500).json({msg:error.message})
            }
        }
        }

    export const getProfissionalById = async (req = request, res = response) => {
             try {
                 const response = await prisma.profissional.findUnique({
                     where: {
                         idprofissional: Number(req.params.id),
                     },
                 })
                 res.status(200).json(response)
             } catch (error) {
                if (error instanceof Error){
                 res.status(404).json({ msg: error.message })      
                }
         }
        }


export const editarProfissional = async (req = request, res = response) => {
    const{nome, estado,
         cidade,cpf,
          telefone, email,
           senha, descricao} = req.body
    try {
        const profissional = await prisma.profissional.update({
            where: {
                idprofissional: Number(req.params.id),    
            },
            data: {
                nomeprofissional: nome,
                estadoprofissional: estado,
                cidadeprofissional:cidade,
                cpfprofissional:cpf,
                telefoneprofissional:telefone,
                emailprofissional: email,
                senhaprofissional: senha,
                descricaoprofissional:descricao
            },
        })
        res.status(200).json(profissional)
    } catch(error) {
        if (error instanceof Error){      
            res.status(500).json({ msg: error.message})
           }
    }
}
//        class listarservico
//        async execute() {
//        const servico = await prismaClient.servico.findMany({
//            select: {
//                idservico: true,
//                nomeservico: true
//            }
//        })
//        return servico;
//    }
//
//function execute() {
//    throw new Error('Function not implemented.');
//}
///////////////
//const express = require('express');
//const app = express();
//const port = 5000;
//const pgp = require('pg-promise')();
//const db = pgp('postgresql://postgres:1234@localhost:5432/allbeauty');
//
//
//app.use(express.json());
//
//app.post('/cadastroprofissional', (req: { body: { nome: any; cpf: any; telefone: any; email: any; senha: any; cidade: any; estado: any; servicosSelecionados: any } }, res: any) => {
//    const { nome, cpf, telefone, email, senha, cidade, estado, servicosSelecionados } = req.body;
//    
//    db.tx(async (t: any) => {
//        const profissional = await t.one('INSERT INTO profissional(nome, cpf, telefone, email, cidade, estado) VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
//      [nome, cpf, telefone, email, cidade, estado]);
//
//        // Crie entradas na tabela "itemservico" para serviços selecionados
//    for (const service in servicosSelecionados) {
//        if (servicosSelecionados[service]) {
//          await t.none('INSERT INTO itemservico(profissional_id, servico) VALUES($1, $2)',
//            [profissional.id, service]);
//        }
//      }
//
//      res.json({ message: 'Profissional cadastrado com sucesso', profissionalId: profissional.id });
//    })
//      .catch((error: any) => {
//        console.error(error);
//        res.status(500).json({ message: 'Erro ao cadastrar profissional' });
//      });
//  });
//  
//  app.listen(port, () => {
//    console.log(`O servidor está rodando na porta  ${port}`);
//  });
//
//

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
// 
