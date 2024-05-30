import './App.css';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route  path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
