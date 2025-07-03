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
            src="/pic14.jpg"
            alt="Galaxy"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>
        
        <div className="relative group cursor-pointer">
          <img
            src='/pic13.jpg'
            alt="Nebula"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>

        <div className="relative group cursor-pointer">
          <img
           src='/pic9.jpg'
           alt="Earth from space"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src='/pic4.jpg'
            alt="Planet surface"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg" />
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p className={`mb-1 ${secondaryTextClass}`}>what i do on weekends</p>
        <p className="text-xs text-gray-500">bike rides • cooking • concerts • guitar</p>
      </div>

      {/* Quote Section */}
      <div className={`mt-6 p-4 ${quoteBoxClass} rounded-lg`}>
        <p className={`${textClass} text-center italic`}>
          "You are what you believe in. You become that which you believe you can become."
        </p>
      </div>
    </div>
  );
};

export default MediaSection;