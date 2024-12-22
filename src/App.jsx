import 'src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from 'src/views/LoginPage';
import RegisterPage from 'src/views/RegisterPage';
import HomePage from 'src/views/HomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
