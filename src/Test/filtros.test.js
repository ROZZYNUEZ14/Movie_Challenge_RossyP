import { render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import { Filtro } from "../componentes/Filtros";

describe("<Filtro/>", () => {
    test("renders componentes en Filtro", () => {
        render(<Filtro genres={[]}/>);
        const labelElement = screen.getByLabelText(/Ordenar por:/i);

        expect(labelElement).toBeDefined();
    });
});