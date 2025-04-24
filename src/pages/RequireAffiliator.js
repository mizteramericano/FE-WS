import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAffiliator = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  // เช็กว่าผู้ใช้ล็อกอิน และเป็น affiliator
  if (!user || user.role !== 'affiliator') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAffiliator;