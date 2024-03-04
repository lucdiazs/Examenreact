import React, { useEffect, useState } from "react";
import Card from "./Card";
import Buscador from "./Buscador";

const MyApi = () => {
  const UrlApi = "https://huachitos.cl/api/animales";
  const [animales, setAnimales] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const Traerinformacion = async (url) => {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error("No se pudo procesar la respuesta");
      }

      const dataObject = await respuesta.json();
      const data = dataObject.data;

      if (Array.isArray(data)) {
        setAnimales(data);
      } else {
        throw new Error("La respuesta de la API no tiene el formato esperado");
      }
    } catch (error) {Yesterday
    
      console.error(error);
    }
  };

  useEffect(() => {
    Traerinformacion(UrlApi);
  }, []);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar animales según la búsqueda
  const animalesFiltrados = animales.filter((animal) =>
    animal.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Ordenar alfabéticamente por nombre
  animalesFiltrados.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
  });

  return (
    <div>
      <div className="container-buscador">
        <Buscador onSearch={handleBusqueda} />
      </div>
      <div className="container-general">
        {animalesFiltrados.map((animal) => (
          <Card
            key={animal.id}
            imagen={animal.imagen}
            nombre={animal.nombre}
            tipo={animal.tipo}
            genero={animal.genero}
            desc_personalidad={animal.desc_personalidad}
            region={animal.region}
            comuna={animal.comuna}
          />
        ))}
      </div>
    </div>
  );
};

export default MyApi;


