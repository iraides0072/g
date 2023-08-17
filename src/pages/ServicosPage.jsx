
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { bgWhite, bgGray, textPrimary, textSecondary } from "tailwindcss/default";

const ServicosPage = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch("https://example.com/images/servicos.jpg")
      .then((response) => response.blob())
      .then((blob) => setImage(blob));

    fetch("https://example.com/videos/servicos.mp4")
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
          <h1>Serviços</h1>
          <p>
            We offer a wide variety of services for your pets, including:
          </p>
          <ul>
            <li>Grooming</li>
            <li>Pet sitting</li>
            <li>Dog walking</li>
            <li>Pet taxi</li>
            <li>Pet training</li>
            <li>Pet boarding</li>
          </ul>
          <p>
            We are committed to providing our customers with the best possible care for their pets. We believe that all pets deserve a happy and healthy life, and we are here to help them achieve that.
          </p>
          <div class="carousel bg-cover bg-center flex justify-between items-center h-100vh">
            <img src={image} alt="Golden Pet" />
            <img src={video} controls muted />
          </div>
        </div>
      </main>
      <footer class="bg-white border-t border-gray-200">
        <div class="container mx-auto flex justify-between">
          <p>Copyright &copy; 2023 Golden Pet</p>
          <a href="/contato" class="text-secondary py-2 px-4">Contate-nos</a>
        </div>
      </footer>
    </div>
  );
};

export default ServicosPage;