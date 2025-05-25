import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContainerResultAddress from './ContainerResultAddress';


describe('ContainerResultAddress', () => {
  const mockData = {
    cep: '12345-678',
    estado: 'SP',
    localidade: 'São Paulo',
    logradouro: 'Rua das Flores',
    bairro: 'Centro',
  };

  it('deve renderizar os dados de endereço corretamente', () => {
    render(<ContainerResultAddress addressData={mockData} />);

    expect(screen.getByText('CEP:')).toBeInTheDocument();
    expect(screen.getByText('12345-678')).toBeInTheDocument();

    expect(screen.getByText('Estado:')).toBeInTheDocument();
    expect(screen.getByText('SP')).toBeInTheDocument();

    expect(screen.getByText('Cidade:')).toBeInTheDocument();
    expect(screen.getByText('São Paulo')).toBeInTheDocument();

    expect(screen.getByText('Logradouro:')).toBeInTheDocument();
    expect(screen.getByText('Rua das Flores')).toBeInTheDocument();

    expect(screen.getByText('Bairro:')).toBeInTheDocument();
    expect(screen.getByText('Centro')).toBeInTheDocument();
  });
});
