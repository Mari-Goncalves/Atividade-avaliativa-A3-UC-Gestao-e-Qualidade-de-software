import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import SearchButton from './SearchButton';

describe('SearchButton component', () => {
  it('renders the button with the correct text', () => {
    render(<SearchButton buttonText="Search" onClick={() => {}} />);
    const buttonElement = screen.getByText(/search/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<SearchButton buttonText="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has the correct class name', () => {
    render(<SearchButton buttonText="Test" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('buttonSearch');
  });
});
