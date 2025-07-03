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
      setTheme('dusk');
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

  // Get base text color based on theme
  const getBaseTextColor = () => {
    if (theme === 'light') return 'text-[#141852]';
    if (theme === 'dusk') return 'text-[#6B4984]';
    return 'text-[#fdf4dc]'; // dark theme
  };

  // Get hover text color based on theme
  const getHoverTextColor = () => {
    if (theme === 'light') return 'hover:text-[#141852]';
    if (theme === 'dusk') return 'hover:text-[#6B4984]';
    return 'hover:text-[#fdf4dc]'; // dark theme
  };

  const baseTextColor = getBaseTextColor();
  const hoverTextColor = getHoverTextColor();

  // Determine text classes based on active state
  const getTextClass = (isActive: boolean) => {
    if (isActive) {
      return `${baseTextColor} drop-shadow-[0_0_8px_currentColor] opacity-100`;
    } else {
      return `${baseTextColor} opacity-70 ${hoverTextColor} hover:drop-shadow-[0_0_8px_currentColor] hover:opacity-100`;
    }
  };

  return (
    <nav 
      className="sticky top-4 z-50 rounded-2xl mb-4 w-full transition-all duration-300 overflow-hidden"
      style={liquidGlassStyle}
    >
      <div className="container mx-auto px-3 md:px-5">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo with home button */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="text-white font-bold text-xl cursor-pointer">
              <img src="/ag_logo.png" alt="logo" className="h-10 w-14 md:h-10 md:w-14" />
            </div>
            
            {/* Home button (only visible on non-home routes) */}
            {isNonHomeRoute && (
              <Link 
                to="/" 
                className={`font-bold ${getTextClass(false)} transition-all duration-300`}
                aria-label="Return to home"
                title="Return to home"
              >
                <Undo2 className="w-7 h-7" />
              </Link>
            )}
          </div>

          {/* Right side - Navigation items */}
          <div className="flex items-center gap-3 md:gap-3">

          <Link  
              to="/resume" 
              className={`font-bold transition-all duration-300 ${getTextClass(location.pathname === '/resume')}`}
            >
              _resume
            </Link>
            <Link 
              to="/blogs" 
              className={`font-bold transition-all duration-300 ${getTextClass(location.pathname === '/blogs')}`}
            >
              _blogs
            </Link>
            
            <Link 
              to="/projects" 
              className={`font-bold transition-all duration-300 ${getTextClass(location.pathname === '/projects')}`}
            >
              _projects
            </Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={cycleTheme}
              className={`font-bold ${getTextClass(false)} transition-all duration-300`}
              aria-label="Toggle theme"
              title={`Current theme: ${theme}`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {theme === 'dark' && <Moon className="w-5 h-5" />}
                {theme === 'light' && <Sun className="w-5 h-5" />}
                {theme === 'dusk' && <SunMoon className="w-5 h-5" />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 