import "./Filtros.css"
import React from "react";

export function Filtro(props){
    const {genres, seleccionarGenre, seleccionarSortBy} = props
    
    //console.log("SOY GENRES", genres)
    //console.log(seleccionarGenre)
    const genreSeleccionado =(e)=>{
        seleccionarGenre(e.target.value)
    }

    const sortBySeleccionado = (e)=>{
        seleccionarSortBy(e.target.value)
    }

    //console.log(genreSeleccionado)
    //console.log(seleccionarGenre)
    return <>
        <div className="contenedorPrincipalFil">
            <div className="contenedorOrdenar">
                <label htmlFor="ordenar" className="textoOrdenar">Ordenar por: </label>
                <select name="ordenar" id="ordenar" className="ordenador" onChange={sortBySeleccionado}>
                    <option value="">--Elige una Opción--</option>
                    <option value={"popularity.asc"}>Menos Popular</option>
                    <option value={"popularity.desc"}>Más popular</option>
                    <option value={"primary_release_date.asc"}>Estrenos antiguos</option>
                    <option value={"primary_release_date.desc"}>Estrenos recientes</option>
                    <option value={"revenue.asc"}>Menos ingresos</option>
                    <option value={"revenue.desc"}>Más ingresos</option>
                </select>
            </div>

            <div className="contenedorFiltrar">
                <label htmlFor="filtro" className="textoFiltrar">Filtrar por: </label>
                <select name="filtrar" id="filtro" className="filtrar" onChange={genreSeleccionado}>
                    <option value="">--Elige una Opción--</option>
                    {genres
                    .map((genre) =>(
                        
                            <option className="opcionesFiltros" key={genre.id} value={genre.id}>{genre.name}</option>
                        
                    ))}
                   
                </select>
            </div>

            <div className="contenedorBoton">
                <button className="botonLimpiar">Limpiar</button>
            </div>
          
        </div>
    </>
}