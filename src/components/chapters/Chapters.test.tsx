import React from 'react';
import { render, screen } from '@testing-library/react';
import Chapters from './Chapters';
import { MemoryRouter } from 'react-router';

describe('tests for Chapters component', () => {

  test('renders Chapters component', () => {
    render(
      <MemoryRouter>
        <Chapters userName="Franco" />
      </MemoryRouter>
    );

    const element = screen.getByText('Chapters');

    expect(element).toBeInTheDocument();
  });

});
