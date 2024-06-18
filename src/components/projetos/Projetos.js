import React, { useState } from "react";
import "./Projetos.css";

const Projetos = () => {
  const [showi, setShowi] = useState(true);
  console.log("oi");
  const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((element) => myObserver.observe(element));
  const onclick = () => {
    setShowi(!showi);
  };
  return (
    <section className="body_projetos">
      <button onClick={onclick} className="btn_success">
        Botão
      </button>
      <section className="hidden">
        <h2>Seja bem vindo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          sed nobis, praesentium qui, iusto esse necessitatibus mollitia quaerat
          modi exercitationem reprehenderit fugit. Molestias alias non,
          exercitationem hic minus earum!
        </p>
      </section>

      <section className="hidden">
        <h2>Meu site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          sed nobis, praesentium qui, iusto esse necessitatibus mollitia quaerat
          modi exercitationem reprehenderit fugit. Molestias alias non,
          exercitationem hic minus earum!
        </p>
      </section>

      <section className="hidden">
        <img
          src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
          alt=""
        />
      </section>
    </section>
  );
};

export default Projetos;
