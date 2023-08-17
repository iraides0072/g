import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sobre = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Carrega a imagem quando o componente é renderizado pela primeira vez.
    fetch("https://example.com/images/sobre.jpg")
      .then((response) => response.blob())
      .then((blob) => setImage(blob));

    // Carrega o vídeo quando o componente é renderizado pela primeira vez.
    fetch("https://example.com/videos/sobre.mp4")
      .then((response) => response.blob())
      .then((blob) => setVideo(blob));
  }, []);

  return (
    <div className="bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between">
          <a href="/" className="text-primary font-bold py-2 px-4">
            Golden Pet
          </a>
          <nav className="flex items-center">
            <NavLink to="/" className="text-secondary py-2 px-4">
              Home
            </NavLink>
            <NavLink to="/produtos" className="text-secondary py-2 px-4">
              Produtos
            </NavLink>
            <NavLink to="/servicos" className="text-secondary py-2 px-4">
              Servicos
            </NavLink>
            <NavLink to="/contato" className="text-secondary py-2 px-4">
              Contato
            </NavLink>
            <NavLink to="/sobre">
              <Sobre />
            </NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="container mx-auto">
          <h1>Sobre Golden Pet</h1>
          {/* Conteúdo sobre o Golden Pet */}
          <div className="image">
            {image && (
              <img src={URL.createObjectURL(image)} alt="Golden Pet" />
            )}
          </div>
          <div className="video">
            {video && (
              <video src={URL.createObjectURL(video)} controls muted />
            )}
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between">
          <p>Copyright &copy; 2023 Golden Pet</p>
          <a href="/contato" className="text-secondary py-2 px-4">
            Contate-nos
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Sobre;