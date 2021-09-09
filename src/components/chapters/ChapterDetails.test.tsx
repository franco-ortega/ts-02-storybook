import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

describe('tests for ChapterDetails component', () => {
  test('render ChapterDetails component on screen', () => {
    render(<ChapterDetails userData={{}} />);

    const element = screen.getByText('Choose your words wisely.')

    expect(element).toBeInTheDocument();
  });

  test('render list of choices', () => {
    render(<ChapterDetails userData={{}} />);

    const list = screen.getAllByRole('li')

    expect(list).toBeInTheDocument();
    expect(list.length).toBe(4);
  });

  test('ChapterDetails will not be on screen after user choice is submitted', () => {
    render(<ChapterDetails userData={{}} />);

    const element = screen.getByText('Choose your words wisely.')

    const button = screen.getByRole('button')

    fireEvent.click(button);

    expect(element).not.toBeInTheDocument();
  });
});
