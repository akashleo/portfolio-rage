import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Undo2, Sun, Moon, SunMoon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
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

  // Check if we're on a non-home route
  const isNonHomeRoute = location.pathname !== '/';

  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  // Liquid glass styles
  const liquidGlassStyle = {
    background: 'transparent',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: 'inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 3px 1px rgba(255, 255, 255, 0.7), 0 8px 32px rgba(0, 0, 0, 0.1)',
  };

  // Determine text shadow based on theme
  const getTextShadowClass = (isActive: boolean) => {
    if (isActive) {
      return theme === 'dark'
        ? 'text-warm-white drop-shadow-[0_0_8px_rgba(255,248,220,0.8)]'
        : 'text-[#87CEEB] drop-shadow-[0_0_8px_rgba(135,206,235,0.8)]';
    } else {
      return theme === 'dark'
        ? 'text-gray-400 hover:text-warm-white hover:drop-shadow-[0_0_8px_rgba(255,248,220,0.8)]'
        : 'text-gray-400 hover:text-[#87CEEB] hover:drop-shadow-[0_0_8px_rgba(135,206,235,0.8)]';
    }
  };

  return (
    <nav 
      className="sticky top-4 z-50 rounded-2xl mb-4 w-full transition-all duration-300 overflow-hidden ${bgClass} border ${shadowClass}"
      style={liquidGlassStyle}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo with home button */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="text-white font-bold text-xl cursor-pointer">
              <img src="/ag_logo.png" alt="logo" className="h-16 w-16 md:h-20 md:w-20" />
            </div>
            
            {/* Home button (only visible on non-home routes) */}
            {isNonHomeRoute && (
              <Link 
                to="/" 
                className={`font-bold ${getTextShadowClass(false)} transition-all duration-300`}
                aria-label="Return to home"
                title="Return to home"
              >
                <Undo2 className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Right side - Navigation items */}
          <div className="flex items-center gap-3 md:gap-3">

          <Link  
              to="/resume" 
              className={`font-bold transition-all duration-300 ${getTextShadowClass(location.pathname === '/blogs')}`}
            >
              _resume
            </Link>
            <Link 
              to="/blogs" 
              className={`font-bold transition-all duration-300 ${getTextShadowClass(location.pathname === '/blogs')}`}
            >
              _blogs
            </Link>
            
            <Link 
              to="/projects" 
              className={`font-bold transition-all duration-300 ${getTextShadowClass(location.pathname === '/projects')}`}
            >
              _projects
            </Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={cycleTheme}
              className={`font-bold ${getTextShadowClass(false)} transition-all duration-300`}
              aria-label="Toggle theme"
              title={`Current theme: ${theme === 'system' ? 'dusk' : theme}`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {theme === 'dark' && <Moon className="w-5 h-5" />}
                {theme === 'light' && <Sun className="w-5 h-5" />}
                {theme === 'system' && <SunMoon className="w-5 h-5" />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 