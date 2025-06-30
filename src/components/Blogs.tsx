import React from 'react';
import { Calendar, Eye, Heart, MessageCircle } from 'lucide-react';

const Blogs = () => {
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
    {
      title: 'Optimizing Database Performance',
      excerpt: 'Essential techniques for improving database query performance and scaling strategies...',
      date: '2024-01-02',
      views: 756,
      likes: 38,
      comments: 15,
    },
  ];

  return (
    <div className="bg-green-900 p-6 rounded-xl border border-green-700">
      <h3 className="text-xl font-bold text-white mb-4">LATEST BLOGS.</h3>
      
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-4 bg-green-800 rounded-lg hover:bg-green-700 transition-colors duration-200 cursor-pointer"
          >
            <h4 className="text-white font-semibold mb-2">{blog.title}</h4>
            <p className="text-green-100 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-green-200">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center gap-4 text-green-200">
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

export default Blogs; 