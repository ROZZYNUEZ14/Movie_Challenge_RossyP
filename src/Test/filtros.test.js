import { render, screen } from "@testing-library/react";
import { Filtro } from "../componentes/Filtros";
import React from "react";

describe("<Filtro/>", () => {
    test("renders componentes en Filtro", () => {
        render(<Filtro genres={[]}/>);
        const labelElement = screen.getByLabelText(/Ordenar por:/i);

        expect(labelElement).toBeDefined();
    });
});