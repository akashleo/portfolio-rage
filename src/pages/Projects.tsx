import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
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
      description: 'A modern portfolio dashboard with glassmorphism design and dynamic theme system',
      tech: ['React', 'TypeScript', 'Tailwind'],
      stars: 42,
      github: 'https://github.com/akashghosh/portfolio',
      live: 'https://akashghosh.xyz'
    },
    {
      name: 'API Gateway',
      description: 'Microservices API gateway with rate limiting and authentication',
      tech: ['Node.js', 'Express', 'Redis'],
      stars: 28,
      github: 'https://github.com/akashghosh/api-gateway',
      live: 'https://api.akashghosh.xyz'
    },
    {
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      stars: 35,
      github: 'https://github.com/akashghosh/ecommerce',
      live: 'https://shop.akashghosh.xyz'
    },
    {
      name: 'Chat Application',
      description: 'Real-time chat application with WebSocket support',
      tech: ['React', 'Socket.io', 'Express'],
      stars: 19,
      github: 'https://github.com/akashghosh/chat-app',
      live: 'https://chat.akashghosh.xyz'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${bgClass} p-6 rounded-xl border`}>
        <h1 className={`text-2xl font-bold ${textClass} mb-6`}>MY PROJECTS.</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 ${cardBgClass} rounded-lg transition-colors duration-200`}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className={`${cardTextClass} font-semibold text-lg`}>{project.name}</h2>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{project.stars}</span>
                </div>
              </div>
              
              <p className={`${descriptionClass} text-sm mb-4 leading-relaxed`}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 ${tagClass} text-xs rounded-md`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 ${iconClass} hover:scale-105 transition-transform`}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 ${iconClass} hover:scale-105 transition-transform`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 