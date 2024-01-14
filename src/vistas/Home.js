import React, { useState, useEffect} from "react"
import { Titulo } from "../componentes/Titulo"
import { Filtro } from "../componentes/Filtros"
import "./Home.css"

export function Home(){
    const imagen = "https://image.tmdb.org/t/p/original"
    //const urlImagen = "https://image.tmdb.org/t/p/original"
    const [pelis, setPelis] = useState([]);
    useEffect(() => {
        const apiKey = "fae52d9630be48d71b9d6f6187c521de"; // Reemplaza "tu_api_key" con tu clave de API de TMDb
        
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
          .then(response=> response.json())
          .then((data) => {
            setPelis(data.results);
          })
          .catch((error) => {
            console.error("Error de red:", error);
          });
      }, []);


    return <>
            <div>
              < Titulo />
              < Filtro />
            </div>
           
            <div className="contenedorPrincipalTarjetas">
              <div className="contenedorTarjetas">
                  {pelis.map((peli) => (
                  <div key={peli.id} className="tarjeta">
                      <img src={`${imagen+peli.poster_path}`} alt={peli.id} className="imagenTarjeta"/>
                      <div className="contenedorFecha">
                        <h2 className="tituloPelicula">{peli.title}</h2>
                        <p className="fechaPelicula">{peli.release_date}</p>
                      </div>
                  </div>
                  ))}
              </div>
            </div>
        </>
}