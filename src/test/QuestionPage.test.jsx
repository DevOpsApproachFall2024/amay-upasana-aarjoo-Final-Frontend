import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import QuestionPage from 'src/views/QuestionPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from 'src/context/AuthContext'; // Adjust based on your context path

// Mock the axios module
jest.mock('axios');

// Mock the window.alert function
global.alert = jest.fn();

describe('QuestionPage', () => {
  const mockQuestions = [
    {
      question: 'What is the teachers name?',
      correct_answer: 'Tony',
      incorrect_answers: ['Tany', 'Ton', 'Tim'],
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: { questions: mockQuestions },
    });
    axios.post.mockResolvedValue({ data: { message: 'Score submitted successfully' } });
  });

 
  const mockAuthContextValue = {
    setUser: jest.fn(),
  };

  test('handles API errors gracefully', async () => {
    axios.get.mockRejectedValue(new Error('Failed to load questions'));

    render(<QuestionPage />);

    await waitFor(() => screen.getByText('Failed to load questions. Please try again later.'));

    expect(screen.getByText('Failed to load questions. Please try again later.')).toBeInTheDocument();
  });



  // Add tests for the loading state
  test('displays loading text while fetching questions', () => {
    render(
      <MemoryRouter initialEntries={['/quiz/1']}>
        <AuthContext.Provider value={mockAuthContextValue}>
          <Routes>
            <Route path="/quiz/:id" element={<QuestionPage />} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading questions...')).toBeInTheDocument();
  });
});
