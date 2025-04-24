// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา!</h1>
      <p>กรุณากดปุ่มด้านล่างเพื่อเข้าสู่ระบบ</p>
      <Link to="/login">
        <button>เข้าสู่ระบบ</button>
      </Link>
    </div>
  );
}

export default LandingPage;
