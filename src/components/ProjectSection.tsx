import React from 'react';
import { Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProjectSection = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white" 
    : theme === 'dusk'
    ? "bg-gradient-to-br from-purple-300 to-purple-500 text-white"
    : "bg-gradient-to-br from-purple-100 to-purple-300 text-[#141852]";
  
  const borderClass = theme === 'dark'
    ? ""
    : "border border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-gray-200"
    : theme === 'dusk'
    ? "text-gray-100"
    : "text-gray-700";
  
  // Project items
  const projects = [
    {
      title: "Hoplist",
      tech: "React, CSS"
    },
    {
      title: "EmoQuiz",
      tech: "MERN, Ant design, GCP"
    },
    {
      title: "Dad-jokes explained",
      tech: "React , Dad jokes API, OpenAI Api"
    }
  ];
  
  return (
    <div className={`${bgClass} ${borderClass} p-6 rounded-xl relative overflow-hidden`}>
      <div className="relative z-10">
        <h3 className="text-6xl font-bold mb-4">projects.</h3>
        
        {/* Projects list aligned left */}
        <ul className="text-left mb-4">
          {projects.map((project, index) => (
            <li key={index} className="mb-2 last:mb-0">
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="font-medium">{project.title}</div>
                <div className={`text-xs ${textClass}`}>{project.tech}</div>
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-end">
          <img 
            src="/gears2.gif" 
            alt="Gears" 
            className="h-auto w-20 object-contain rounded-br-xl"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-4 translate-x-4" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-5 rounded-full translate-y-4 -translate-x-4" />
    </div>
  );
};

export default ProjectSection; 