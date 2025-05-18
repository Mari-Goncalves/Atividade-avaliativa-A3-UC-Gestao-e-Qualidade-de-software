import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainContent from "./MainContent";

// Teste 1: Renderiza o campo de input
test("deve renderizar o campo de input", () => {
    render(<MainContent />);
    expect(screen.getByPlaceholderText(/Digite seu CEP/i)).toBeInTheDocument();
});

// Teste 2: Exibe mensagem de campo vazio ao tentar buscar sem valor
test("deve exibir mensagem de campo vazio ao clicar em Pesquisar sem digitar", () => {
    render(<MainContent />);
    fireEvent.click(screen.getByText(/Pesquisar/i));
    expect(screen.getByText(/O campo está vazio!/i)).toBeInTheDocument();
});

// Teste 3: Não exibe mensagem de erro inicialmente
test("não deve exibir mensagem de erro inicialmente", () => {
    render(<MainContent />);
    expect(screen.queryByText(/Erro ao buscar/i)).not.toBeInTheDocument();
});

// Teste 4: Exibe botão de pesquisar
test("deve exibir o botão Pesquisar", () => {
    render(<MainContent />);
    expect(screen.getByText(/Pesquisar/i)).toBeInTheDocument();
});

// Teste 5: Permite digitar no input
test("deve permitir digitar no input", () => {
    render(<MainContent />);
    const input = screen.getByPlaceholderText(/Digite seu CEP/i);
    fireEvent.change(input, { target: { value: "01001-000" } });
    expect(input.value).toBe("01001-000");
});
