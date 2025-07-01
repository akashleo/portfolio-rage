import React from 'react';
import { Calendar, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const BlogsPreview = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-green-900 border-green-700" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const linkClass = theme === 'dark'
    ? "text-green-300 hover:text-green-200"
    : "text-green-600 hover:text-green-700";
    
  const cardBgClass = theme === 'dark'
    ? "bg-green-800 hover:bg-green-700"
    : "bg-green-50 hover:bg-green-100";
    
  const cardTextClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const excerptClass = theme === 'dark'
    ? "text-green-100"
    : "text-gray-600";
    
  const metaTextClass = theme === 'dark'
    ? "text-green-200"
    : "text-green-700";
  
  const blogs = [
    {
      title: 'Building Modern Web Apps with React',
      excerpt: 'A comprehensive guide to building scalable React applications with modern best practices...',
      date: '2024-01-15',
      views: 1240,
      likes: 56,
      comments: 12,
    },
    {
      title: 'The Future of Backend Development',
      excerpt: 'Exploring emerging trends in backend technologies and what developers should expect...',
      date: '2024-01-08',
      views: 892,
      likes: 43,
      comments: 8,
    },
  ];

  return (
    <div className={`${bgClass} p-6 rounded-xl border`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-xl font-bold ${textClass}`}>LATEST BLOGS.</h3>
        <Link to="/blogs" className={`flex items-center ${linkClass} transition-colors`}>
          <span className="text-sm mr-1">View all</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`p-4 ${cardBgClass} rounded-lg transition-colors duration-200 cursor-pointer`}
          >
            <h4 className={`${cardTextClass} font-semibold mb-2`}>{blog.title}</h4>
            <p className={`${excerptClass} text-sm mb-3 line-clamp-2`}>{blog.excerpt}</p>
            
            <div className="flex items-center justify-between text-sm">
              <div className={`flex items-center gap-1 ${metaTextClass}`}>
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              
              <div className={`flex items-center gap-4 ${metaTextClass}`}>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{blog.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{blog.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blog.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPreview; 