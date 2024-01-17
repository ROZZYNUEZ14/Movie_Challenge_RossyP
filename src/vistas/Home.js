import React, { useState, useEffect} from "react"
import { Titulo } from "../componentes/Titulo"
import { Filtro } from "../componentes/Filtros"
import "./Home.css"
import { Paginacion } from "../componentes/Paginacion"
import { Detalle } from "./Detalle"
import { useLocation, useNavigate } from "react-router-dom";


export function Home(){

  const location = useLocation();
  const navigate = useNavigate();
  
    const imagen = "https://image.tmdb.org/t/p/original"
    //const urlImagen = "https://image.tmdb.org/t/p/original"
    const [pelis, setPelis] = useState([]);
    const totalPelis = pelis.length
    const [pagina, setPagina] = useState(1)
    const [pelisPorPagina, setPelisPorPagina] = useState(20)
    console.log(pelis)

    const lastIndex = pagina * pelisPorPagina
    const firstIndex = lastIndex - pelisPorPagina

    useEffect(() => {
        const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWU1MmQ5NjMwYmU0OGQ3MWI5ZDZmNjE4N2M1MjFkZSIsInN1YiI6IjY1OWRmZGMwOWJjZDBmMDA5NDY0MWE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ri_5MZ97eVFPpGruOfiBv_SO5Bs29YPZul5_4BrzvNY"; // Reemplaza "tu_api_key" con tu clave de API de TMDb
        
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apiKey,
          }
        };

        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-Es&page=${pagina}`, options)
          .then(response=> response.json())
          .then((data) => {
            setPelis(data.results);
            console.log(data.results);
          })
          .catch((error) => {
            console.error("Error de red:", error);
          });
          console.log("Página actual:", pagina)
      }, [pagina]);


      const [selecPelicula, setSelecPelicula] = useState(null)

      function peliculaSeleccionada (peli){
        setSelecPelicula(peli)
        const nuevoPath = `/movie/${peli.id}`;
        navigate(nuevoPath);
 
      }
/*
      const maximo = pelis.length /porPagina

      console.log(pelis.length)
*/
    return <>
            <div>
              < Titulo />
              < Filtro />
            </div>
           
            <div className="contenedorPrincipalTarjetas">
              <div className="contenedorTarjetas">
                  {pelis
                  .map((peli) => (
                 // console.log(peli)
                  <div key={peli.id} className="tarjeta" onClick={() => peliculaSeleccionada(peli)}>
                    
                      <img src={`${imagen+peli.poster_path}`} alt={peli.id} className="imagenTarjeta"/>
                      <div className="contenedorFecha">
                        <h2 className="tituloPelicula">{peli.title}</h2>
                        <p className="fechaPelicula">{peli.release_date}</p>
                      </div>
                      
                  </div>
                  
                )).slice(firstIndex, lastIndex)}
              </div>
            </div>

            {/*{selecPelicula && <Detalle peli={selecPelicula} />} */}

            <div>
              <Paginacion pelisPorPagina={pelisPorPagina} totalPelis={totalPelis} pagina={pagina} setPagina={setPagina}/>
            </div>
        </>
}