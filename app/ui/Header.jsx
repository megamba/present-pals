'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '../hooks/use-scroll';
import "../styles/Header.css";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  
  return (
    
    <div
      className={`header-container ${
        scrolled ? 'scrolled' : ''
      } ${selectedLayout ? 'selected-layout' : ''}`}>
      <div className="header-content">
        <div className="header-logo-container">
            <Link href="/" className="mobile-logo">
                <span className="header-logo-icon" />
                <span className="header-logo-text">Present Pals</span>
            </Link>
            <div className="desktop-icon">
                <div className="icon">
                    <span className="icon-text">HQ</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
