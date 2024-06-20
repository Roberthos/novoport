import React from "react";
import "./Cabecalho.css";
import { LuCode2 } from "react-icons/lu";
const Cabecalho = () => {
  return (
    <header className="nav_back">
      <a href="#" className="lista_nav1">
        <LuCode2 size={60} className="icon" />
      </a>
      <ul className="lista_nav">
        <a href="#">Sobre mim</a>
        <a href="#">Experiência</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </ul>
    </header>
  );
};

export default Cabecalho;
