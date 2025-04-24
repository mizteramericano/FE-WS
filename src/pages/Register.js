import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    contacts: ['']
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormData(prev => ({
      ...prev,
      role,
      contacts: role === 'affiliator' ? [''] : []
    }));
  };

  const handleContactChange = (index, value) => {
    const updated = [...formData.contacts];
    updated[index] = value;
    setFormData(prev => ({ ...prev, contacts: updated }));
  };

  const addContact = () => {
    setFormData(prev => ({ ...prev, contacts: [...prev.contacts, ''] }));
  };

  const removeContact = (index) => {
    const updated = formData.contacts.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, contacts: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    console.log('📦 ข้อมูลสมัคร:', formData);
    alert('สมัครสมาชิกสำเร็จ (Mock)');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem' }}>
      <h2>สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: '1rem' }}>
          <label>ชื่อ:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>นามสกุล:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>อีเมล:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>รหัสผ่าน:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>ยืนยันรหัสผ่าน:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>บทบาท:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleRoleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="user">ผู้ใช้งานทั่วไป</option>
            <option value="affiliate">affiliate</option>
          </select>
        </div>

        {formData.role === 'affiliator' && (
          <div style={{ marginBottom: '1rem' }}>
            <label>ช่องทางการติดต่อ:</label>
            {formData.contacts.map((contact, index) => (
              <div key={index} style={{ display: 'flex', marginBottom: '0.5rem' }}>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => handleContactChange(index, e.target.value)}
                  placeholder={`ช่องทางที่ ${index + 1}`}
                  style={{ flex: 1, padding: '8px' }}
                />
                {formData.contacts.length > 1 && (
                  <button type="button" onClick={() => removeContact(index)} style={{ marginLeft: '0.5rem' }}>
                    ❌
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addContact}>➕ เพิ่มช่องทาง</button>
          </div>
        )}

        <button type="submit" style={{ padding: '10px 20px' }}>
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
};

export default Register;
