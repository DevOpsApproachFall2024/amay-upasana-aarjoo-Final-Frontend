import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Adjust the path
import axios from 'axios';

function Auth({ type }) {
  const { user, setUser } = useContext(AuthContext); // Added setUser here
  const navigate = useNavigate();
  const [error, setError] = useState('');

  if (user) {
    navigate('/quiz');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (type === 'register') {
      const confirmPassword = e.target.elements.confirmPassword.value;
      RegisterUser(email, password, confirmPassword);
    } else {
      LoginUser(email, password);
    }
  };

  const LoginUser = async (email, password) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/users/login',
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res.data && res.data.user) {
        setUser(res.data.user);
        navigate('/quiz');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login');
    }
  };

  const RegisterUser = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/users/register',
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res.data) {
        navigate('/login');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'An error occurred during registration',
      );
    }
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password'); // Navigate to forgot password page
  };

  const handleCreateNewAccountClick = () => {
    navigate('/register'); // Navigate to register page
  };

  const handleAlreadyHaveAccountClick = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* Left Section */}
      <div className="relative flex flex-col justify-center items-center w-1/2 p-8">
        <span className="absolute top-4 left-4 font-bold text-4xl text-gray-800">
          question mark
        </span>
        <div className="mt-16">
          <img
            src="/main.jpg"
            alt="main"
            className="w-10/12 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-1/2 bg-white">
        <form className="w-80 space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block font-bold text-gray-800 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-bold text-gray-800 mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          {type === 'register' && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-bold text-gray-800 mb-2">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-lime-400 text-black font-bold rounded-full py-3 hover:bg-lime-500 transition">
            {type === 'register' ? 'REGISTER' : 'SIGN IN'}
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {type !== 'register' ? (
            <div className="flex justify-between text-sm text-lime-700">
              <button
                type="button"
                className="hover:underline text-lime-700"
                onClick={handleForgotPasswordClick}>
                FORGOT PASSWORD
              </button>
              <button
                type="button"
                className="hover:underline text-lime-700"
                onClick={handleCreateNewAccountClick}>
                CREATE NEW ACCOUNT
              </button>
            </div>
          ) : (
            <div className="text-sm text-lime-700 text-center mt-4">
              <button
                type="button"
                className="hover:underline text-lime-700"
                onClick={handleAlreadyHaveAccountClick}>
                Already have an account? Sign In
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Auth;
