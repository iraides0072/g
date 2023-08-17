
import { Link } from "react-router-dom";
import { textPrimary, textSecondary } from "tailwindcss/default";

const Navbar = ({ onNavbarClick }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between">
        <a href="/" className={`font-bold py-2 px-4 ${textPrimary}`}>
          Golden Pet
        </a>
        <nav className="flex items-center">
          <Link
            to="/"
            onClick={() => onNavbarClick("Home")}
            className={`py-2 px-4 ${textSecondary}`}
            activeClassName="font-bold"
          >
            Home
          </Link>
          <Link
            to="/produtos"
            onClick={() => onNavbarClick("Produtos")}
            className={`py-2 px-4 ${textSecondary}`}
            activeClassName="font-bold"
          >
            Produtos
          </Link>
          <Link
            to="/servicos"
            onClick={() => onNavbarClick("Servicos")}
            className={`py-2 px-4 ${textSecondary}`}
            activeClassName="font-bold"
          >
            Serviços
          </Link>
          <Link
            to="/contato"
            onClick={() => onNavbarClick("Contato")}
            className={`py-2 px-4 ${textSecondary}`}
            activeClassName="font-bold"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
