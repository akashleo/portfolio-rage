import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Blogs = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gradient-to-br from-green-600 to-green-800 text-white" 
    : theme === 'dusk'
    ? "bg-gradient-to-br from-green-300 to-green-500 text-white"
    : "bg-gradient-to-br from-green-100 to-green-300 text-[#141852]";

  const borderClass = theme === 'dark'
    ? ""
    : "border border-gray-300";

  const textClass = theme === 'dark'
    ? "text-gray-200"
    : theme === 'dusk'
    ? "text-gray-100"
    : "text-gray-700";

  // Blog items
  const blogs = [
    {
      title: "Picking up Angular as a React developer",
      date: "June 15, 2023",
      slug: "angular-for-react-devs",
      excerpt:
        "As a long-time React developer, stepping into Angular felt both familiar and refreshingly different. Here’s how I approached components, state, and tooling in Angular from a React mindset",
    },
    {
      title: "How I put clouds in my portfolio",
      date: "May 22, 2023",
      slug: "clouds-in-portfolio",
      excerpt:
        "I wanted subtle depth and motion without sacrificing performance. This post breaks down the cloud animation layers, rendering strategy, and a few gotchas I hit along the way",
    },
    {
      title: "That time when I created an npm package that didn't exist",
      date: "April 10, 2023",
      slug: "creating-npm-package",
      excerpt:
        "Scratching my own itch led to a tiny utility I couldn’t find on npm. From API design to publishing and versioning, here’s what I learned building and maintaining it",
    },
    {
      title: "A long journey building Emoquiz",
      date: "April 10, 2023",
      slug: "building-emoquiz",
      excerpt:
        "Emoquiz started as a weekend idea and turned into a full product. I cover the product iterations, tech choices, user feedback loops, and what I’d do differently",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${bgClass} ${borderClass} p-6 rounded-xl relative overflow-hidden`}>
        <div className="relative z-10">
          <h3 className="text-6xl font-bold mb-4">blogs.</h3>

          {/* Blog tiles */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
            {blogs.map((blog) => (
              <li
                key={blog.slug}
                className={`rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${
                  theme === 'dark'
                    ? 'bg-black/20 border border-white/10'
                    : theme === 'dusk'
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-white/60 border border-black/5'
                }`}
              >
                <h4 className="text-lg font-semibold leading-snug mb-1">{blog.title}</h4>
                <div className={`text-xs mb-2 ${textClass}`}>{blog.date}</div>
                <p className={`text-sm ${textClass}`}>
                  {blog.excerpt} <Link to={`/blogs/${blog.slug}`} className="underline font-medium">...more</Link>
                </p>
              </li>
            ))}
          </ul>
          
          <div className="flex justify-end">
            <img 
              src="/journal.gif" 
              alt="Journal" 
              className="h-auto w-24 object-contain rounded-br-xl"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-4 translate-x-4" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-5 rounded-full translate-y-4 -translate-x-4" />
      </div>
    </div>
  );
};

export default Blogs;