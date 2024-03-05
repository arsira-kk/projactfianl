import logo from './logo.svg';
import {
  Routes,
  Route
} from "react-router-dom";

import Profile from './components/LoginForm/Profile';
import Register from './components/LoginForm/Register';
import './App.css';
import LoginPage from './components/LoginForm/LoginForm';
import FullLayout from './components/Layout';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="loginForm" element={<LoginPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Register" element={<Register />} />
        <Route path="LoadingPage" element={<FullLayout />} />
      </Routes>
      
    </div>
  );
}

export default App;
