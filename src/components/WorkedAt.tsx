import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const WorkedAt = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-neutral-100 border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const secondaryTextClass = theme === 'dark'
    ? "text-gray-400"
    : "text-gray-600";
    
  const companyCardClass = theme === 'dark'
    ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
    : "bg-white hover:bg-gray-50 border-gray-200";
    
  const iconClass = theme === 'dark'
    ? "text-blue-400"
    : "text-blue-600";
    
  const companies = [
    {
      name: "Google",
      role: "Senior Frontend Engineer",
      period: "2022 - Present",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
    },
    {
      name: "Microsoft",
      role: "Software Engineer",
      period: "2019 - 2022",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/150px-Microsoft_logo.svg.png"
    },
    {
      name: "Amazon",
      role: "Frontend Developer",
      period: "2017 - 2019",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/150px-Amazon_logo.svg.png"
    }
  ];

  return (
    <div className={`${bgClass} rounded-xl border p-6`}>
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className={`w-5 h-5 ${iconClass}`} />
        <h2 className={`text-2xl font-bold ${textClass}`}>worked at.</h2>
      </div>
      
      <div className="space-y-4">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className={`${companyCardClass} p-4 rounded-lg border flex items-center justify-between transition-colors duration-200`}
          >
            <div className="flex items-center gap-4">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className={`font-semibold ${textClass}`}>{company.name}</h3>
                <p className={secondaryTextClass}>{company.role}</p>
                <p className="text-sm text-gray-500">{company.period}</p>
              </div>
            </div>
            <ExternalLink className={`w-4 h-4 ${iconClass} cursor-pointer`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkedAt; 