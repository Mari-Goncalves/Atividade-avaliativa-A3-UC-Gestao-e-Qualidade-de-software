import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from './SearchButton';
import '@testing-library/jest-dom'; // Garante suporte ao matcher toBeInTheDocument

describe('SearchButton component', () => {
  test('deve renderizar com o texto fornecido', () => {
    render(<SearchButton buttonText="Buscar" onClick={() => {}} />);
    
    const button = screen.getByRole('button', { name: /buscar/i });
    expect(button).toBeInTheDocument();
  });

  test('deve chamar onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<SearchButton buttonText="Buscar" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /buscar/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
