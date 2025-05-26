import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import ContainerResultAddress from './ContainerResultAddress';

const mockData = {
  cep: '12345-678',
  estado: 'SP',
  localidade: 'São Paulo',
  logradouro: 'Rua Teste',
  bairro: 'Centro',
};

describe('ContainerResultAddress', () => {
  it('deve renderizar os dados de endereço corretamente', () => {
    render(<ContainerResultAddress addressData={mockData} />);

    expect(screen.getByText(/CEP:/i)).toBeInTheDocument();
    expect(screen.getByText('12345-678')).toBeInTheDocument();

    expect(screen.getByText(/Estado:/i)).toBeInTheDocument();
    expect(screen.getByText('SP')).toBeInTheDocument();

    expect(screen.getByText(/Cidade:/i)).toBeInTheDocument();
    expect(screen.getByText('São Paulo')).toBeInTheDocument();

    expect(screen.getByText(/Logradouro:/i)).toBeInTheDocument();
    expect(screen.getByText('Rua Teste')).toBeInTheDocument();

    expect(screen.getByText(/Bairro:/i)).toBeInTheDocument();
    expect(screen.getByText('Centro')).toBeInTheDocument();
  });
});