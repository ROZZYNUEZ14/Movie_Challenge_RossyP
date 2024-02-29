import "./Filtros.css"
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate} from "react-router-dom";


export function Filtro(props){
    const {genres, seleccionarGenre, seleccionarSortBy} = props
    

    const [selectGenre, setSelectGenre] = useState("")
    const [selectSortBy, setSelectSortBy] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        const guardarGenre = params.get("genre")
        const guardarSortBy = params.get("sortBy")
        //console.log( "SOY EL PARAMS URL", guardarGenre)
        if(guardarGenre){
            setSelectGenre(guardarGenre)
            seleccionarGenre(guardarGenre)
        }
        if(guardarSortBy){
            setSelectSortBy(guardarSortBy)
            seleccionarSortBy(guardarSortBy)
        }
        
    }, [window.location.search, seleccionarGenre, seleccionarSortBy, selectGenre, selectSortBy])

    
    const genreSeleccionado =(e)=>{
        seleccionarGenre(e.target.value)
        setSelectGenre(e.target.value)

        const params = new URLSearchParams(location.search);
        params.set("genre", e.target.value);
        navigate(`?${params.toString()}`);
    
    }

    const sortBySeleccionado = (e)=>{
        seleccionarSortBy(e.target.value)
        setSelectSortBy(e.target.value)

        const params = new URLSearchParams(location.search);
        params.set("sortBy", e.target.value);
        navigate(`?${params.toString()}`);
    
    }
    //const filtrosVacio = document.querySelector("#filtro");
    //const ordenarVacio = document.querySelector("#ordenar")

    const volverInicio =() =>{
        const params = new URLSearchParams();
        params.set("page", "1");
        window.location.href = `/?${params.toString()}`;
        console.log(window.location)
        seleccionarGenre("");
        seleccionarSortBy("");
        /*
        const path = "/"
        
        navigate(path)
        seleccionarGenre("");
        seleccionarSortBy("");
        
        filtrosVacio.value = "";
        ordenarVacio.value = "";
        */
    
    }

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
                <button className="botonInicio" role="button" name="volverAlInicio" onClick={volverInicio}><i className="fa-solid fa-house"></i></button>
            </div>
          
        </div>
    </>
}