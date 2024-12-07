import React, { useState, useEffect } from "react";
import livros from "../assets/img/livros.png";
import slider1 from "../assets/img/slider1.png";
import slider2 from "../assets/img/slider2.png";
import slider3 from "../assets/img/slider3.png";
import slider4 from "../assets/img/slider4.png";

const slides = [slider1, slider2, slider3, slider4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Controle do slide atual
  const time = 5000; // Tempo padrão para apresentação de slides automática

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, time);
    return () => clearInterval(interval); // Limpeza do intervalo
  }, []);

  return (
    <main>
      <div className="section1">
        <div className="welcome">
          <h1 className="welcome-text">
            <span>Facilitei</span>: Organize seus Estudos, Alcance suas Metas!
          </h1>
          <button className="btn">Começar agora</button>
        </div>
        <img src={livros} width="300px" alt="personagem em cima dos livros" />
      </div>
      <section className="slider">
        <div className="seta arrow-left" onClick={handlePrevSlide}>
          <i className="fas fa-chevron-circle-left"></i>
        </div>

        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slider ${index + 1}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}

        <div className="seta arrow-right" onClick={handleNextSlide}>
          <i className="fas fa-chevron-circle-right"></i>
        </div>

        <div className="paginacao">
          {slides.map((_, index) => (
            <div
              key={index}
              className="botao"
              onClick={() => handleDotClick(index)}
            >
              <i
                className={`far ${
                  currentIndex === index ? "fa-dot-circle" : "fa-circle"
                }`}
              ></i>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
