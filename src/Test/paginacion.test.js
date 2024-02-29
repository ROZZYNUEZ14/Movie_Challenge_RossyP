import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter
import { Paginacion } from '../componentes/Paginacion'; // Asegúrate de importar correctamente el componente Paginacion
import '@testing-library/jest-dom/extend-expect';


// USO UN MOCK PARA EL USELOCATION
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      search: ''
    })
  }));

describe('Paginacion component', () => {
  it('Debería mostrar los números de página correctamente', () => {
    const pelisPorPagina = 10;
    const totalPelis = 100;
    const pagina = 1;
    const setPagina = jest.fn();

    const { getAllByRole, getByText } = render(
      // Envuelve el componente Paginacion en un MemoryRouter
      <MemoryRouter>
        <Paginacion
          pelisPorPagina={pelisPorPagina}
          totalPelis={totalPelis}
          pagina={pagina}
          setPagina={setPagina}
        />
      </MemoryRouter>
    );

    const numerosPagina = getAllByRole('listitem');
    expect(numerosPagina).toHaveLength(10); // Asumiendo que se muestran 10 números de página por defecto

    // Verificar que el número de página actual esté resaltado correctamente
    expect(getByText('1')).toHaveClass('is-current');
  });

  it('Debería llamar a setPagina al hacer clic en un número de página', () => {
    const pelisPorPagina = 10;
    const totalPelis = 100;
    const pagina = 1;
    const setPagina = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <Paginacion
          pelisPorPagina={pelisPorPagina}
          totalPelis={totalPelis}
          pagina={pagina}
          setPagina={setPagina}
        />
      </MemoryRouter>
    );

    // Simular hacer clic en el número de página 2
    fireEvent.click(getByText('2'));

    // Verificar que la función setPagina fue llamada con el número de página correcto
    expect(setPagina).toHaveBeenCalledWith(2);
  });

  // Aquí podrías escribir más pruebas para otros casos, como botón de retroceso, botón de avance, etc.
});
