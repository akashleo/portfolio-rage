import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Undo2, Sun, Moon, SunMoon, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, isUserControlled, resetToAutoTheme, backgroundEffect } = useTheme();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        hamburgerButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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

  const handleThemeRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isUserControlled) {
      resetToAutoTheme();
    }
  };

  // Liquid glass styles
  const liquidGlassStyle = {
    background: 'transparent',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: 'inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 3px 1px rgba(255, 255, 255, 0.7), 0 8px 32px rgba(0, 0, 0, 0.1)',
  };

  // Get background color based on theme and backgroundEffect
  const getMobileMenuBackgroundColor = () => {
    if (theme === 'light') {
      return backgroundEffect === 'clouds' ? '#87CEEB' : '#fdf5e0';
    } else if (theme === 'dusk') {
      return backgroundEffect === 'clouds' ? '#d2c4f4' : '#4E5481';
    } else { // dark
      return backgroundEffect === 'clouds' ? '#141852' : '#000000';
    }
  };

  // Mobile menu opaque styles
  const mobileMenuStyle = {
    backgroundColor: getMobileMenuBackgroundColor(),
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: 'inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 3px 1px rgba(255, 255, 255, 0.7), 0 8px 32px rgba(0, 0, 0, 0.1)'
  };

  // Get base text color based on theme
  const getBaseTextColor = () => {
    if (theme === 'light') return 'text-[#141852]';
    if (theme === 'dusk') return 'text-[#140B0B]';
    return 'text-[#fdf4dc]'; // dark theme
  };

  // Get hover text color based on theme
  const getHoverTextColor = () => {
    if (theme === 'light') return 'hover:text-[#141852]';
    if (theme === 'dusk') return 'hover:text-[#140B0B]';
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
      className={`sticky top-4 z-50 rounded-2xl mb-4 w-full transition-all duration-300 ${isMobileMenuOpen ? 'overflow-visible' : 'overflow-hidden'}`}
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
            
            {/* Desktop Navigation Items - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <a  
                href="https://docs.google.com/document/d/e/2PACX-1vT6y0ezUWJCUF-8WSbYxjmUzsniguKUH38ygnTMfz7fIIqNbHCg2s2JE6hhfQL3DcZYe8rw1I9KMJAO/pub"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold transition-all duration-300 ${getTextClass(false)}`}
              >
                resume
              </a>
              <Link 
                to="/blogs" 
                className={`font-bold transition-all duration-300 ${getTextClass(location.pathname === '/blogs')}`}
              >
                blogs
              </Link>
              
              <Link 
                to="/projects" 
                className={`font-bold transition-all duration-300 ${getTextClass(location.pathname === '/projects')}`}
              >
                projects
              </Link>
            </div>
            
            {/* Theme Toggle */}
            <div className="relative">
              <button 
                onClick={cycleTheme}
                onContextMenu={handleThemeRightClick}
                className={`font-bold ${getTextClass(false)} transition-all duration-300 relative`}
                aria-label="Toggle theme"
                title={isUserControlled ? `Current theme: ${theme} (manual) - Right-click to reset to auto` : `Current theme: ${theme} (auto)`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {theme === 'dark' && <Moon className="w-5 h-5" />}
                  {theme === 'light' && <Sun className="w-5 h-5" />}
                  {theme === 'dusk' && <SunMoon className="w-5 h-5" />}
                </div>
                {/* Small indicator for user-controlled theme */}
                {isUserControlled && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger Menu - Visible only on mobile */}
            <div className="md:hidden relative">
              <button 
                ref={hamburgerButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`font-bold ${getTextClass(false)} transition-all duration-300 relative`}
                aria-label="Toggle mobile menu"
                title="Open menu"
              >
                <img 
                  src="/hamburger.png" 
                  alt="Menu" 
                  className="w-5 h-5 object-contain"
                />
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileMenuOpen && (
                <div 
                  ref={mobileMenuRef}
                  className="absolute right-0 top-full mt-2 w-24 rounded-xl overflow-hidden z-50"
                  style={mobileMenuStyle}
                >
                  <div className="py-2">
                    <a  
                      href="https://docs.google.com/document/d/e/2PACX-1vT6y0ezUWJCUF-8WSbYxjmUzsniguKUH38ygnTMfz7fIIqNbHCg2s2JE6hhfQL3DcZYe8rw1I9KMJAO/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-4 py-2 font-bold transition-all duration-300 ${getTextClass(false)}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      resume
                    </a>
                    <Link 
                      to="/blogs" 
                      className={`block px-4 py-2 font-bold transition-all duration-300 ${getTextClass(location.pathname === '/blogs')}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      blogs
                    </Link>
                    
                    <Link 
                      to="/projects" 
                      className={`block px-4 py-2 font-bold transition-all duration-300 ${getTextClass(location.pathname === '/projects')}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      projects
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 