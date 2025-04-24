import React, {useState } from "react";
import { useAuth } from "../context/AuthContext";

const HotelDetail= () => {
  const { user } = useAuth();
  const [hotels] = useState([]);

  const handleClick = async (item) => {
    const now = Date.now();

    // ✅ เรียก Log Click API
    await fetch("http://localhost:8080/api/log-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        itemId: item.id,
        ref: user.email,
        clickTime: now
      })
    });

    // ✅ ไปยังลิงก์ปลายทาง
    const url = `${item.url}?ref=${user.email}&clickTime=${now}&itemId=${item.id}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>รายการโรงแรม</h2>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h4>{hotel.name}</h4>
          <button onClick={() => handleClick(hotel)}>👉 ไปยังบริการ</button>
        </div>
      ))}
    </div>
  );
};

export default HotelDetail;
