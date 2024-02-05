import { useState } from "react";
import React from "react";
import "./Paginacion.css"

export const Paginacion = (props) => {
    const {pelisPorPagina, totalPelis, pagina, setPagina} = props
  
    const numeroPaginas = []
    const paginasVisibles = 10
    //console.log(Math.ceil(totalPelis / pelisPorPagina))

    for(let i = 1; i<=Math.ceil(totalPelis / pelisPorPagina); i++){
        numeroPaginas.push(i)
    }



    const botonAnterior=()=>{
        setPagina(pagina-1)
    }
    const botonSiguiente=()=>{
        setPagina(pagina+1)
    }
    const paginaEspecifica =(n)=>{
        setPagina(n)
    }

    const inicio = Math.max(1, pagina - Math.floor(paginasVisibles / 2));
    const fin = Math.min(inicio + paginasVisibles - 1,Math.ceil(totalPelis / pelisPorPagina));
    
    return(
        <nav className="pagination" role="navigation" aria-label="pagination">
        <button className={`retroceder ${pagina=== 1 ? 'is-disabled': ''}`} onClick={botonAnterior}>Anterior</button>
        
        <ul className="pagination-list">
             {numeroPaginas.slice(inicio - 1, fin).map(noPage =>(
                <div key={noPage} className="contenedorPaginas">
                   <li key={noPage}><a className={`pagination-link ${noPage=== pagina ? 'is-current' : ''}`} onClick={()=>paginaEspecifica(noPage)}>{noPage}</a></li>    
                    
                </div>
                    
                
            ))}
            
        </ul>
        <button className={`avanzar ${pagina>=numeroPaginas.length ? 'is-disabled' : ''}`} onClick={botonSiguiente}>Siguiente</button>
        </nav>
    )
};
{/*
            //<li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
            */}