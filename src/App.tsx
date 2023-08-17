// Importa os pacotes necessários
import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";

// Define o componente App
const App = () => {
  // Retorna o componente BrowserRouter com as rotas definidas
  return (                             
    <BrowserRouter>
      <Routes>
        // Rota para a página `/home`
        <Route exact path="/" element={<Home />} />
        // Rota para a página `/sobre`
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exporta o componente App
export default App;

// Comentário sobre o componente App
// O componente App é o componente principal do aplicativo React. Ele é responsável por gerenciar a navegação do aplicativo e definir as rotas do aplicativo.

// Comentário sobre a rota para a página `/home`
// A rota para a página `/home` é renderizada pelo componente `Home`. O componente `Home` renderiza a página inicial do aplicativo.

// Comentário sobre a rota para a página `/about`
// A rota para a página `/about` é renderizada pelo componente `About`. O componente `About` renderiza a página de sobre do aplicativo.