import 'src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from 'src/views/LoginPage';
import RegisterPage from 'src/views/RegisterPage';
import HomePage from 'src/views/HomePage';
import CategoryPage from './views/CategoryPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import QuestionPage from 'src/views/QuestionPage';
import Tony from './views/Tony';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tony" element={<Tony />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <CategoryPage />
              </ProtectedRoute>
            }
          />
                    <Route
            path="/quiz/:id"
            element={
              <ProtectedRoute>
                <QuestionPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
