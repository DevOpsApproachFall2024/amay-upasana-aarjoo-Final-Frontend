import { useNavigate } from 'react-router-dom';

function Auth({ type }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleForgotPasswordClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleCreateNewAccountClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  const handleAlreadyHaveAccountClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* Left Section */}
      <div className="relative flex flex-col justify-center items-center w-1/2 p-8">
        {/* Question Mark at the Top-Left */}
        <span className="absolute top-4 left-4 font-bold text-4xl text-gray-800">
          question mark
        </span>

        {/* Image Centered */}
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
        <form className="w-80 space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block font-bold text-gray-800 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block font-bold text-gray-800 mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          {/* Conditional Field for "Register" */}
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
                placeholder="Confirm your password"
                className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 text-black font-bold rounded-full py-3 hover:bg-lime-500 transition">
            {type === 'register' ? 'REGISTER' : 'SIGN IN'}
          </button>

          {type !== 'register' ? (
            <div className="flex justify-between text-sm text-lime-700">
              <button
                className="hover:underline text-lime-700"
                onClick={handleForgotPasswordClick}>
                FORGOT PASSWORD
              </button>
              <button
                className="hover:underline text-lime-700"
                onClick={handleCreateNewAccountClick}>
                CREATE NEW ACCOUNT
              </button>
            </div>
          ) : (
            <div className="text-sm text-lime-700 text-center mt-4">
              <button
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
