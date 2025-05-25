import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa matchers como toBeInTheDocument
import Title from './Title';

describe('Title', () => {
  it('deve renderizar o título corretamente', () => {
    render(<Title titleValue="Título de Teste" />);
    
    const heading = screen.getByRole('heading', { name: 'Título de Teste' });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1'); // Confirma que é um <h1>
    expect(heading).toHaveClass('mainTitle'); // Confirma que tem a classe CSS correta
  });
});
