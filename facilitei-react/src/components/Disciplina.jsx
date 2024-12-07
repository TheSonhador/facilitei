import React from "react";
import "../disciplinas.css";

// NAO TA SENDO USADO ESSE COMPONENT

const Disciplina = ({disciplina, link}) => {
  return (
    <div className="content-row">
      <a href="/disciplinas/geometria-plana">
        <p className="disciplina">{disciplina}</p>
      </a>
      <div className="video">
        <a href={link}>
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Disciplina;
