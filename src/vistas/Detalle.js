import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export function Detalle(){

    /*
    const location = useLocation()
    const movieId = location.pathname;
    console.log(movieId)
    */
    const location = useLocation()
    console.log(location)

    
    const imagen = "https://image.tmdb.org/t/p/original"
    return (
        
        <div>
            {/*
            <li className="detallePeli">
                <Link to={"/movie/"+selecPelicula.id}>
                    <img src={`${imagen+selecPelicula.poster_path}`} alt={selecPelicula.id}/>
                    <p>{selecPelicula.release_date}</p>
                </Link>
                <p>{selecPelicula.release_date}</p>
            </li>
            */}
            <p>Hola</p>
        </div>
    
    )
}