import React, { useEffect, useRef, useState } from 'react';

const Slider = () => {
  const imgs = useRef([]);
  const dots = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const time = 5000; // Tempo padrão para apresentação de slides automática
  const autoSlideTimer = useRef(null);

  const defClass = (index) => {
    imgs.current.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
      dots.current[i].classList.toggle('fa-dot-circle', i === index);
      dots.current[i].classList.toggle('fa-circle', i !== index);
    });
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideTimer.current);
    startAutoSlide();
  };

  const handleManualSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex <= 0 ? imgs.current.length - 1 : prevIndex - 1;
      } else {
        return prevIndex >= imgs.current.length - 1 ? 0 : prevIndex + 1;
      }
    });
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideTimer.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= imgs.current.length - 1 ? 0 : prevIndex + 1));
    }, time);
  };

  useEffect(() => {
    defClass(currentIndex);
    startAutoSlide();
    return () => clearInterval(autoSlideTimer.current); // Limpa o timer ao desmontar
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="arrow-left" onClick={() => handleManualSlide('left')}>←</div>
      <div className="arrow-right" onClick={() => handleManualSlide('right')}>→</div>
      {Array.from({ length: 5 }).map((_, index) => (
        <img key={index} ref={(el) => (imgs.current[index] = el)} src={`image${index}.jpg`} alt={`Slide ${index}`} />
      ))}
      <div className="dots">
        {Array.from({ length: 5 }).map((_, index) => (
          <i key={index} ref={(el) => (dots.current[index] = el)} className="fa fa-circle" onClick={() => { setCurrentIndex(index); resetAutoSlide(); }}></i>
        ))}
      </div>
    </div>
  );
};

export default Slider;