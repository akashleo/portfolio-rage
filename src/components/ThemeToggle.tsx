import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button 
      onClick={cycleTheme}
      className={`px-4 py-2 ${
        theme === 'dark' 
          ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
      } rounded-lg transition-colors duration-200 flex items-center gap-2`}
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {theme === 'dark' && (
          <Moon className="w-5 h-5 absolute transition-all duration-300 transform scale-100 opacity-100" />
        )}
        {theme === 'light' && (
          <Sun className="w-5 h-5 absolute transition-all duration-300 transform scale-100 opacity-100" />
        )}
        {theme === 'system' && (
          <Monitor className="w-5 h-5 absolute transition-all duration-300 transform scale-100 opacity-100" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle; 