import React from "react";

const Card = ({ imagen, nombre, tipo, genero, desc_personalidad, region, comuna }) => {
  return (
    <div className="container card">
      <img src={imagen} alt={nombre} className="card-img" />
      <h2>{nombre}</h2>
      <h3>{tipo}</h3>
      <h3>{genero}</h3>
      <p>{desc_personalidad}</p>
      <p>{region}, {comuna}</p>
    </div>
  );
};

export default Card;

