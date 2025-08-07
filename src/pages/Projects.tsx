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
      title: "Hoplist",
      tech: "A simple react horizontal timeline component, has 300+ downloads in the first week of publishing",
      link: "https://github.com/yourusername/hoplist"
    },
    {
      title: "EmoQuiz",
      tech: "A MERN stack Quiz application having user and admin flows, has 20 active users.",
      link: "https://github.com/yourusername/emoquiz"
    },
    {
      title: "Emailer Modifier",
      tech: "A tool for modifying email templates, built with Next.js, Tailwind CSS, and TypeScript",
      link: "https://github.com/yourusername/emailer-modifier"
    },
    {
      title: "Games Hub",
      tech: "A dashboard hosting 3 games built in different frameworks (React, Vue, Svelte), implemented using micro-frontends architecture (webpack 5)",
      link: "https://github.com/yourusername/games-hub"
    },
    {
      title: "Glasnnost UI",
      tech: "A Glass Tile UI library with 6 components, has over 1000 downloads in the first week of publishing",
      link: "https://github.com/yourusername/glasnost-ui"
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
                <h2 className={`${cardTextClass} font-semibold text-lg`}>{project.title}</h2>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">{project.link}</span>
                </div>
              </div>
              
              <p className={`${descriptionClass} text-sm mb-4 leading-relaxed`}>{project.tech}</p>
              
              
              <div className="flex items-center gap-3">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 ${iconClass} hover:scale-105 transition-transform`}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a 
                  href={project.link}
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