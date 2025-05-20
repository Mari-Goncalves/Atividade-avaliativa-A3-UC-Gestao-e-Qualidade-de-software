import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import '@testing-library/jest-dom';

describe('SearchInput component', () => {
  test('deve renderizar o input com o valor fornecido', () => {
    render(<SearchInput input="12345-678" setInput={() => {}} campoVazio={false} erro={false} />);
    
    const inputElement = screen.getByPlaceholderText('Digite seu CEP');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('12345-678');
  });

  test('deve chamar setInput ao alterar o valor do input', () => {
    const mockSetInput = jest.fn();
    render(<SearchInput input="" setInput={mockSetInput} campoVazio={false} erro={false} />);
    
    const inputElement = screen.getByPlaceholderText('Digite seu CEP');
    fireEvent.change(inputElement, { target: { value: '98765-432' } });
    
    expect(mockSetInput).toHaveBeenCalledWith('98765-432');
  });

  test('deve exibir mensagem de campo vazio quando campoVazio for true', () => {
    render(<SearchInput input="" setInput={() => {}} campoVazio={true} erro={false} />);
    
    const alertElement = screen.getByText('O campo está vazio! Digite seu cep.');
    expect(alertElement).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro quando erro for true', () => {
    render(<SearchInput input="" setInput={() => {}} campoVazio={false} erro={true} />);
    
    const alertElement = screen.getByText('Erro ao buscar. Tente novamente!');
    expect(alertElement).toBeInTheDocument();
  });
});
