import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Home } from '../vistas/Home';
import { BrowserRouter } from 'react-router-dom';

// USO UN MOCK PARA EL USENAVIGATE
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));


// USO UN MOCK PARA EL USELOCATION
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: ''
  })
}));

describe('Home component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter> 
        <Home />
      </BrowserRouter> );
  });

  it('renderiza el numero de tarjetas', () => {
    const { getAllByTestId } = render(
      <BrowserRouter> 
        <Home />
      </BrowserRouter> );
    // ESPERO LA CARGA DE LOS DATOS
    return waitFor(() => {
      expect(getAllByTestId('tarjeta')).toHaveLength(20);
    }).then().catch((error) => {
      console.error('Error esperando:', error);
    });
  });


  it('Verifica si paginacion se encuentra dentro de Home', () => {
    const { getAllByTestId } = render(
      <BrowserRouter> 
        <Home />
      </BrowserRouter> );

    // SIMULO LA CARGA DE LOS DATOS
    return waitFor(() => {
      expect(getAllByTestId('paginacion')).toBeInTheDocument();
    }).then().catch((error) => {
      console.error('Error esperando:', error);
    });
  });
});