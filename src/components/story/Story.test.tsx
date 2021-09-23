import React from 'react';
import { render, screen } from '@testing-library/react';
import Story from './Story';
import { MemoryRouter } from 'react-router';

describe('tests for Story component', () => {

  test('renders Story component', () => {
    render(
      <MemoryRouter>
        <Story userName="Franco" />
      </MemoryRouter>
    );

    const element = screen.getByText('Your story...');

    expect(element).toBeInTheDocument();
  });

});
