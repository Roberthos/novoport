import "./App.css";
import React from "react";

import Cabecalho from "./components/cabecalho/Cabecalho";
import Corpo from "./components/corpo/Corpo";
import Experiencia from "./components/experiencia/Experiencia";
import Projetos from "./components/projetos/Projetos";

const App = () => {
  return (
    <div>
      <Cabecalho />
      <Corpo />
      <Experiencia />
      <Projetos />
    </div>
  );
};
export default App;
