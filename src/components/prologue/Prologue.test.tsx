import React from 'react';
import { render, screen } from '@testing-library/react';
import Prologue from './Prologue';

describe('tests for Prologue component', () => {
  test('renders Prologue component', () => {
    render(<Prologue />);

    const element = screen.getByText('Prologue');

    expect(element).toBeInTheDocument();
  });

  test('input is displayed', () => {
    render(<Prologue />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  test('button is displayed', () => {
    render(<Prologue />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

});
