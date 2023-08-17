import React, { useState, useEffect } from "react";

const Servicos = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch("https://example.com/images/servicos.jpg")
      .then((response) => response.blob())
      .then((blob) => setImage(URL.createObjectURL(blob)));

    fetch("https://example.com/videos/servicos.mp4")
      .then((response) => response.blob())
      .then((blob) => setVideo(URL.createObjectURL(blob)));
  }, []);

  return (
    <div className="bg-white">
      <header className="bg-white border-b border-gray-200">
        {/* ... restante do código */}
      </header>
      <main>
        <div className="container mx-auto">
          {/* ... restante do código */}
          <div className="carousel bg-cover bg-center flex justify-between items-center h-100vh">
            {image && <img src={image} alt="Golden Pet" />}
            {video && (
              <video controls muted className="w-full h-full object-cover">
                <source src={video} type="video/mp4" />
                Seu navegador não suporta o formato de vídeo.
              </video>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        {/* ... restante do código */}
      </footer>
    </div>
  );
};

export default Servicos;
