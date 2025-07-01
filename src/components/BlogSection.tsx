import React from 'react';
import { Book } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const BlogSection = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gradient-to-br from-green-600 to-green-800 text-white" 
    : "bg-neutral-100 text-[#141852]";
  
  const borderClass = theme === 'dark'
    ? ""
    : "border border-gray-300";
  
  return (
    <div className={`${bgClass} ${borderClass} p-6 rounded-xl relative overflow-hidden`}>
      <div className="relative z-10">
        <h3 className="text-6xl font-bold mb-2">blogs.</h3>
        <div className="text-right">
        <div className="flex justify-end mt-4">
        <img 
          src="/journal.gif" 
          alt="Journal" 
          className="h-auto w-24 object-contain rounded-br-xl"
        />
      </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-4 translate-x-4" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-5 rounded-full translate-y-4 -translate-x-4" />
     
    </div>
  );
};

export default BlogSection; 