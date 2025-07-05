import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TechStack = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const iconClass = theme === 'dark'
    ? "text-blue-400"
    : "text-blue-600";
    
  const sectionTitleClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const tagClass = theme === 'dark'
    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200";
  
  const frontendTechs = [
    'React', 'Next.js', 'Shadcn', 'SCSS', 'Tailwindcss', 
    'Framer-Motion', 'Recoil', 'Tanstack Query', 'Redux', 'Jest', 'Playwright'
  ];

  const backendTechs = [
    'Node.js', 'Bun.js', 'Express.js', 'NPM', 'FastAPI'
  ];

  const dbServices = [
    'GCP', 'Docker', 'Firebase', 'Prisma ORM', 'Postman', 'Postgres', 'MongoDB'
  ];

  const TechSection = ({ 
    title, 
    icon: Icon, 
    techs 
  }: { 
    title: string; 
    icon: React.ElementType; 
    techs: string[] 
  }) => (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${iconClass}`} />
        <h3 className={`${sectionTitleClass} font-semibold`}>{title}:</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 ${tagClass} rounded-md text-sm transition-colors duration-200 cursor-default`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (<div className={`${bgClass} rounded-xl border`}>
    <div className='p-6'>
      <div className="mb-8">
        <h2 className={`text-2xl font-bold ${textClass}`}>&gt; select * from skillset</h2>
      </div>

      <TechSection title="Frontend" icon={Code2} techs={frontendTechs} />
      <TechSection title="Backend" icon={Database} techs={backendTechs} />
      <TechSection title="DB & Services" icon={Cloud} techs={dbServices} />
      
     
    </div>
    
          <div className="flex justify-center items-center mb-4">
        <img 
          src="/bigbren-2.png" 
          alt="wojak" 
          className="h-auto w-40 rounded-br-xl object-cover scale-125 transform-gpu"
          style={{ objectPosition: 'center' }}
        />
      </div>
     </div>
  );
};

export default TechStack;