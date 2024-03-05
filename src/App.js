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
import OrderTable from './components/OrderTable';
import Basket from './components/Basket';
import OrderHistoryTable from './components/OrderHistoryTable';



function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="loginForm" element={<LoginPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Register" element={<Register />} />
        <Route path="LoadingPage" element={<FullLayout />} />
        <Route path="OrderTable" element={<OrderTable />} />
        <Route path="Basket" element={<Basket />} />
        <Route path="OrderHistoryTable" element={<OrderHistoryTable />} />

        
        
      </Routes>
      
    </div>
  );
}

export default App;
