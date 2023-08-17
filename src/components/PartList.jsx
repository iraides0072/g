//import React from 'react';
import { Container, Row, Col, Image, ListGroup, ListGroupItem } from 'tailwindcss';

// Componente que representa a página Home
const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Home</h1>
          {/* Renderiza o componente PartList */}
          <PartList />
        </Col>
      </Row>
    </Container>
  );
};

// Componente PartList que exibe uma lista de parceiros
const PartList = () => {
  return (
    <ListGroup>
      {/* ... conteúdo do PartList ... */}
    </ListGroup>
  );
};

export { Home, PartList }; // Exporta os componentes individualmente
