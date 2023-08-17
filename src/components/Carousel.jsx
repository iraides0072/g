import React, { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <ul className="carousel-list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </ul>
      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próximo</button>
      </div>
    </div>
  );
};

export default Carousel;