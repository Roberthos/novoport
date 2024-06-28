import React from "react";
import "./Experiencia.css";
import { BiLogoPhp } from "react-icons/bi";
const Experiencia = () => {
  return (
    <div className="exp_section">
      <div className="exp_text">
        <h1 className="titulo">Experiência</h1>
        <br />

        <div className="experiencias_prof">
          <h3 className="prof_text">
            Desenvolvedor FullStack e Analista de TI na Câmara Municipal de Ouro
            Preto
          </h3>
          <h4>09/2019 – 09/2021</h4>

          <p>Atividades exercidas:</p>

          <li>Atendimento às dúvidas e solicitações de usuários.</li>

          <li>
            Realização de manutenções corretivas e preventivas de softwares e
            hardwares.
          </li>

          <li>
            Implementação de novas funcionalidades que facilitem o dia a dia dos
            usuários.
          </li>

          <p>
            Juntamente com a equipe de tecnologia, trabalhei no projeto de
            migração do sistema interno para uma versão mais atual.
          </p>

          <h2 className="titulo">Back-end:</h2>
          <li>Manutenção do banco de dados.</li>
          <li>Uso de queries em SQL.</li>
          <li>Otimização do sistema utilizando PHPMyAdmin e MySQL.</li>
          <h2 className="titulo">Front-end:</h2>
          <li>
            Criação e manutenção de componentes utilizando JavaScript e JQuery.
          </li>

          <li>Tratamento de dados para visualização.</li>
        </div>
        <h1 className="titulo">Experiência Educacional</h1>
        <br />
        <div className="experiencias_est">
          <h3>
            Graduando em Engenharia de Controle e Automação Universidade Federal
            de Ouro Preto
          </h3>
          <li>
            Monitoria da disciplina "Informática industrial" tendo como ementa:
            <br />
            Controle seqüencial, controle de sistemas discretos. Controladores
            lógico-programáveis (CLP). Linguagens de programação de CLPs.
            Sistemas SCADA. Sistemas digitais de controle distribuído (SDCD's).
            Controle em batelada. Projeto e uso de remotas. Ferramentas e
            produtividade. Otimização de processos. Projeto de automação
            utilizando CLP's e sistemas supervisórios.
          </li>
          <li>
            Iniciação científica no NTI ( Núcleo de Tecnologia e Informação),
            tendo como função extração de dados relevantes para a página,
            desenvolvimento de recursos úteis para os alunos e a reprodução do
            site do NTI da universidade utilizando DRUPAL, PHP e HTML.
          </li>
          <li>
            Iniciação científica no Departamento de Engenharia de produção em
            conjunto com o Departamento de Engenharia de controle e automação. O
            Objetivo foi a realização de uma pesquisa para fazer um diagnóstico
            preliminar, por meio da literatura e informações disponíveis dos
            hospitais, do nível de automação dos hospitais brasileiros.
          </li>
          <h3>
            Técnico em Administração-SENAI Sete Lagoas CFP Taft Alves Ferreira
          </h3>
          <h4>02/2013-02/2015 </h4>
          <li>
            Tem como objetivo formar profissionais para exercer atividades
            administrativas e coordenar equipes em atividades correlatas, no
            nível operacional, dos setores de produção e serviços, utilizando-se
            de técnicas e tecnologias apropriadas e de padrões éticos, legais,
            de qualidade e segurança, com responsabilidade social e ambiental.
          </li>
        </div>

        <div className="exp_stacks">
          <p>parte 2 da area de xp, colocar as stacks</p>

          <img src="./assets/css_icon.png" alt="" />
          <img src="./assets/php_icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
