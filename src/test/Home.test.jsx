import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import HomePage from 'src/views/HomePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('HomePage', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    // Check if text content is rendered
    expect(screen.getByText('question mark')).toBeInTheDocument();
    expect(screen.getByText('think fast, play smart')).toBeInTheDocument();

    // Check if button is rendered
    const joinNowButton = screen.getByRole('button', { name: /join now/i });
    expect(joinNowButton).toBeInTheDocument();
  });

  it('navigates to /register on "JOIN NOW" button click', async () => {
    const navigate = jest.fn();
    jest
      .mocked(require('react-router-dom').useNavigate)
      .mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const joinNowButton = screen.getByRole('button', { name: /join now/i });
    expect(joinNowButton).toBeInTheDocument();
    await userEvent.click(joinNowButton);

    expect(navigate).toHaveBeenCalledWith('/register');
  });
});
