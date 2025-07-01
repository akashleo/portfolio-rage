import React from 'react';
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ProjectsPreview = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const linkClass = theme === 'dark'
    ? "text-blue-400 hover:text-blue-300"
    : "text-blue-600 hover:text-blue-700";
    
  const cardBgClass = theme === 'dark'
    ? "bg-gray-800 hover:bg-gray-700"
    : "bg-gray-50 hover:bg-gray-100";
    
  const cardTextClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const descriptionClass = theme === 'dark'
    ? "text-gray-300"
    : "text-gray-600";
    
  const tagClass = theme === 'dark'
    ? "bg-gray-700 text-gray-300"
    : "bg-gray-200 text-gray-700";
    
  const iconClass = theme === 'dark'
    ? "text-gray-400 hover:text-white"
    : "text-gray-500 hover:text-[#141852]";
  
  const projects = [
    {
      name: 'Portfolio Dashboard',
      description: 'A modern portfolio dashboard with glassmorphism design',
      tech: ['React', 'TypeScript', 'Tailwind'],
      stars: 42,
    },
    {
      name: 'API Gateway',
      description: 'Microservices API gateway with rate limiting',
      tech: ['Node.js', 'Express', 'Redis'],
      stars: 28,
    },
  ];

  return (
    <div className={`${bgClass} p-6 rounded-xl border`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-xl font-bold ${textClass}`}>FEATURED PROJECTS.</h3>
        <Link to="/projects" className={`flex items-center ${linkClass} transition-colors`}>
          <span className="text-sm mr-1">View all</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 ${cardBgClass} rounded-lg transition-colors duration-200`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className={`${cardTextClass} font-semibold`}>{project.name}</h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{project.stars}</span>
                </div>
                <ExternalLink className={`w-4 h-4 ${iconClass} cursor-pointer`} />
                <Github className={`w-4 h-4 ${iconClass} cursor-pointer`} />
              </div>
            </div>
            <p className={`${descriptionClass} text-sm mb-3`}>{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 ${tagClass} text-xs rounded-md`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPreview; 