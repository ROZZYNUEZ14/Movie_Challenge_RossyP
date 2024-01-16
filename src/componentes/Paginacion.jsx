import { useState } from "react";
import React from "react";
import "./Paginacion.css"

export const Paginacion = (props) => {
    const {pelisPorPagina, totalPelis, pagina, setPagina} = props
    /*
    const { pagina, setPagina, maximo } = props;
    
    const pagSiguiente = ()=>{
        
        setPagina(pagina+1)
    }

    const pagRetroceder = ()=>{
        setPagina(pagina -1)
    }
   /* 
  return (
    <>
      <button classNameNameName="retroceder" onClick={pagRetroceder}>
        <svg width="44" height="33" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6944 0.591067C20.9023 0.602797 23.1068 2.87054 23.1037 4.93456C23.1002 7.19057 19.5916 10.244 17.5249 12.105L37.3481 12.2103C40.996 12.2297 42.1952 12.7641 43.0571 14.1127C43.4881 14.739 43.7267 15.6523 43.7249 16.8043C43.7214 19.1083 42.8076 20.3035 41.2707 20.9193C40.5023 21.2032 39.1581 21.3401 37.3342 21.3304L17.5109 21.2251L19.8594 23.4936C21.1535 24.7485 22.016 25.7131 22.4468 26.4354C22.8777 27.1577 23.0687 27.8307 23.0677 28.4547C23.0647 30.4707 20.9012 32.7633 18.6453 32.7513C17.3493 32.7444 15.9585 32.017 13.9935 30.0865L0.190531 16.573L13.7461 3.49282C16.0534 1.29705 17.3505 0.583926 18.6944 0.591067Z" fill="black"/>
        </svg>
      </button>
      <p></p>
      <button classNameNameName="avanzar" onClick={pagSiguiente}>
        <svg width="44" height="33" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.2094 32.8142C23.0014 32.8025 20.797 30.5347 20.8001 28.4707C20.8036 26.2147 24.3121 23.1613 26.3789 21.3002L6.55564 21.1949C2.90777 21.1755 1.70862 20.6412 0.846707 19.2926C0.415676 18.6663 0.177077 17.753 0.178836 16.601C0.182355 14.297 1.09615 13.1018 2.63305 12.486C3.40146 12.202 4.74563 12.0652 6.56957 12.0749L26.3928 12.1802L24.0444 9.91167C22.7503 8.65678 21.8878 7.69218 21.4569 6.96988C21.0261 6.24759 20.8351 5.57456 20.836 4.95056C20.8391 2.93454 23.0026 0.642002 25.2585 0.653987C26.5544 0.660872 27.9453 1.38827 29.9103 3.31874L43.7132 16.8323L30.1577 29.9124C27.8504 32.1082 26.5533 32.8213 25.2094 32.8142Z" fill="black"/>
        </svg>
      </button>
      <p></p>
    </>
  );
  */
    const numeroPaginas = []
    console.log(Math.ceil(totalPelis / pelisPorPagina))

    
    

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
    return(
        <nav className="pagination" role="navigation" aria-label="pagination">
        <button className={`retroceder ${pagina=== 1 ? 'is-disabled': ''}`} onClick={botonAnterior}>Anterior</button>
        
        <ul className="pagination-list">
            {numeroPaginas.map(noPage =>(
                <div key={noPage} className="contenedorPaginas">
                   <li key={noPage}><a className={`pagination-link ${noPage=== pagina ? 'is-current' : ''}`} onClick={()=>paginaEspecifica(noPage)}>{noPage}</a></li>    
                    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
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