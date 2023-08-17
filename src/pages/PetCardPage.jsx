import React, { useState, useEffect } from "react";


const PetCardPage = () => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // Quando a página carregar, faça uma consulta ao servidor para obter o animal de estimação
    fetch(`/pets/${petId}`)
      .then((response) => response.json())
      .then((pet) => setPet(pet));
  }, [pet]);

  // Renderiza um cartão de animal de estimação
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetCardPage;