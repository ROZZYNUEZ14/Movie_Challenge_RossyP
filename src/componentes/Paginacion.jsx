import { useState } from "react";
import React from "react";
import "./Paginacion.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Paginacion = (props) => {
    const {pelisPorPagina, totalPelis, pagina, setPagina} = props

    const navigate = useNavigate()
    const location = useLocation()
  
    const numeroPaginas = []
    const paginasVisibles = 10
    //console.log(Math.ceil(totalPelis / pelisPorPagina))

    for(let i = 1; i<=Math.ceil(totalPelis / pelisPorPagina); i++){
        numeroPaginas.push(i)
    }



    const botonAnterior=()=>{
        if(pagina > 1) {
            setPagina(pagina-1)
            actualizarURL(pagina-1)
        }
        
    }
    const botonSiguiente=()=>{
        setPagina(pagina+1)
        actualizarURL(pagina+1)
    }
    
    const paginaEspecifica =(n)=>{
        setPagina(n)
        actualizarURL(n)
    }

    const inicio = Math.max(1, pagina - Math.floor(paginasVisibles / 2));
    const fin = Math.min(inicio + paginasVisibles - 1,Math.ceil(totalPelis / pelisPorPagina));


    const actualizarURL = (nuevaPagina) => {
        const nuevaURL = `?page=${nuevaPagina}`;
        navigate(nuevaURL);
        window.history.pushState({ path: nuevaURL }, "", nuevaURL);
    };
    

    return(
        <nav className="pagination" role="navigation" aria-label="pagination" data-testid="paginacion">
        <button className={`retroceder ${pagina=== 1 ? 'is-disabled': ''}`} onClick={botonAnterior} ><i className="derecha fa-solid fa-arrow-left"></i></button>
        
        <ul className="pagination-list">
             {numeroPaginas.slice(inicio - 1, fin).map(noPage =>(
                <li key={noPage} className={`contenedorPaginas ${noPage === pagina ? 'seleccionado' : ''}`} onClick={() => paginaEspecifica(noPage)}>
                    <a className={`pagination-link ${noPage === pagina ? 'is-current' : ''}`} >{noPage}</a>
                </li> 
            ))}
            
        </ul>
        <button className={`avanzar ${pagina>=numeroPaginas.length ? 'is-disabled' : ''}`} onClick={botonSiguiente}><i className="izquierda fa-solid fa-arrow-right"></i></button>
        </nav>
    )
};
{/*
            //<li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
            */}