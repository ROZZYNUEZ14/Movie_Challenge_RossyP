// Tarjeta.js
import React from "react";
import sinImage from "../img/sinImage.png";

function Tarjeta({ peli, peliculaSeleccionada }) {
  const imagen = "https://image.tmdb.org/t/p/original";

  return (
    <div key={peli.id} className="tarjeta" data-testid="tarjeta" onClick={() => peliculaSeleccionada(peli)}>
      <img src={peli.poster_path ? `${imagen + peli.poster_path}` : sinImage} alt={peli.id} className="imagenTarjeta" />
      <div className="contenedorFecha">
        <h2 className="tituloPelicula">{peli.title}</h2>
        <p className="fechaPelicula">{peli.release_date}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
