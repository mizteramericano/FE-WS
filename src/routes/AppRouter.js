// services/authService.js
import axios from 'axios';

const API_BASE = 'https://your-api.com/api'; // 🔁 เปลี่ยนเป็น API จริงของคุณ

export const loginApi = async (username, password) => {
  const res = await axios.post(`${API_BASE}/login`, { username, password });
  return res.data;
};

export const registerApi = async (username, password, role) => {
  const res = await axios.post(`${API_BASE}/register`, { username, password, role });
  return res.data;
};
