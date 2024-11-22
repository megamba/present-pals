import { ReactNode } from 'react';
import '../styles/RootLayout.css';

export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
}

