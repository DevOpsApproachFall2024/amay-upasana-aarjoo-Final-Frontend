import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const logout = async () => {
    await axios.post(
      'http://localhost:5000/api/users/logout',
      {},
      { withCredentials: true },
    );
    setUser(null);
    navigate('/login');
  };
  return (
    <header className="flex justify-between items-center border-b pb-4">
      <h1 className="text-5xl font-bold">question mark</h1>
      <nav className="space-x-10">
        <a href="/home" className="text-green-600 text-2xl ">
          HOME
        </a>
        <a href="/profile" className="text-green-600 text-2xl ">
          PROFILE
        </a>
        <a href="/leaderboard" className="text-green-600 text-2xl ">
          LEADERBOARD
        </a>
        <button onClick={logout} className="text-green-600 text-2xl ">
          LOGOUT
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
