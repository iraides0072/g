import React from "react";
import Carousel from "./Carousel";

const slides = [
  {
    title: "Slide 1",
    description: "Descrição do Slide 1",
    image: "https://example.com/slides/slide1.jpg",
  },
  {
    title: "Slide 2",
    description: "Descrição do Slide 2",
    image: "https://example.com/slides/slide2.jpg",
  },
  // ... outros slides ...
];

const CarouselPage = () => {
  return (
    <div className="carousel-page">
      <h1>Carrossel de Slides</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default CarouselPage;