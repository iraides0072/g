import React, { useState, useEffect } from "react";

const LogoPage = () => {
  
  const [color, setColor] = useState("red");

  useEffect(() => {
    // Quando a página carregar, defina a cor do logotipo para vermelho
   
    
  }, [color,setColor ]);

  // Renderiza o logotipo
  return (
    <div className="logo">
      <img src="./logo.png" alt="Meu Site" />
      <button onClick={() => setColor("blue")}>Mudar a cor</button>
    </div>
  );
};

export default LogoPage;