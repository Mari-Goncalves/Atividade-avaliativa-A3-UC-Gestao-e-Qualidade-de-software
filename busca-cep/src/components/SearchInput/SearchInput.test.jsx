import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import '@testing-library/jest-dom';

describe('SearchInput component', () => {
  test('deve renderizar o input com o valor fornecido', () => {
    render(<SearchInput input="12345-678" setCepInput={() => {}} isEmptyField={false} error={false} />);
    
    const inputElement = screen.getByPlaceholderText('Digite seu CEP');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('12345-678');
  });

  test('deve chamar setCepInput ao alterar o valor do input', () => {
    const mockSetInput = jest.fn();
    render(<SearchInput input="" setCepInput={mockSetInput} isEmptyField={false} error={false} />);
    
    const inputElement = screen.getByPlaceholderText('Digite seu CEP');
    fireEvent.change(inputElement, { target: { value: '98765-432' } });
    
    expect(mockSetInput).toHaveBeenCalledWith('98765-432');
  });

  test('deve exibir mensagem de campo vazio quando isEmptyField for true', () => {
    render(<SearchInput input="" setCepInput={() => {}} isEmptyField={true} error={false} />);
    
    const alertElement = screen.getByText('O campo está vazio! Digite seu cep.');
    expect(alertElement).toBeInTheDocument();
  });

  test('deve exibir mensagem de error quando error for true', () => {
    render(<SearchInput input="" setCepInput={() => {}} isEmptyField={false} error={true} />);
    
    const alertElement = screen.getByText('Erro ao buscar. Tente novamente!');
    expect(alertElement).toBeInTheDocument();
  });
});
