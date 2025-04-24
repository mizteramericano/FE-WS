import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AffiliatorPage = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //mock
  useEffect(() => {
    if (user?.role === 'affiliator') {
      // ✅ จำลองข้อมูล
      const mockData = [
        {
          id: 101,
          name: 'จองตั๋วเครื่องบินราคาพิเศษ',
          description: 'บริการจองตั๋วจาก TravelGo',
          link: 'https://travelgo.com/flight'
        },
        {
          id: 102,
          name: 'โรงแรมดีราคาถูก',
          description: 'ดีลพิเศษจาก HotelMax',
          link: 'https://hotelmax.com/hotels'
        }
      ];
  
      setItems(mockData);
      setLoading(false);
    }
  }, [user]);

  const handleClick = (item) => {
    const ref = encodeURIComponent(user?.email || 'ref');
    const clickTime = Date.now();
    const targetUrl = `${item.link}?ref=${ref}&clickTime=${clickTime}&itemId=${item.id}`;

    // ✅ บันทึก log (ตัวอย่าง)
    fetch('https://api.example.com/affiliate/log-click', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ref: user.email,
        itemId: item.id,
        clickTime: clickTime
      })
    });

    // ✅ ส่งผู้ใช้ไปยังหน้าเป้าหมาย
    window.open(targetUrl, '_blank');
  };

  if (loading) return <p>กำลังโหลดข้อมูล...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔗 รายการ Affiliate สำหรับผู้ให้บริการ (Affiliator)</h2>
      {items.length === 0 ? (
        <p>ไม่พบข้อมูล</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <button onClick={() => handleClick(item)} style={{ padding: '8px 16px' }}>
                👉 ไปยังบริการ
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AffiliatorPage;
