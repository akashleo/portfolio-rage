import React from 'react';
import { Github, Twitter, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LinksSection = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const linkBgClass = theme === 'dark'
    ? "bg-gray-800 hover:bg-gray-700"
    : "bg-gray-100 hover:bg-gray-200";
    
  const iconClass = theme === 'dark'
    ? "text-gray-400"
    : "text-gray-500";
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#', color: 'hover:text-white' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Gmail', icon: Mail, url: '#', color: 'hover:text-red-400' },
    { name: 'Discord', icon: MessageCircle, url: '#', color: 'hover:text-indigo-400' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <>
    <div className={`${bgClass} rounded-xl border`}>
      <div className='pt-6 px-6'>
      <h1 className={`text-6xl font-bold ${textClass} mb-4`}>links.</h1>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className={`flex items-center justify-center p-3 ${linkBgClass} rounded-lg transition-all duration-200 ${link.color}`}
          >
            <link.icon className={`w-6 h-6 ${iconClass}`} />
          </a>
        ))}
      </div>
      </div>
      <div className="flex justify-end rounded-br-xl -mt-8">
    <img 
      src="/raised-hands2.png" 
      alt="Raise Hands" 
      className="h-auto w-40 object-contain rounded-br-xl"
    />
  </div>
    </div>
   
  </>
  );
};

export default LinksSection;