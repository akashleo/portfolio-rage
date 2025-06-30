import React from 'react';
import { Code, Terminal, Figma, Chrome, Coffee, Zap } from 'lucide-react';

const DailyTools = () => {
  const tools = [
    { name: 'VS Code', icon: Code, color: 'bg-blue-600' },
    { name: 'Terminal', icon: Terminal, color: 'bg-gray-700' },
    { name: 'Figma', icon: Figma, color: 'bg-purple-600' },
    { name: 'Chrome', icon: Chrome, color: 'bg-red-600' },
    { name: 'Notion', icon: Coffee, color: 'bg-gray-800' },
    { name: 'Raycast', icon: Zap, color: 'bg-orange-600' },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">DAILY Tool STACK.</h3>
      
      <div className="flex flex-col gap-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            <div className={`w-10 h-10 ${tool.color} rounded-lg flex items-center justify-center`}>
              <tool.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-300 font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyTools;