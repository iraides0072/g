
import React, { useState, useEffect } from "react";


const PetListPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Quando a página carregar, faça uma consulta ao servidor para obter os animais de estimação
    fetch(`/pets`)
      .then((response) => response.json())
      .then((pets) => setPets(pets));
  }, []);

  // Renderiza uma lista de animais de estimação
  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <PetListPage pet={pet} />
        </li>
      ))}
    </ul>
  );
};

export default PetListPage;