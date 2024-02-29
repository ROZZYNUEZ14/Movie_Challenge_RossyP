import React from "react";
import { Link } from "react-router-dom";
import { useLocation , useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { Filtro } from "../componentes/Filtros";
import  Titulo  from "../componentes/Titulo";
import sinImage from "../img/sinImage.png"
import "./Detalle.css"
import { func } from "prop-types";

export function Detalle(){


    const {id} = useParams()
    const [pelicula, setPelicula] = useState();

    const [genres, setGenres] = useState([])
    const [genreId, setGenreId] = useState()
    const [sortBy, setSortBy] = useState("")
    
    const navigate = useNavigate()
    const location = useLocation()

    const imagen = "https://image.tmdb.org/t/p/original"

    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzkzNDNmZDBiNDI0MjMxZGI3NzhhNTE5ZWUwZTRmZiIsInN1YiI6IjY1OWRmZGMwOWJjZDBmMDA5NDY0MWE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XK6YLJBNIzATieAhms4iOq8q6V-3_RbmKJJbzboz7pg"; 

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apiKey,
          }
        };

    useEffect(() => {
      
        //fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
        fetch(`https://api.themoviedb.org/3/movie/${id}?include_adult=false&include_video=false&language=es-ES&${genreId ? `&with_genres=${genreId}`: ""}${sortBy ? `&sort_by=${sortBy}` : ""}`, options)

            .then(response=> response.json())
            .then((data) => {
                setPelicula(data);
                
          })
          .catch((error) => {
            console.error("Error de red:", error);
          });
          
      }, [genreId, id, sortBy]);


    const seleccionarGenre = (genreId)=>{
        setGenreId(genreId)
    }

    const seleccionarSortBy = (sortBy)=>{
        setSortBy(sortBy)
    }

    useEffect(() => {
       
      fetch(`https://api.themoviedb.org/3/genre/movie/list?language=es`, options)
        .then(response=> response.json())
        .then((data) => {
          setGenres(data.genres)
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
        
        
    }, [])


    
    function homeRetroceder (){
      window.history.back();
    }


    return (
        <div>
          <div>
            <Titulo />
            {//<Filtro genres={genres} seleccionarGenre={seleccionarGenre} seleccionarSortBy={seleccionarSortBy} />
            }
          </div>
            <button className="botonHome" onClick={homeRetroceder}><i class="flecha fa-solid fa-arrow-left"></i></button>
          <div className="cajaPrincipalDetalle">
          {pelicula && (
            <div key={pelicula.id} className="cajaDetalle">
                <img src={pelicula.poster_path ? `${imagen + pelicula.poster_path}` : sinImage} alt={pelicula.id} className="imagenDetalle" />
                <div className="cajaDatosDetalle">
                  <h1 className="tituloPeliculaD">{pelicula.title}</h1>
                  <h4 className="tituloAño">Año de estreno:</h4>
                  <p className="textoD">{pelicula.release_date}</p>
                  <h4 className="tituloGenero">Género:</h4>
                  {pelicula.genres
                  .map((genre) =>(
                          <p className="textoD" key={genre.id} value={genre.id}>{genre.name}</p>
                  ))}
                  <h4 className="tituloSinopsis">Sinopsis:</h4>
                  <p className="textoD">{pelicula.overview}</p>

                  
                </div>
                <div className="cajaVoto">
                  <div className="circuloVoto"><h1>{pelicula.vote_average.toFixed(1)}</h1></div>
                  <p className="textoVotacion"><i class="person fa-solid fa-user"></i> {pelicula.vote_count}</p>
                </div>
            </div>
            )}
          </div>
        </div>
      );
}