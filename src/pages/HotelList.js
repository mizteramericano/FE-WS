import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HotelList = () => {
  const { user } = useAuth();
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/hotels?q=Ueno", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            Referer: "https://youraffiliatepage.com"
          }
        });

        const data = await res.json();
        setHotels(data.hotels);
      } catch (err) {
        console.error("โหลดโรงแรมไม่ได้", err);
      }
    };

    if (user?.token) fetchHotels();
  }, [user]);

  const handleClick = async (hotel) => {
    const now = Date.now();

    await fetch("http://localhost:8080/api/log-click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        itemId: hotel.id,
        ref: user.email,
        clickTime: now
      })
    });

    const url = `${hotel.url}?ref=${user.email}&clickTime=${now}&itemId=${hotel.id}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🏨 โรงแรมสำหรับโปรโมต</h2>
      {hotels.length === 0 ? (
        <p>กำลังโหลด...</p>
      ) : (
        hotels.map((hotel) => (
          <div key={hotel.id} style={{ marginBottom: "1rem" }}>
            <h3>{hotel.name}</h3>
            <button onClick={() => handleClick(hotel)}>📎 ไปยังบริการ</button>
          </div>
        ))
      )}
    </div>
  );
};

export default HotelList;
