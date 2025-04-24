import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import HotelList from './pages/HotelDetail';
import Checkout from './pages/Checkout';
import AffiliatorPage from './pages/AffiliatorPage';
const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="/checkout/:hotelId" element={<Checkout />} />
      <Route path="/affiliator" element={<AffiliatorPage />} />
    </Routes>
  );
};

export default App;
