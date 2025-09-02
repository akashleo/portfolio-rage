import { useTheme } from '../context/ThemeContext';
import { Github, ExternalLink } from 'lucide-react';

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
      tech: "A simple react horizontal timeline component, has 300+ downloads in the first week of publishing",
      link: "https://www.npmjs.com/package/hoplist",
      github: "https://github.com/akashleo/hoplist"
    },
    {
      title: "EmoQuiz",
      tech: "A MERN stack Quiz application having user and admin flows, has 20 active users.",
      link: "https://emoquiz.xyz",
      github: "https://github.com/akashleo/quiz_app"
    },
    {
      title: "Emailer Modifier",
      tech: "A tool for modifying email templates, built with Next.js, Tailwind CSS, and TypeScript",
      link: "https://emailbuilder.akashghosh.xyz/",
      github: "https://github.com/akashleo/email-builder"
    },
    {
      title: "Games Hub",
      tech: "A dashboard hosting 3 games built in different frameworks (React, Vue, Svelte), implemented using micro-frontends architecture (webpack 5)",
      link: "https://github.com/akashleo/games-hub",
      github: "https://github.com/akashleo/games-hub"
    },
    {
      title: "Glasnnost UI",
      tech: "A Glass Tile UI library with 6 components, has over 1000 downloads in the first week of publishing",
      link: "https://glasnost.netlify.app/",
      github: "https://github.com/akashleo/glasnost-ui"
    },
    {
      title: "React Cloud Animation",
      tech: "Interactive cloud animation system with theme-aware backgrounds for React applications.",
      link: "https://cloudanimation.akashghosh.xyz/",
      github: "https://github.com/akashleo/react-cloud-animation"
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
                <div className="text-xs flex gap-2 mt-1 flex-row">
                  <a href={project.github} target='_blank' className="text-blue-500 hover:underline flex items-center gap-1">
                    <Github size={14} />
                  </a>
                  <a href={project.link} target='_blank' className="text-blue-500 hover:underline flex items-center gap-1">
                    <ExternalLink size={14}  />
                  </a>
                </div>
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