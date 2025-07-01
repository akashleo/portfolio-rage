import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Determine the shadow class based on theme and scroll state
  const shadowClass = scrolled 
    ? theme === 'dark' 
      ? 'shadow-[0_0_15px_rgba(59,130,246,0.5)] border-blue-500/30' 
      : 'shadow-lg border-gray-300'
    : 'border-gray-800/50';

  // Determine the background class based on theme and scroll state
  const bgClass = theme === 'dark'
    ? scrolled ? 'bg-gray-900/80' : 'bg-gray-900/70'
    : scrolled ? 'bg-white/80' : 'bg-white/70';

  return (
    <nav 
      className={`sticky top-4 z-10 backdrop-blur-md ${bgClass} border ${shadowClass} rounded-xl mb-4 w-full transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="text-white font-bold text-xl cursor-pointer">
            <img src="/ag_logo.png" alt="logo" className="h-20 w-20" />
          </div>

          {/* Right side - Navigation buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-4 py-2 ${
                location.pathname === '/' 
                  ? theme === 'dark' 
                    ? 'text-white bg-gray-800/50' 
                    : 'text-gray-900 bg-gray-200/50'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              } rounded-lg transition-colors duration-200`}
            >
              _home
            </Link>
            <Link 
              to="/blogs" 
              className={`px-4 py-2 ${
                location.pathname === '/blogs' 
                  ? theme === 'dark' 
                    ? 'text-white bg-gray-800/50' 
                    : 'text-gray-900 bg-gray-200/50'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              } rounded-lg transition-colors duration-200`}
            >
              _blogs
            </Link>
            <Link 
              to="/projects" 
              className={`px-4 py-2 ${
                location.pathname === '/projects' 
                  ? theme === 'dark' 
                    ? 'text-white bg-gray-800/50' 
                    : 'text-gray-900 bg-gray-200/50'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              } rounded-lg transition-colors duration-200`}
            >
              _projects
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 