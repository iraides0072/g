

const CommentList = ({ comments }) => {
  // Esta variável contém uma lista de comentários.
  const commentList = comments;

  // Este elemento renderiza a lista de comentários.
  return (
    <ul className="comment-list">
      {commentList.map((comment) => (
        <li className="comment">
          {comment.text}
        </li>
      ))}
    </ul>
  );
};


export default CommentList;

// Este componente renderiza uma lista de comentários.

// A variável comments contém uma lista de comentários.

// O elemento ul renderiza a lista de comentários.

// O atributo className do elemento ul especifica a classe da lista de comentários.

// A classe comment-list é usada para estilizar a lista de comentários.

// O elemento li renderiza cada comentário na lista.

// O atributo className do elemento li especifica a classe do comentário.

// A classe comment é usada para estilizar o comentário.

// O método map é usado para iterar sobre a lista de comentários e renderizar cada comentário como um elemento li.

// O parâmetro comment é o comentário atual na iteração.

// O método text retorna o texto do comentário.

Aqui está o código atualizado com os comentários: