// Buscador.jsx

import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [filtro, setFiltro] = useState("nombre");

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={`Buscar por ${filtro}...`}
        onChange={onSearch}
      />
      <select value={filtro} onChange={handleChange}>
        <option value="nombre">Nombre</option>
        <option value="tipo">Tipo</option>
        <option value="genero">Género</option>
        <option value="region">Región</option>
        <option value="comuna">Comuna</option>
      </select>
    </div>
  );
};

export default Buscador;
