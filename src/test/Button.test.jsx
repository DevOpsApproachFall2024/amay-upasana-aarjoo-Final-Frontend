// test for button component
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from 'src/components/Button';

describe('Button Component', () => {
  test('renders Button component without crashing', () => {
    render(<Button />);
    expect(screen.getByRole('button').textContent).toBe('Click me');
  });
});
