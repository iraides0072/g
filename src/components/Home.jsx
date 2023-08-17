import React, { useState, useEffect } from "react";  
import { Link } from "react-router-dom";

const Home = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch("https://example.com/images/home.jpg");
      const blob = await response.blob();
      setImage(blob);
    };

    fetchImage();
  }, []);

  return (
    <div className="bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between">
          <a href="/" className="text-primary font-bold py-2 px-4">
            Golden Pet
          </a>
          <nav className="flex items-center">
            <Link to="/" className="text-secondary py-2 px-4">
              Home
            </Link>
            <Link to="/produtos" className="text-secondary py-2 px-4">
              Produtos
            </Link>
            <Link to="/servicos" className="text-secondary py-2 px-4">
              Serviços
            </Link>
            <Link to="/contato" className="text-secondary py-2 px-4">
              Contato
            </Link>
            <Link to="/sobre" className="text-secondary py-2 px-4">
              Sobre
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <div className="container mx-auto">
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
          <div className="carousel bg-cover bg-center flex justify-between items-center h-100vh">
            <img src={image} alt="Golden Pet" />
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between">
          <p>Copyright &copy; 2023 Golden Pet</p>
          <a href="/contact" className="text-secondary py-2 px-4">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;