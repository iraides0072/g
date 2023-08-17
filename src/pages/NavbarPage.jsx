import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import HomePage from "./HomePage";
import ProdutosPage from "./ProdutosPage";
import ServicosPage from "./ServicosPage";
import ContatoPage from "./ContatoPage";
import SobrePage from "./SobrePage";
import LogoPage from "./LogoPage";
import PetCardPage from "./PetCardPage";
import PetListPage from "./PetListPage";
import CommentListPage from "./CommentListPage"


const NavbarPage = () => {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    // Quando a página carregar, defina a página ativa para "home"
    setActivePage("home");
  }, []);

  // Renderiza a barra de navegação e a página ativa
  return (
    <div>
      <Navbar activePage={activePage} onNavbarClick={setActivePage} />
      <main>
        {activePage === "Home" && <HomePage />}
        {activePage === "Produtos" && <ProdutosPage />}
        {activePage === "Servicos" && <ServicosPage />}
        {activePage === "Contato" && <ContatoPage />}
        {activePage === "Sobre" && <SobrePage />}
        {activePage === "Logo" && <LogoPage />}
        {activePage === "Navbar" && <NavbarPage />}
        {activePage === "PetCard" && <PetCardPage />}
        {activePage === "PetList" && <PetListPage />}
        {activePage === "ComentList" && <CommentListPage />}
      </main>
    </div>
  );
};

export default NavbarPage;