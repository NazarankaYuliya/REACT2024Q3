import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-selector">
      <button className="theme-button" onClick={() => toggleTheme()}>
        {theme === 'dark'
          ? "Switch to Morty's Universe"
          : "Switch to Rick's Dimension"}
      </button>
    </div>
  );
};

export default ThemeSelector;
