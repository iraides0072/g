import React, { useState, useEffect } from "react";
import { CommentForm } from "./CommentForm";

const CommentPage = () => {
  const [comment, setComment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Quando a página carregar, faça uma consulta ao servidor para obter os comentários
    fetch(`/comments`)
      .then((response) => response.json())
      .then((comments) => setComment(comments));
  }, []);

  // Este método é chamado quando o usuário envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Faça uma consulta ao servidor para salvar o comentário
    fetch(`/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((comment) => {
        if (comment.id) {
          // O comentário foi salvo com sucesso
          setComment(comment);
        } else {
          // O comentário não foi salvo com sucesso
          setError(" Comentário não pode ser salvo.");
        }
      });
  };

  return (
    <div>
      <h1>Comentários</h1>

      {error && <p>{error}</p>}

      <CommentForm comment={comment} onSubmit={handleSubmit} />

      <ul>
        {comment.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentPage;