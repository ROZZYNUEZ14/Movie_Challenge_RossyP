// Tarjeta.test.js
import React from "react";
import { render } from "@testing-library/react";
import Tarjeta from "../componentes/Tarjeta";
import '@testing-library/jest-dom';



const Peliculas =[
    {
        id: 1,
        title: "Wonka",
        release_date: "2023-12-06",
        poster_path: "/ejemplo.png",
    },
    {
        id: 2,
        title: "Napoleón",
        release_date: "2023-11-22",
        poster_path: "/ejemplo.png",
    },
    {
        id: 3,
        title: "Migración: un viaje patas arrib",
        release_date: "2023-12-06",
        poster_path: "/ejemplo.png",
    },

]

describe("Tarjeta component", () => {

    //PRIMERA PELICULA
  it("renders correctamente", () => {
    const { getByAltText, getByText } = render(
      <Tarjeta peli={Peliculas[0]} peliculaSeleccionada={[]} />
    );

    // VERIFICO QUE TANTO FECHA COMO TITULO DE LA PELICULA ESTEN DENTRO DEL DOCUMENTO
    expect(getByText("Wonka")).toBeInTheDocument();
    expect(getByText("2023-12-06")).toBeInTheDocument();

    // VERIFICO QUE LA IMAGEN ESTE DENTRO DE LA TARJETA
    const imagen = getByAltText("1");
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute("src", "https://image.tmdb.org/t/p/original/ejemplo.png");
  }); 



  //SEGUNDA PELICULA
  it("renders correctamente", () => {
    const { getByAltText, getByText } = render(
      <Tarjeta peli={Peliculas[1]} peliculaSeleccionada={[]} />
    );

    // VERIFICO QUE TANTO FECHA COMO TITULO DE LA PELICULA ESTEN DENTRO DEL DOCUMENTO
    expect(getByText("Napoleón")).toBeInTheDocument();
    expect(getByText("2023-11-22")).toBeInTheDocument();

    // VERIFICO QUE LA IMAGEN ESTE DENTRO DE LA TARJETA
    const imagen = getByAltText("2");
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute("src", "https://image.tmdb.org/t/p/original/ejemplo.png");
  });


  
});
