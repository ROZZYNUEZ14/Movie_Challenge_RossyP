import React from "react"
import palomitas from "../img/palomitas.png"
import "./Titulo.css"

export function Titulo(){
    return <div className="contenedorTitulo">
            <img src={palomitas} className="imagenPalomitas" />
            <h1 className="titulo"></h1>
        </div>   
}