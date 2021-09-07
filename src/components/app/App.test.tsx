import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { debug } from 'console';

describe('tests for App component', () => {

  test('renders learn react link', () => {
    render(<App />);
    const element = screen.getByTestId('app');
    expect(element).toBeInTheDocument();
  });

  test('Prologue component renders when App first loads', () => {
    render(<App />);
    const element = screen.getByText('Prologue');
    expect(element).toBeInTheDocument();
  });
  
  test('Prologue component is replaced by Chapters component after button click', () => {
    render(<App />);
    const element1 = screen.getByText('Prologue');

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const element2 = screen.getByText('Chapters');
  
    expect(element1).not.toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });
});
