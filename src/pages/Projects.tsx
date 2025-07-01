import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
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
    {
      name: 'Task Manager',
      description: 'Real-time collaborative task management app',
      tech: ['Vue.js', 'Socket.io', 'MongoDB'],
      stars: 15,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4">FEATURED PROJECTS.</h3>
        
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-semibold">{project.name}</h4>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                  <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 