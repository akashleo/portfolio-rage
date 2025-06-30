import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-10 backdrop-blur-md bg-gray-900/70 border border-gray-800/50 rounded-xl mb-4 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="text-white font-bold text-xl cursor-pointer">
            <img src="/ag_logo.png" alt="logo" className="h-20 w-20" />
          </div>

          {/* Right side - Navigation buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
              _blogs
            </button>
            <button className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
              _projects
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 