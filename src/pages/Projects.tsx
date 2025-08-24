import { ExternalLink, Github, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Projects = () => {
  const { theme } = useTheme();
  const [showHiddenFeatures, setShowHiddenFeatures] = useState(false);
  
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
  
  // Hidden demo projects
  const demoProjects = [
    {
      title: "Dad Jokes explained",
      tech: "End-to-end encrypted chat application with disappearing messages",
      github: "https://github.com/yourusername/secret-chat",
      live: "https://secret-chat-demo.netlify.app"
    },
    {
      title: "Slap the Communists",
      tech: "Generate unique images using stable diffusion models",
      github: "https://github.com/yourusername/ai-image-gen",
      live: "https://ai-image-gen.vercel.app"
    },
    {
      title: "Rust CLI",
      tech: "Real-time cryptocurrency tracking with portfolio management",
      github: "https://github.com/yourusername/crypto-dash",
      live: "https://crypto-dash-demo.netlify.app"
    },
    {
      title: "AR Business Card",
      tech: "Augmented reality business card that displays 3D models and animations",
      github: "https://github.com/yourusername/ar-business-card",
      live: "https://ar-business-card.vercel.app"
    }
  ];

  const projects = [
    {
      title: "Hoplist",
      tech: "A simple react horizontal timeline component, has 300+ downloads in the first week of publishing",
      github: "https://github.com/akashleo/hoplist",
      live: "https://hoplist-demo.netlify.app"
    },
    {
      title: "EmoQuiz",
      tech: "A MERN stack Quiz application having user and admin flows, has 20 active users.",
      github: "https://github.com/akashleo/quiz-app",
      live: "https://emoquiz.netlify.app"
    },
    {
      title: "Emailer Modifier",
      tech: "A tool for modifying email templates, built with Next.js, Tailwind CSS, and TypeScript",
      github: "https://github.com/yourusername/emailer-modifier",
      live: "https://emailer-modifier.vercel.app"
    },
    {
      title: "Games Hub",
      tech: "A dashboard hosting 3 games built in different frameworks (React, Vue, Svelte), implemented using micro-frontends architecture (webpack 5)",
      github: "https://github.com/yourusername/games-hub",
      live: "https://games-hub.netlify.app"
    },
    {
      title: "Glasnnost UI",
      tech: "A Glass Tile UI library with 6 components, has over 1000 downloads in the first week of publishing",
      github: "https://github.com/yourusername/glasnost-ui",
      live: "https://glasnost-ui.netlify.app"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${bgClass} ${borderClass} p-6 rounded-xl relative overflow-hidden`}>
        <div className="relative z-10">
          <h3 className="text-6xl font-bold mb-4">projects.</h3>
          <h4 className="text-lg font-bold mb-4">these are the published projects, there are a few npm packages and full stack applications and MCP servers.</h4>
          {/* Projects list as tiles */}
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6 mt-6">
            {projects.map((project, index) => (
              <li key={index} className="bg-white bg-opacity-10 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white border-opacity-20">
                <div className="mb-3">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className={`${textClass} text-sm mb-3`}>{project.tech}</p>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target='_blank' 
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all border-2 ${theme === 'dark' ? 'border-purple-600 text-purple-300 hover:border-purple-500 hover:text-purple-200' : theme === 'dusk' ? 'border-purple-500 text-purple-200 hover:border-purple-400 hover:text-purple-100' : 'border-purple-400 text-purple-800 hover:border-purple-500 hover:text-purple-900'}`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.live} 
                    target='_blank' 
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all border-2 ${theme === 'dark' ? 'border-purple-600 text-purple-300 hover:border-purple-500 hover:text-purple-200' : theme === 'dusk' ? 'border-purple-500 text-purple-200 hover:border-purple-400 hover:text-purple-100' : 'border-purple-400 text-purple-800 hover:border-purple-500 hover:text-purple-900'}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Hidden Features Section */}
          <div className="mt-8 mb-6">
            <button 
              onClick={() => setShowHiddenFeatures(!showHiddenFeatures)}
              className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-purple-800' : theme === 'dusk' ? 'bg-purple-600' : 'bg-purple-400'} hover:opacity-90 text-white px-4 py-2 rounded-md transition-all duration-300 font-medium`}
            >
              {showHiddenFeatures ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>Hidden Projects</span>
              {showHiddenFeatures ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {showHiddenFeatures && (
              <div className="mt-4 animate-fadeIn">
                <h4 className="text-lg font-bold mb-4">these are the projects for my happiness, I make them in my own time, some of them are complete and some of them are not.</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {demoProjects.map((project, index) => (
                    <li key={`demo-${index}`} className={`${theme === 'dark' ? 'bg-purple-900' : theme === 'dusk' ? 'bg-purple-700' : 'bg-purple-200'} bg-opacity-60 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white border-opacity-20`}>
                      <div className="mb-3">
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className={`${textClass} text-sm mb-3`}>{project.tech}</p>
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.github} 
                          target='_blank' 
                          className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all border-2 ${theme === 'dark' ? 'border-purple-600 text-purple-300 hover:border-purple-500 hover:text-purple-200' : theme === 'dusk' ? 'border-purple-500 text-purple-200 hover:border-purple-400 hover:text-purple-100' : 'border-purple-400 text-purple-800 hover:border-purple-500 hover:text-purple-900'}`}
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                        <a 
                          href={project.live} 
                          target='_blank' 
                          className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all border-2 ${theme === 'dark' ? 'border-purple-600 text-purple-300 hover:border-purple-500 hover:text-purple-200' : theme === 'dusk' ? 'border-purple-500 text-purple-200 hover:border-purple-400 hover:text-purple-100' : 'border-purple-400 text-purple-800 hover:border-purple-500 hover:text-purple-900'}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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
    </div>
  );
};

export default Projects;