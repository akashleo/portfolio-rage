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
      name: "PhonePe",
      role: "Software Engineer [contract]",
      period: "2023 August - 2025 July",
      logo: "/phonepe.png"
    },
    {
      name: "Spurtree",
      role: "Software Engineer",
      period: "2021 December - 2023 July",
      logo: "/spurtree.jpeg"
    },
    {
      name: "Cognizant",
      role: "Programmer Analyst",
      period: "2021 May - 2021 December",
      logo: "/cognizant.png"
    },
    {
      name: "Keross R&D",
      role: "Intern",
      period: "2020 January - 2021 May",
      logo: "/keross.jpeg"
    }
  ];

  return (
    <div className={`${bgClass} rounded-xl border p-6`}>
      <div className="flex items-center gap-2 mb-6">
        <h2 className={`text-4xl font-bold ${textClass}`}>worked at.</h2>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkedAt; 