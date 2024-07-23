import React from 'react';

import '../App.css';
import ThemeSelector from './ThemeSelector';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme } = useTheme();
  return (
    <header className="header">
      <div className="header-content">
        <div className="title-container">
          <h1 className="site-title">Wubba Lubba Dub Dub!</h1>
          <p className="subtitle">Explore the infinite possibilities...</p>

          <ThemeSelector />
        </div>
        <div className="portal-image-container">
          {theme === 'dark' ? (
            <img
              src="/src/assets/rick-and-morty-31006.png"
              alt="Portal"
              className="portal-image"
            />
          ) : (
            <img
              src="/src/assets/mortyTheme.png"
              alt="Rick and Morty"
              className="portal-image"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
