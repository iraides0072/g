import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
//import { bgWhite, bgGray, textPrimary, textSecondary } from "tailwindcss/default";

const Sobre = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch("https://example.com/images/sobre.jpg")
      .then((response) => response.blob())
      .then((blob) => setImage(blob));

    fetch("https://example.com/videos/sobre.mp4")
      .then((response) => response.blob())
      .then((blob) => setVideo(blob));
  }, []);

  return (
    <div className="bg-white">
      <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto flex justify-between">
          <a href="/" class="text-primary font-bold py-2 px-4">
            Golden Pet
          </a>
          <nav class="flex items-center">
            <Link to="/" class="text-secondary py-2 px-4">
              Home
            </Link>
            <Link to="/produtos" class="text-secondary py-2 px-4">
              Produtos
            </Link>
            <Link to="/servicos" class="text-secondary py-2 px-4">
              Servicos
            </Link>
            <Link to="/contato" class="text-secondary py-2 px-4">
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <div class="container mx-auto">
          <h1>Sobre Golden Pet</h1>
          <p>
            Golden Pet is a company that specializes in pet products and services. We are committed to providing our customers with the best possible products and services so that they can provide the best possible care for their pets.
          </p>
          <p>
            We offer a wide variety of products, including food, toys, beds, grooming supplies, and more. We also offer a variety of services, including grooming, pet sitting, dog walking, and more.
          </p>
          <p>
            We are always looking for new ways to improve the lives of pets. We believe that all pets deserve a happy and healthy life, and we are here to help them achieve that.
          </p>
          <div class="image">
            <img src={image} alt="Golden Pet" />
          </div>
          <div class="video">
            <video src={video} controls muted />
          </div>
        </div>
      </main>
      <footer class="bg-white border-t border-gray-200">
        <div class="container mx-auto flex justify-between">
          <p>Copyright &copy; 2023 Golden Pet</p>
          <a href="/contato" class="text-secondary py-2 px-4">Contate nos</a>
        </div>
      </footer>
    </div>
  );
};

export default Sobre;