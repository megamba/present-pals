'use client';

import React, { useState } from 'react';
import "../styles/Claimed.css";

const Claimed = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);

  // Mock data for claimed items
  const claimedItems = [
    {
      id: 1,
      image: '/logo.png',
      title: 'Extraction Cleaner thanks for helping you actually suck so bad so i am kicking you off this project and i hope ur happy and im glad you are just talking to yourself you are so lame its actually insane...... hopefully this is long enough',
      price: '$100',
      giftFor: 'Nathan',
    },
    {
      id: 2,
      image: '/logo.png',
      title: 'Drivers License',
      price: '$200',
      giftFor: 'Kelly',
    },
    {
      id: 3,
      image: '/logo.png',
      title: 'Perfume',
      price: '$95',
      giftFor: 'Jackie',
    },
  ];

  // Handle checkbox toggle
  const togglePurchased = (id) => {
    if (purchasedItems.includes(id)) {
      setPurchasedItems(purchasedItems.filter(item => item !== id)); // Uncheck
    } else {
      setPurchasedItems([...purchasedItems, id]); // Check
    }
  };

  return (
    <div className="claimed-container">
      <h1 className="claimed-title">Claimed Items</h1>
      <div className="claimed-items">
        {claimedItems.map((item) => (
          <div key={item.id} className="claimed-item">
            <img src={item.image} alt={item.title} className="claimed-item-image" />
            <div className="claimed-item-details">
              <h2 className="claimed-item-title">{item.title}</h2>
              <div className="claimed-item-gift-for">{item.giftFor}
                <span className="claimed-item-price"> • {item.price}</span>
              </div>
            </div>
            <div className="item-buy-button">BUY</div>

            {/* Checkbox */}
            <div className="radio-button">
              <input
                type="checkbox"
                name={`purchased-${item.id}`}
                value={item.id}
                checked={purchasedItems.includes(item.id)}
                onChange={() => togglePurchased(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claimed;




