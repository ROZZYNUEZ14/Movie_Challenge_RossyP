import React from 'react';
import { render, screen } from '@testing-library/react';
import Titulo from '../componentes/Titulo';
import '@testing-library/jest-dom';


describe("Titulo", () => {
  test("Imagenes del titulo presentes", () => {
    render(<Titulo />);
    //VERIFICO SI LA IMAGEN SE RENDERIZA
    const logoPalomitas = screen.getAllByRole("img")[0];
    expect(logoPalomitas).toHaveAttribute("src", "palomitas.png")
  });
});
