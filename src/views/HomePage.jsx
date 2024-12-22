import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 right-0 p-6">
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold text-green-600">
            <li className="cursor-pointer hover:text-green-800 transition-colors duration-200">
              DISCOVER
            </li>
            <li className="cursor-pointer hover:text-green-800 transition-colors duration-200">
              FAQ
            </li>
            <li className="cursor-pointer hover:text-green-800 transition-colors duration-200">
              CONTACT
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-center flex-grow px-6 lg:px-24 text-center lg:text-left">
        {/* Text Content */}
        <div className="mb-12 lg:mb-0 lg:mr-12">
          <h1 className="text-7xl font-bold text-black leading-tight">
            question mark
          </h1>
          <p className="mt-4 ml-2 text-4xl text-gray-600">
            think fast, play smart
          </p>
        </div>

        {/* Join Button */}
        <button
          onClick={handleJoinNow}
          className="px-12 py-4 bg-green-400 text-white text-lg font-bold rounded-3xl shadow-lg hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all">
          JOIN NOW
        </button>
      </main>
    </div>
  );
};

export default HomePage;
