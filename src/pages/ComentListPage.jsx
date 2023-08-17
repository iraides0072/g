import React, { useState, useEffect } from "react";

const CommentListPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Quando a página carregar, faça uma consulta ao servidor para obter os comentários
    fetch(`/commentListPage`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, [comments]);

  return (
    <div>
      <h1>Comentários</h1>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentListPage;