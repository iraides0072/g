import React, { useState, useEffect, useRef } from "react";

const CommentForm = () => {
  // Esta variável contém o texto do comentário.
  const [commentText, setCommentText] = useState("");

  // Este evento é chamado quando o botão "Enviar" é clicado.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpa o texto do comentário.
    setCommentText("");
  };

  // Este elemento renderiza o formulário.
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite seu comentário"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CommentForm;

// Este componente renderiza um comentário.

// A variável `comment` contém o texto do comentário.

// O elemento `div` renderiza o comentário.

// O atributo `className` do elemento `div` especifica a classe do comentário.

// A classe `comment` é usada para estilizar o comentário.