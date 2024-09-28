import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeradorSenha from '../GeradorSenha/GeradorSenha';
import SideBar from "../../components/SideBar/sideBar";
import PaginaIInicial from "../PaginaInicial/PaginaIInicial";


const Home = () => {
  return (
    <Router>
      <div className="d-flex">
        <SideBar />
        <div className="content" style={{ marginLeft: '500px', flex: '1' }}> {/* Adicione margem à esquerda para dar espaço à sidebar */}
          <Routes>
            <Route path="/" element={<PaginaIInicial />} />
            <Route path="/geradorSenha" element={<GeradorSenha />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default Home;
