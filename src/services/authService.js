// services/authService.js
import axios from 'axios';

const API_BASE = 'https://your-api.com/api'; // 👈 เปลี่ยนเป็น URL ของ backend จริง

// ฟังก์ชัน login
export const loginApi = async (username, password) => {
  const res = await axios.post(`${API_BASE}/login`, { username, password });
  return res.data; // คาดว่าได้ { token, role, name } กลับมา
};

// ฟังก์ชัน register
export const registerApi = async (username, password, role) => {
  const res = await axios.post(`${API_BASE}/register`, {
    username,
    password,
    role,
  });
  return res.data;
};
