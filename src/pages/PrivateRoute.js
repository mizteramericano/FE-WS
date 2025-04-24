// src/components/PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Component สำหรับตรวจสอบการเข้าถึง
const PrivateRoute = ({ element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));  // ดึงข้อมูลจาก localStorage

  // ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่ และเป็น Affiliator หรือเปล่า
  const isAffiliator = user && user.role === 'affiliator'; // ตรวจสอบ role

  return (
    <Route
      {...rest}
      element={isAffiliator ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
