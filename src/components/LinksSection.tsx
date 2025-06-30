import React from 'react';
import { Github, Twitter, Mail, MessageCircle, Linkedin, Settings } from 'lucide-react';

const LinksSection = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#', color: 'hover:text-white' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Gmail', icon: Mail, url: '#', color: 'hover:text-red-400' },
    { name: 'Discord', icon: MessageCircle, url: '#', color: 'hover:text-indigo-400' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Links Header */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h1 className="text-4xl font-bold text-white mb-4 ">LINKS.</h1>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`flex items-center justify-center p-3 bg-gray-800 rounded-lg transition-all duration-200 ${link.color} hover:bg-gray-700`}
            >
              <link.icon className="w-6 h-6 text-gray-400" />
            </a>
          ))}
        </div>
      </div>

      {/* Project Card */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-2">PROJECT</h3>
          <h4 className="text-3xl font-bold mb-4">SSS</h4>
          <div className="text-right">
            <span className="text-lg font-mono">工芸</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-4 translate-x-4" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-5 rounded-full translate-y-4 -translate-x-4" />
      </div>
    </div>
  );
};

export default LinksSection;