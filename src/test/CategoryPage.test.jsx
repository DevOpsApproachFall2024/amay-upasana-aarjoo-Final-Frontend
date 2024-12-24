import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import CategoryPage from 'src/views/CategoryPage';

jest.mock('axios');
// mocking console.log
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
beforeAll(() => {
  console.log = jest.fn();
  console.error = jest.fn();
});
afterAll(() => {
  console.log = originalConsoleLog;
  console.error = originalConsoleError;
});
jest.mock('src/components/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('src/components/Category', () => ({ name, picture, id }) => (
  <div
    data-testid="category"
    data-name={name}
    data-picture={picture}
    data-id={id}>
    {name}
  </div>
));

describe('CategoryPage', () => {
  it('renders Navbar and fetches and displays categories', async () => {
    // Mock API response
    const mockResponse = [
      {
        questions: [{ category: 'Science' }],
        _id: '1',
      },
      {
        questions: [{ category: 'History' }],
        _id: '2',
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockResponse });

    render(<CategoryPage />);

    // Verify Navbar is rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    // Wait for categories to load and display
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        'http://localhost:5000/api/quiz/',
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        },
      ),
    );

    // Verify that the categories are displayed
    const categories = screen.getAllByTestId('category');
    expect(categories).toHaveLength(2);
    expect(categories[0]).toHaveTextContent('Science');
    expect(categories[1]).toHaveTextContent('History');
  });

  it('handles API errors gracefully', async () => {
    // Mock API error
    axios.get.mockRejectedValueOnce(new Error('Network error'));

    render(<CategoryPage />);

    // Verify that an error doesn't break the page (2 cause of strict mode)
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

    // Ensure no category is rendered if there's an API error
    expect(screen.queryByTestId('category')).not.toBeInTheDocument();
  });
});
