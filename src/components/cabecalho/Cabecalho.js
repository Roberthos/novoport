import React from "react";
import "./Cabecalho.css";

const Cabecalho = () => {
  return (
    <section className="nav_back">
      <ul className="lista_nav1">
        <img
          src="https://icongr.am/clarity/resistor.svg?size=128&color=d3d3d3"
          alt=""
        />
      </ul>
      <ul className="lista_nav">
        <li>
          <a href="#">Experiência</a>
        </li>
        <li>
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </section>
  );
};

export default Cabecalho;
