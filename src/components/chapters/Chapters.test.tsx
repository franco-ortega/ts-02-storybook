import React from 'react';
import { render, screen } from '@testing-library/react';
import Chapters from './Chapters';

describe('tests for Chapters component', () => {

  test('renders Chapters component', () => {
    render(<Chapters />);

    const element = screen.getByText('Chapters');

    expect(element).toBeInTheDocument();
  });

});
