import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'


const prisma = new PrismaClient()

export const pesquisaServico = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Chegou no backend servico')
    try {
        const servico = await prisma.servico.findMany({

            //caso for selecionar um campo somente
            //  where: {
            //  id:
            // },

            select: {
                idservico: true,
                nomeservico: true,
            }

        })
        res.status(200).json(servico)
    } catch (error) {
        console.log('deu erro no prisma')
        res.status(500).json({error})
    }
}




//////////////
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
