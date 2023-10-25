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
