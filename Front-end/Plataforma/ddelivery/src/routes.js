import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Orders from "./orders";
import Objetos from "./objetos";
import Equipe from "./equipe";
import Novaordem from "./novaOrdem";
import Novoobjeto from "./novoObjeto";
import Login from "./login";

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ordens' element={<Orders/>} />
            <Route path='/objetos' element={<Objetos/>} />
            <Route path='/equipe' element={<Equipe/>} />
            <Route path='/novaordem' element={<Novaordem/>} />
            <Route path='/novoobjeto' element={<Novoobjeto/>} />
            <Route path='/login' element={<Login/>} />

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;