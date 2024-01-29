import "./Filtros.css"
import React from "react";

export function Filtro(props){
    const {genres, seleccionarGenre} = props
    
    console.log("SOY GENRES", genres)
    //console.log(seleccionarGenre)
    const genreSeleccionado =(e)=>{
        seleccionarGenre(e.target.value)
    }
    console.log("SOY EL ONCLICK", genreSeleccionado)
    console.log(seleccionarGenre)
    return <>
        <div className="contenedorPrincipalFil">
            <div className="contenedorOrdenar">
                <label htmlFor="ordenar" className="textoOrdenar">Ordenar por: </label>
                <select name="name" id="ordenar" className="ordenador">
                    <option value="" disabled>--Elige una Opción--</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>

            <div className="contenedorFiltrar">
                <label htmlFor="filtro" className="textoFiltrar">Filtrar por: </label>
                <select name="filtrar" id="filtro" className="filtrar" onChange={genreSeleccionado}>
                    <option value="" disabled>--Elige una Opción--</option>
                    {genres
                    .map((genre) =>{
                        
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        
                    })}
                   
                </select>
            </div>

            <div className="contenedorBoton">
                <button className="botonLimpiar">Limpiar</button>
            </div>
          
        </div>
    </>
}