import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const hotelData = [
  {
    id: 1,
    name: 'The Emerald Hotel',
    description: 'โรงแรมหรูใจกลางกรุงเทพฯ',
    image: './images/รร1.jpg',
    price: 2800
  },
  {
    id: 2,
    name: 'Ocean Breeze Resort',
    description: 'รีสอร์ทติดทะเลบรรยากาศโรแมนติก',
    image: './images/รร2.jpg',
    price: 3500
  },
  {
    id: 3,
    name: 'Mountain Escape',
    description: 'พักผ่อนท่ามกลางขุนเขาอันสงบ',
    image: './images/รร3.jpg',
    price: 2200
  },
  {
    id: 4,
    name: 'City Light Hotel',
    description: 'โรงแรมทันสมัยใกล้แหล่งช็อปปิ้ง',
    image: './images/รร2.jpg',
    price: 3000
  }
];

const Checkout = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const hotel = hotelData.find((h) => h.id === parseInt(hotelId));

  if (!hotel) return <p>ไม่พบข้อมูลโรงแรม</p>;

  const handlePayment = () => {
    alert(`🧾 ชำระเงินสำเร็จสำหรับ: ${hotel.name}`);
    navigate('/hotels');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2>💳 ชำระเงิน</h2>
      <img src={hotel.image} alt={hotel.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
      <p><strong>ราคา:</strong> {hotel.price.toLocaleString()} บาท</p>

      <button onClick={handlePayment} style={{ padding: '10px 20px', marginTop: '1rem' }}>
        ✅ ชำระเงินตอนนี้
      </button>
    </div>
  );
};

export default Checkout;
