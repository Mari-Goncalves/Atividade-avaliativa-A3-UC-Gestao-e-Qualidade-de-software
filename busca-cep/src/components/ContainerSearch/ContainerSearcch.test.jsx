import { render, screen, fireEvent } from '@testing-library/react';
import ContainerSearch from './ContainerSearch';
import '@testing-library/jest-dom';

describe('ContainerSearch component', () => {
  const mockSetInput = jest.fn();
  const mockSearchCEP = jest.fn();

  beforeEach(() => {
    mockSetInput.mockClear();
    mockSearchCEP.mockClear();
  });

  test('deve renderizar o input e o botão com os valores corretos', () => {
    render(
      <ContainerSearch
        cepInput="12345-678"
        setCepInput={mockSetInput}
        isEmptyField={false}
        error={false}
        handleSearchCep={mockSearchCEP}
      />
    );

    // Verifica input
    const inputElement = screen.getByPlaceholderText('Digite seu CEP');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('12345-678');

    // Verifica botão
    const buttonElement = screen.getByRole('button', { name: /pesquisar/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('deve chamar handleSearchCep ao clicar no botão', () => {
    render(
      <ContainerSearch
        cepInput=""
        setCepInput={mockSetInput}
        isEmptyField={false}
        error={false}
        handleSearchCep={mockSearchCEP}
      />
    );

    const buttonElement = screen.getByRole('button', { name: /pesquisar/i });
    fireEvent.click(buttonElement);

    expect(mockSearchCEP).toHaveBeenCalledTimes(1);
  });

  test('deve passar os erros corretamente para o SearchInput', () => {
    render(
      <ContainerSearch
        cepInput=""
        setCepInput={mockSetInput}
        isEmptyField={true}
        error={true}
        handleSearchCep={mockSearchCEP}
      />
    );

    expect(screen.getByText('O campo está vazio! Digite seu cep.')).toBeInTheDocument();
    expect(screen.getByText('Erro ao buscar. Tente novamente!')).toBeInTheDocument();
  });
});
