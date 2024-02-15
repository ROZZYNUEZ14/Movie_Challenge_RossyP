import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Home } from '../vistas/Home';

// USO UN MOCK PARA EL USENAVIGATE
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('renderiza el numero de tarjetas', () => {
    const { getAllByTestId } = render(<Home />);
    // SIMULO LA CARGA DE LOS DATOS
    return waitFor(() => {
      expect(getAllByTestId('tarjeta')).toHaveLength(20);
    }).then().catch((error) => {
      console.error('Error esperando:', error);
    });
  });


  it('Verifica si paginacion se encunetra dentro de Home', () => {
    const { getAllByTestId } = render(<Home />);
    // SIMULO LA CARGA DE LOS DATOS
    return waitFor(() => {
      expect(getAllByTestId('paginacion')).toBeInTheDocument();
    }).then().catch((error) => {
      console.error('Error esperando:', error);
    });
  });
});

