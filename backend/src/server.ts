import express, {Request, Response, NextFunction, Router} from "express"
// import 'express-async-errors'
import cors from 'cors';
import { router } from "../routes/router.js";
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
//middleware para tratamento de erros nas rotas
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        //se o valor recebido for uma instancia do tipo erro
        return res.status(400).json({
            error: err.message

        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
})

app.listen(5000, () => console.log('Servidor ON'));
 