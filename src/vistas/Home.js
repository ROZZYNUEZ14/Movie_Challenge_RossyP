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
   
    const [pelis, setPelis] = useState([]);
    const [total, setTotal] = useState()
    const [pagina, setPagina] = useState(1)
    const [pelisPorPagina, setPelisPorPagina] = useState(20)
    const [genres, setGenres] = useState([])
    /*
    const totalPelis = pelis.length
      console.log(pelis)
      */
     const totalPelis =total
    console.log(total)

    //const lastIndex = pagina * pelisPorPagina
    //onst firstIndex = lastIndex - pelisPorPagina

    useEffect(() => {
        const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzkzNDNmZDBiNDI0MjMxZGI3NzhhNTE5ZWUwZTRmZiIsInN1YiI6IjY1OWRmZGMwOWJjZDBmMDA5NDY0MWE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XK6YLJBNIzATieAhms4iOq8q6V-3_RbmKJJbzboz7pg"; 
        //const apikey ="0c9343fd0b424231db778a519ee0e4ff"
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apiKey,
          }
        };
       
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${pagina}&with_genres=${genreId}`, options)
          .then(response=> response.json())
          .then((data) => {
            setPelis(data.results);
            setTotal(data.total_results);
            setGenres(data.results)
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

      const [genreId, setGenreId] = useState("")

      const seleccionarGenre = (genreId)=>{
          setGenreId(genreId)
      }
      console.log("Genre de HOME", genres)
      console.log("genreID", genreId)
    return <>
            <div>
              < Titulo />
              < Filtro genres={genres} seleccionarGenre={seleccionarGenre}/>
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
                  
                ))}
              </div>
            </div>

            {/*{selecPelicula && <Detalle peli={selecPelicula} />} */}

            <div>
              <Paginacion pelisPorPagina={pelisPorPagina} totalPelis={totalPelis} pagina={pagina} setPagina={setPagina}/>
            </div>
        </>
}