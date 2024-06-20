import "./App.css";
import React from "react";

import Cabecalho from "./components/cabecalho/Cabecalho";
import Corpo from "./components/corpo/Corpo";
import Experiencia from "./components/experiencia/Experiencia";
import Projetos from "./components/projetos/Projetos";
import Contato from "./components/contato/Contato";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
    <div className="pai">
      <Cabecalho />
      <Corpo />
      <Experiencia />
      <Projetos />
      <Contato />
      <Rodape />
    </div>
  );
};
export default App;
