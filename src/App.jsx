import 'src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from 'src/views/LoginPage';
import RegisterPage from 'src/views/RegisterPage';
import HomePage from 'src/views/HomePage';
import CategoryPage from './views/CategoryPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/quiz" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
