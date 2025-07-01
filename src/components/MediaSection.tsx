import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MediaSection = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const secondaryTextClass = theme === 'dark'
    ? "text-gray-400"
    : "text-gray-600";
    
  const quoteBoxClass = theme === 'dark'
    ? "bg-gray-800"
    : "bg-gray-100";

  return (
    <div className={`${bgClass} p-6 rounded-xl border`}>
      <div className="grid grid-cols-2 gap-4">
        {/* Astronomical Images */}
        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=400"
            alt="Galaxy"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>
        
        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Nebula"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=400"
            alt="Earth from space"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Planet surface"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p className={`mb-1 ${secondaryTextClass}`}>Serendipitously Discovered Asteroids</p>
        <p className="text-xs text-gray-500">Kepler Sar • Telescope • Asteroids • 1998-03-16</p>
      </div>

      {/* Quote Section */}
      <div className={`mt-6 p-4 ${quoteBoxClass} rounded-lg`}>
        <p className={`${textClass} text-center italic`}>
          "I'm gonna be Hokage one day."
        </p>
        <div className="mt-2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=100"
            alt="Avatar"
            className="w-12 h-12 rounded-full border-2 border-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaSection;