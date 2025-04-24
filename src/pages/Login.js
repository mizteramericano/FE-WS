import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
//import { loginApi } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // mock login แบบง่าย
  const handleLogin = (e) => {
    e.preventDefault();

    // จำลองการ login
    const mockUser = {
      a: { name: 'Alice', role: 'user', token: 'abc123' },
      b: { name: 'Bob', role: 'affiliate', token: 'xyz456' },
      c: { name: 'Carol', role: 'affiliator', token: 'def789' },
    };

    const userData = mockUser[username];

    if (userData && password === '1234') {
      login(userData);
      navigate('/hotels');
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };
  const goToRegister = () => {
    navigate('/register');
  };
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label>ชื่อผู้ใช้ (a, b, c):</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>รหัสผ่าน (พิมพ์: 1234):</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', marginTop: '1rem' }}>
          เข้าสู่ระบบ
        </button>
      </form>
        {/* ปุ่มสมัครสมาชิก */}
        <div style={{ marginTop: '1.5rem' }}>
          <button
            type="button"
            onClick={goToRegister}
            style={{ padding: '10px 20px' }}
          >
            สมัครสมาชิก
          </button>
        </div>
    </div>
  );
};

export default Login;
