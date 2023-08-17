import React, { useState, useEffect } from "react";

const Contato = () => {
  // Declara duas variáveis de estado, `imageUrl` e `setImageUrl`. A variável `imageUrl` armazenará o URL de uma imagem, e a função `setImageUrl` será usada para atualizar o valor da variável de estado `imageUrl`.
  const [imageUrl, setImageUrl] = useState(null);

  // Declara uma variável de estado, `videoUrl`, que armazenará o URL de um vídeo.
  const [videoUrl, setVideoUrl] = useState(null);

  // A função `useEffect` é usada para carregar as imagens e o vídeo quando o componente é renderizado pela primeira vez.
  useEffect(() => {
    // Faz uma solicitação HTTP GET para o URL especificado.
    fetch("https://example.com/images/contato.jpg")
      .then((response) => response.blob())
      .then((blob) => {
        // Atribui o blob à variável de estado `imageUrl`.
        setImageUrl(blob);
      });

    // Faz uma solicitação HTTP GET para o URL especificado.
    fetch("https://example.com/videos/contato.mp4")
      .then((response) => response.blob())
      .then((blob) => {
        // Atribui o blob à variável de estado `videoUrl`.
        setVideoUrl(blob);
      });
  }, []);

  // Renderiza o componente.
  return (
    <div>
      <header>
        <h1>Contato</h1>
      </header>
      <main>
        <div>
          <img src={imageUrl} alt="Golden Pet" />
          <p>
            We are always happy to hear from our customers. Please feel free to contact us with any questions or concerns.
          </p>
          <ul>
            <li>
              <strong>Endereço:</strong>
              123 Main Street, Anytown, CA 12345
            </li>
            <li>
              <strong>Telefone:</strong>
              123-456-7890
            </li>
            <li>
              <strong>Email:</strong>
              info@goldenpet.com
            </li>
          </ul>
          <div>
            <video src={videoUrl} controls />
            <button onClick={() => setVideoUrl("https://example.com/videos/contato.mp4")}>
              Carregar vídeo
            </button>
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright &copy; 2023 Golden Pet</p>
      </footer>
    </div>
  );
};

export default Contato;