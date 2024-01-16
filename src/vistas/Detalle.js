import React from "react";
import { Link } from "react-router-dom";

export function Detalle({peli}){
    const imagen = "https://image.tmdb.org/t/p/original"
    return (
        <li className="detallePeli">
            <Link to={"/movie/"+peli.id}>
                <img src={`${imagen+peli.poster_path}`} alt={peli.id}/>
            </Link>
        </li>
    )
}