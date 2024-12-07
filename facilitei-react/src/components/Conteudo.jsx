import React from "react";
import "../disciplinas.css";
import StudyTimer from "./StudyTimer";

const Conteudo = ({conteudo, descricao, link}) => {
  return (
    <>
      <div className="subjects-header conteudo-header">
        <h1 className="subjects-title">{conteudo}</h1>
        <StudyTimer />
      </div>
      <h3 className="description">{descricao}</h3>
      <div className="videobox">
        <iframe
          width="560"
          height="315"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Conteudo;
