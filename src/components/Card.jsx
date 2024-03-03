import React from "react";

const Card = ({ imagen, nombre, tipo, genero, desc_personalidad, region, comuna }) => {
  return (
    <div className="container card">
      <img src={imagen} alt={nombre} className="card-img" />
      <h2>{nombre}</h2>
      <h3>{tipo}</h3>
      <h4>{genero}</h4>
      {desc_personalidad}
      <h2>{region}, {comuna}</h2>
    </div>
  );
};

export default Card;

