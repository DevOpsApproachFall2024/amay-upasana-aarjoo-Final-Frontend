import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from 'src/components/Navbar';
import axios from 'axios';

const QuestionPage = () => {
  const { id } = useParams(); 
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/quiz/${id}`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.data && res.data.questions) {
          const shuffledQuestions = res.data.questions.map((question) => {
            const allAnswers = shuffleArray([
              ...question.incorrect_answers,
              question.correct_answer,
            ]);
            return {
              ...question,
              allAnswers,
            };
          });

          setQuestions(shuffledQuestions);
        }
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError('Failed to load questions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleAnswerClick = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));

    if (answer === questions[questionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/quiz/results/${id}`, 
        { score }, 
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Score submitted successfully:', res.data);
      alert(`Quiz submitted! Your score is ${score}`);
    } catch (err) {
      console.error('Error submitting score:', err);
      alert('Failed to submit the quiz. Please try again.');
    }
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="px-8 lg:px-20 py-8">
        <div className="flex items-center mt-8">

          <h1 className="ml-4 text-2xl font-bold text-gray-800">
            <a href="/quiz" className="text-blue-500 hover:underline">
                Go Back
            </a>
          </h1>

        </div>

        <div className="mt-10 space-y-8">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {question.question}
              </h2>
              <div className="space-y-2">
                {question.allAnswers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(index, answer)}
                    className={`block w-full text-left rounded-md p-3 ${
                      selectedAnswers[index] === answer
                        ? answer === question.correct_answer
                          ? 'bg-green-100 border border-green-500'
                          : 'bg-red-100 border border-red-500'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}>
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          ))}

          
          <button
            onClick={handleSubmit}
            className="block w-full mt-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
