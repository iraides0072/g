import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";

const HomePage = () => {

 const [image, setImage] = useState(null);
const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch("https://example.com/images/home.jpg")
      .then((response) => response.blob())
      .then((blob) => setImage(blob));

    fetch("https://example.com/videos/home.mp4")
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
              Serviços
            </Link>
            <Link to="/contato" class="text-secondary py-2 px-4">
              Contato
            </Link>
            <Link to="/sobre" class="text-secondary py-2 px-4">
              Sobre
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <div class="container mx-auto">
          <h1>Golden Pet</h1>
          <p>
            Golden Pet is a company that specializes in pet products and services. We are committed to providing our customers with the best possible products and services so that they can provide the best possible care for their pets.
          </p>
          <p>
            We offer a wide variety of products, including food, toys, beds, grooming supplies, and more. We also offer a variety of services, including grooming, pet sitting, dog walking, and more.
          </p>
          <p>
            We are always looking for new ways to improve the lives of pets. We believe that all pets deserve a happy and healthy life, and we are here to help them achieve that.
          </p>
          <div class="carousel bg-cover bg-center flex justify-between items-center h-100vh">
            <img src={image} alt="Golden Pet" />
            {video && <video src={URL.createObjectURL(video)} controls muted />}
          </div>
        </div>
      </main>
      <footer class="bg-white border-t border-gray-200">
        <div class="container mx-auto flex justify-between">
          <p>Copyright &copy; 2023 Golden Pet</p>
          <a href="/contact" class="text-secondary py-2 px-4">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;