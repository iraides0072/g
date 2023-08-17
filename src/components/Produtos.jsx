
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ProductCardWithDetails from "../Components/ProductCardWithDetails";
import Comments from "../Components/Comments";

const Produtos = ({ productId }) => {
  const [produtos, setProdutos] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://example.com/produtos")
      .then((response) => response.json())
      .then((produtos) => setProdutos(produtos))
      .catch((error) => console.error("Erro ao buscar produtos:", error));

    fetch("https://example.com/comments")
      .then((response) => response.json())
      .then((comments) => setComments(comments))
      .catch((error) => console.error("Erro ao buscar comentários:", error));
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
          </nav>
          <Link
            to={`/produtos/${productId.toString()}`}
            activeClassName="text-primary"
          >
            Voltar para a página do produto
          </Link>
        </div>
      </header>
      <main>
        <div className="container mx-auto">
          <h1>Produtos</h1>
          <ul>
            {produtos.map((produto) => (
              <ProductCardWithDetails key={produto.id} produto={produto} />
            ))}
          </ul>
          <h1>Comentários</h1>
          {comments.length === 0 ? (
            <p>Nenhum comentário encontrado.</p>
          ) : (
            <ul>
              {comments.map((comment) => (
                <Comments key={comment.id} comment={comment} />
              ))}
            </ul>
          )}
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between">
          <p>Copyright &copy; 2023 Golden Pet</p>
          <a href="/contato" className="text-secondary py-2 px-4">
            Contato
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Produtos;