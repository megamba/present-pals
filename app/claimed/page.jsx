'use client';

import React from 'react';
import "../styles/Claimed.css";

const Claimed = () => {
  // Mock data for claimed items
  const claimedItems = [
    {
      id: 1,
      image: '/logo.png',
      title: 'Bluetooth Speaker',
      price: '$50',
      giftFor: 'John Doe',
    },
    {
      id: 2,
      image: '/logo.png',
      title: 'Noise Cancelling Headphones',
      price: '$200',
      giftFor: 'Jane Smith',
    },
    {
      id: 3,
      image: '/logo.png',
      title: 'Smartwatch',
      price: '$150',
      giftFor: 'Chris Johnson',
    },
  ];

  return (
    <div className="claimed-container">
      <h1 className="claimed-title">Claimed Items</h1>
      <div className="claimed-items">
        {claimedItems.map((item) => (
          <div key={item.id} className="claimed-item">
            <img src={item.image} alt={item.title} className="claimed-item-image" />
            <div className="claimed-item-details">
              <h2 className="claimed-item-title">{item.title}</h2>
              <p className="claimed-item-price">{item.price}</p>
              <p className="claimed-item-gift-for">Gift for: {item.giftFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claimed;
