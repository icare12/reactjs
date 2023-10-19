import React from "react";
import Loguearse from "../Paginas/Loguearse";
import Registro from "../Paginas/Registro";
import Home from "../Paginas/Home";
import { Routes, Route } from 'react-router-dom';

function Rutas() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Loguearse" element={<Loguearse />} />
            <Route path="/Registro" element={<Registro />} />
        </Routes>
    );
}

export default Rutas;