import React from 'react';
import '../styles/RootLayout.css';

export default function MarginWrapper({ children }) {
  return (
    <div className="margin-width-wrapper">
      {children}
    </div>
  );
}
