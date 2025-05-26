import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  test('renders input field with placeholder', () => {
    render(<SearchInput cepInput="" setCepInput={() => {}} isEmptyField={false} hasError={false} />);
    const inputElement = screen.getByPlaceholderText(/Digite seu CEP/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls setCepInput on user input', () => {
    const mockSetCepInput = jest.fn();
    render(<SearchInput cepInput="" setCepInput={mockSetCepInput} isEmptyField={false} hasError={false} />);
    
    const input = screen.getByPlaceholderText(/Digite seu CEP/i);
    fireEvent.change(input, { target: { value: '12345678' } });

    expect(mockSetCepInput).toHaveBeenCalledWith('12345678');
  });

  test('shows empty field error message when isEmptyField is true', () => {
    render(<SearchInput cepInput="" setCepInput={() => {}} isEmptyField={true} hasError={false} />);
    expect(screen.getByText(/O campo está vazio!/i)).toBeInTheDocument();
  });

  test('shows error message when hasError is true', () => {
    render(<SearchInput cepInput="12345" setCepInput={() => {}} isEmptyField={false} hasError={true} />);
    expect(screen.getByText(/Erro ao buscar/i)).toBeInTheDocument();
  });
});
