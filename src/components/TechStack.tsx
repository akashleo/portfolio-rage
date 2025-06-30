import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const TechStack = () => {
  const frontendTechs = [
    'React', 'Next.js', 'Shadcn', 'SCSS', 'Tailwindcss', 
    'Framer-Motion', 'Recoil', 'Tanstack Query'
  ];

  const backendTechs = [
    'Node.js', 'Hono.js', 'Express.js', 'NPM'
  ];

  const dbServices = [
    'Cloudflare Workers', 'Docker', 'Appwrite', 
    'Supabase', 'Prisma ORM', 'Postman', 'Postgres', 'MongoDB'
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
        <Icon className="w-5 h-5 text-blue-400" />
        <h3 className="text-white font-semibold">{title}:</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm hover:bg-gray-600 transition-colors duration-200 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (<div className="bg-gray-900 rounded-xl border border-gray-800">
    <div className='p-6'>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">&gt; select * from skillset</h2>
      </div>

      <TechSection title="Frontend" icon={Code2} techs={frontendTechs} />
      <TechSection title="Backend" icon={Database} techs={backendTechs} />
      <TechSection title="DB & Services" icon={Cloud} techs={dbServices} />
      
     
    </div>
    
          <div className="flex justify-center items-center">
        <img 
          src="../public/bigbren-2.png" 
          alt="wojak" 
          className="h-auto w-40 rounded-br-xl object-cover scale-125 transform-gpu"
          style={{ objectPosition: 'center' }}
        />
      </div>
     </div>
  );
};

export default TechStack;