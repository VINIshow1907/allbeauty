import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import Cadastro from "./paginas/cadastro";
import Login from "./paginas/login";
//import EditarProfissional from "./paginas/editarprofissional";
import HomeProfissional from "./paginas/homeprofissional";
import EsqueceuSenha from "./paginas/esqueceusenha";
import EditarProfissional from "./paginas/editarprofissional";
export default function Rotas(){
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/editarprofissional" element={<EditarProfissional />} />
                <Route path="/homeprofissional" element={<HomeProfissional />} />
                <Route path="/esqueceusenha" element={<EsqueceuSenha/>} />
                <Route path="/homeprofissional/:id" element={<HomeProfissional />} />
            </Routes>

            </BrowserRouter>

        </div>
    )
}
