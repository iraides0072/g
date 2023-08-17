//import React from "react";

const CustomPartnerList = () => {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      imageUrl: "https://via.placeholder.com/120x60",
    },
    {
      id: 2,
      name: "Partner 2",
      imageUrl: "https://via.placeholder.com/120x60",
    },
    {
      id: 3,
      name: "Partner 3",
      imageUrl: "https://via.placeholder.com/120x60",
    },
  ];

  return (
    <ul>
      {partners.map((partner) => (
        <li key={partner.id}>
          <img src={partner.imageUrl} alt={partner.name} />
        </li>
      ))}
    </ul>
  );
};

export default CustomPartnerList;