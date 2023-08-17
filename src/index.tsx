import React, { useState, useEffect } from 'react'; 
import './App.css';

import Home from './components/Home';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Produtos from './components/Produtos';

const App = () => {
  const [activeRoute, setActiveRoute] = useState('home');
 

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  return (
    <div>
      <header>
        <h1>Golden Pet</h1>
      </header>
      <main>
        {
          activeRoute === 'home' ? (
            <Home />
          ) : activeRoute === 'servicos' ? (
            <Servicos />
          ) : activeRoute === 'sobre' ? (
            <Sobre />
          ) : activeRoute === 'contato' ? (
            <Contato />
          ) 
        
         : (
            <div>Página não encontrada</div>
          )
        }
      </main>
      <footer>
        <p>Copyright &copy; 2023 Golden Pet</p>
      </footer>
    </div>
  );
};

export default App;
