import React from "react";
import "../disciplinas.css";
import Disciplina from "../components/Disciplina";

// NAO TA SENDO USADO ESSE COMPONENT

const Materia = ({materia}) => {
  return (
    <main>
      <div className="container">
        <section className="subjects-section">  
          <div className="subjects-header">
            <h1 className="subjects-title">{materia}</h1>
          </div>
          <Disciplina disciplina="Geometria Plana" link="https://www.youtube.com/embed/k3nn04tnInA?si=LtXLiOIc3JJF4AtU" />
          <Disciplina disciplina="Geometria Espacial" link="https://www.youtube.com/embed/ufA5Vkc2aDM?si=0Lr5LKWg8V5Fur84" />
        </section>
      </div>
    </main>
  );
};

export default Materia;
