
import { Link } from "react-router-dom";

const ContatoPage = () => {
  // Declara as variáveis `imageUrl` e `videoUrl` como vazias.
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  
  // Carrega as imagens e o vídeo quando o componente é renderizado pela primeira vez.
  useEffect(() => {
    fetch("https://example.com/images/contato.jpg")
      .then((response) => response.blob())
      .then((blob) => {
        setImageUrl(blob);
      });

    fetch("https://example.com/videos/contato.mp4")
      .then((response) => response.blob())
      .then((blob) => {
        setVideoUrl(blob);
      });
  }, []);

  // Retorna o componente HTML para a página.
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
          </nav>
        </div>
      </header>
      <main>
        <div class="container mx-auto">
          <h1>Contato</h1>
          <p>
            We are always happy to hear from our customers. Please feel free to contact us with any questions or concerns.
          </p>
          <ul>
            <li>
              <strong>Address:</strong>
              123 Main Street, Anytown, CA 12345
            </li>
            <li>
              <strong>Phone:</strong>
              123-456-7890
            </li>
            <li>
              <strong>Email:</strong>
              info@goldenpet.com
            </li>
          </ul>
          <div class="form">
            <form action="/contato" method="post">
              <img src={imageUrl} alt="Golden Pet" />
              <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="message" placeholder="Message" />
              <button type="submit">Send</button>
            </form>
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

export default ContatoPage;