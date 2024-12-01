import React from 'react';
import livros from '../assets/img/livros.png';
import slider1 from '../assets/img/slider1.png';
import slider2 from '../assets/img/slider2.png';
import slider3 from '../assets/img/slider3.png'
import slider4 from '../assets/img/slider4.png';

const Home = () => {
  return (
    <main>
      <div className="section1">
        <div className="welcome">
          <h1 className="welcome-text"><span>Facilitei</span>: Organize seus Estudos, Alcance suas Metas!</h1>
          <button className="btn">Começar agora</button>
        </div>
        <img src={livros} width="300px" alt="personagem em cima dos livros" />
      </div>
      <section className="slider">
        <div className="seta arrow-left"><i className="fas fa-chevron-circle-left"></i></div>

        <img src={slider1} alt="slider 1" />
        <img src={slider2} alt="slider 2" />
        <img src={slider3} alt="slider 3" />
        <img src={slider4} alt="slider 4" />

        <div className="seta arrow-right"><i className="fas fa-chevron-circle-right"></i></div>

        <div className="paginacao">
          <div className="botao"> <i className="far fa-dot-circle"></i> </div>
          <div className="botao"> <i className="far fa-circle"></i> </div>
          <div className="botao"> <i className="far fa-circle"></i> </div>
          <div className="botao"> <i className="far fa-circle"></i> </div>
        </div>
      </section>
    </main>
  );
};

export default Home;