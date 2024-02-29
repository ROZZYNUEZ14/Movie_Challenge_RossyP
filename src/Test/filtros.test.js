import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Filtro } from "../componentes/Filtros";

describe("<Filtro/>", () => {
  test("renders componentes en Filtro", () => {
    // Renderizar el componente con una lista vacía de genres
    render(
      <BrowserRouter>
        <Filtro genres={[]} />
      </BrowserRouter>
    );
    // Verificar que el elemento de etiqueta está presente
    const labelElement = screen.getByLabelText(/Ordenar por:/i);
    expect(labelElement).toBeDefined();
  });


  test("hacer clic en el botón de volver al inicio llama a mockSeleccionarGenre con los parámetros correctos", () => {
    // Define funciones ficticias para seleccionar el género y ordenar
    const mockSeleccionarGenre = jest.fn();
    const mockSeleccionarSortBy = jest.fn();
    const genres = [];

    render(
        <BrowserRouter initialEntries={['/?genre=2&sortBy=popularity.asc']}>
            <Filtro genres={genres} seleccionarGenre={mockSeleccionarGenre} seleccionarSortBy={mockSeleccionarSortBy} />
        </BrowserRouter>
    );

    //SIMULO EL CLICK
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    
    
    //VERIFICO SI AL HACER CLICK SE LLAMA A LA FUNCION GENRE Y SORTBY
    expect(mockSeleccionarGenre).toHaveBeenCalledWith("");
    expect(mockSeleccionarSortBy).toHaveBeenCalledWith("");
});



/*
    const mockGenres = [
      { id: 1, name: "Genre 1" },
      { id: 2, name: "Genre 2" },
      { id: 3, name: "Genre 3" },
    ];
*/
  
});
