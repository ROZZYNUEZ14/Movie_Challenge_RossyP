// Home.js
import React, { useState, useEffect } from "react";
import Titulo from "../componentes/Titulo";
import { Filtro } from "../componentes/Filtros";
import "./Home.css";
import { Paginacion } from "../componentes/Paginacion";
//import { useLocation, useNavigate } from "react-router-dom";
import Tarjeta from "../componentes/Tarjeta";
import NavigateComponent from "../componentes/useNavigateComponent";

export function Home() {
 // const navigate = useNavigate();
  const navigate = NavigateComponent()
  const [pelis, setPelis] = useState([]);
  const [total, setTotal] = useState();
  const [pagina, setPagina] = useState(1);
  const [pelisPorPagina, setPelisPorPagina] = useState(20);
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState("");
  const [sortBy, setSortBy] = useState("");

    const totalPelis = total;

    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzkzNDNmZDBiNDI0MjMxZGI3NzhhNTE5ZWUwZTRmZiIsInN1YiI6IjY1OWRmZGMwOWJjZDBmMDA5NDY0MWE0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XK6YLJBNIzATieAhms4iOq8q6V-3_RbmKJJbzboz7pg";
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + apiKey,
      }
    };

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${pagina}&${genreId ? `&with_genres=${genreId}` : ""}${sortBy ? `&sort_by=${sortBy}` : ""}`, options)
        .then(response => response.json())
        .then((data) => {
          setPelis(data.results);
          setTotal(data.total_results);
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
      console.log("Página actual:", pagina);
    }, [pagina, genreId, sortBy]);

    const [selecPelicula, setSelecPelicula] = useState(null);

    function peliculaSeleccionada(peli) {
      setSelecPelicula(peli);
      const nuevoPath = `/movie/${peli.id}`;
      navigate(nuevoPath);
    }

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options)
        .then(response => response.json())
        .then((data) => {
          setGenres(data.genres);
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
      console.log("Página actual:", pagina);
    }, []);

    console.log("soy los GENEROS", genres);

    const seleccionarGenre = (genreId) => {
      setGenreId(genreId);
    };

    const seleccionarSortBy = (sortBy) => {
      setSortBy(sortBy);
    };

    console.log("genreID", genreId);

  
  return (
    <>
      <div>
        <Titulo />
        <Filtro genres={genres} seleccionarGenre={seleccionarGenre} seleccionarSortBy={seleccionarSortBy} />
      </div>

      <div className="contenedorPrincipalTarjetas">
        <div className="contenedorTarjetas">
          {pelis.map((peli) => (
            <Tarjeta key={peli.id} peli={peli} peliculaSeleccionada={peliculaSeleccionada} />
          ))}
        </div>
      </div>

      <div>
        <Paginacion pelisPorPagina={pelisPorPagina} totalPelis={totalPelis} pagina={pagina} setPagina={setPagina} />
      </div>
    </>
  );
}
