import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const hotelData = [
  {
    id: 1,
    name: 'The Emerald Hotel',
    description: 'โรงแรมหรูใจกลางกรุงเทพฯ',
    image: './images/รร1.jpg',
  },
  {
    id: 2,
    name: 'Ocean Breeze Resort',
    description: 'รีสอร์ทติดทะเลบรรยากาศโรแมนติก',
    image: './images/รร2.jpg',
  },
  {
    id: 3,
    name: 'Mountain Escape',
    description: 'พักผ่อนท่ามกลางขุนเขาอันสงบ',
    image: './images/รร3.jpg',
  },
  {
    id: 4,
    name: 'City Light Hotel',
    description: 'โรงแรมทันสมัยใกล้แหล่งช็อปปิ้ง',
    image: './images/รร4.jpg',
  },
];

const HotelList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const copyLink = (hotelId) => {
    const baseUrl = `${window.location.origin}/checkout/${hotelId}`;
    const referral = user?.email || 'ref';
    const link = `${baseUrl}?ref=${encodeURIComponent(referral)}`;
    navigator.clipboard.writeText(link);
    alert(`ลิงก์ถูกคัดลอกแล้ว:\n${link}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🏨 โรงแรมแนะนำ</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {hotelData.map((hotel) => (
          <div key={hotel.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <img src={hotel.image} alt={hotel.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>

            {['affiliate', 'affiliator'].includes(user?.role) ? (
              <button onClick={() => copyLink(hotel.id)} style={{ padding: '8px 16px' }}>
                📎 คัดลอกลิงก์โปรโมต
              </button>
            ) : (
              <button onClick={() => navigate(`/checkout/${hotel.id}`)} style={{ padding: '8px 16px' }}>
                🛎 จองเลย
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
