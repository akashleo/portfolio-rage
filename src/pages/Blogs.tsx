import React from 'react';
import { Calendar, Eye, Heart, MessageCircle, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Blogs = () => {
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
    
  const metaClass = theme === 'dark'
    ? "text-gray-400"
    : "text-gray-500";
    
  const tagClass = theme === 'dark'
    ? "bg-gray-700 text-gray-300"
    : "bg-gray-200 text-gray-700";

  const blogs = [
    {
      title: 'Building Modern Web Apps with React',
      excerpt: 'A comprehensive guide to building scalable React applications with modern best practices, including hooks, context, and performance optimization techniques...',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1240,
      likes: 56,
      comments: 12,
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      title: 'The Future of Backend Development',
      excerpt: 'Exploring emerging trends in backend technologies and what developers should expect in the coming years, including serverless architectures and microservices...',
      date: '2024-01-08',
      readTime: '6 min read',
      views: 892,
      likes: 43,
      comments: 8,
      tags: ['Backend', 'Node.js', 'Architecture']
    },
    {
      title: 'Optimizing Database Performance',
      excerpt: 'Essential techniques for improving database query performance and scaling strategies for high-traffic applications. Learn about indexing, caching, and more...',
      date: '2024-01-02',
      readTime: '10 min read',
      views: 756,
      likes: 38,
      comments: 15,
      tags: ['Database', 'MongoDB', 'Performance']
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Discover advanced TypeScript patterns and best practices that will make your code more maintainable and type-safe. Perfect for intermediate developers...',
      date: '2023-12-28',
      readTime: '7 min read',
      views: 654,
      likes: 29,
      comments: 6,
      tags: ['TypeScript', 'JavaScript', 'Best Practices']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${bgClass} p-6 rounded-xl border`}>
        <h1 className={`text-2xl font-bold ${textClass} mb-6`}>MY BLOGS.</h1>
        
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className={`p-6 ${cardBgClass} rounded-lg transition-colors duration-200 cursor-pointer hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className={`${cardTextClass} font-semibold text-xl mb-2`}>{blog.title}</h2>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{blog.likes}</span>
                </div>
              </div>
              
              <p className={`${descriptionClass} text-sm mb-4 leading-relaxed line-clamp-2`}>
                {blog.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 ${tagClass} text-xs rounded-md`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-1 ${metaClass}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className={`flex items-center gap-1 ${metaClass}`}>
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 ${metaClass}`}>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{blog.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs; 