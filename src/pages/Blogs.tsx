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
    : "border border-black-300";

  const textClass = theme === 'dark'
    ? "text-gray-200"
    : theme === 'dusk'
    ? "text-gray-500"
    : "text-gray-700";

  // Blog items
  const blogs = [
    {
      title: "Picking up Angular as a React developer",
      date: "April 5, 2023",
      link: "https://akashleo.hashnode.dev/picking-up-angular-as-a-react-developer",
      slug: "angular-for-react-devs",
      excerpt: "Angular and React are both popular front-end web development frameworks, but they have some fundamental differences in their architecture, syntax, and approach to building web applications. Here are some ways in which Angular differs from React for developers:"
    },
    {
      title: "How I put clouds in my portfolio",
      date: "September 1, 2025",
      link: "https://dev.to/akashleo/how-i-put-clouds-in-my-portfolio-and-why-b9m",
      slug: "clouds-in-portfolio",
      excerpt: "Well, I made my portfolio and there is one feature I am proud of. I did not plan on it initially, but there arose the reason. I thought of putting something novel that is unique to my portfolio. I pondered over the thought and then it struck, I could put my name in my portfolio and then when clicked, I could show it's meaning and that's when it hit me that I could put a cloud animation."
    },
    {
      title: "That time when i created a npm package that didn't exist",
      date: "July 3, 2025",
      link: "https://dev.to/akashleo/that-time-when-i-had-to-create-a-npm-package-that-didnt-exist-jd8",
      slug: "creating-npm-package",
      excerpt: "While working at PhonePe, the first team I was with was the QA team. The backend devs worked from the Pune office and I was from the Bangalore office. They had built a IssueTracker bot on slack, where the QA team would report issues that they found anywhere with the developed features in staging, production and other environments. It was also for user raised issues in the live application."
    }
    // {
    //   title: "A long journey building Emoquiz",
    //   date: "April 10, 2023",
    //   link: "/blog/emoquiz-journey"
    // }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${bgClass} ${borderClass} p-6 rounded-xl relative overflow-hidden`}>
        <div className="relative z-10">
          <h3 className="text-6xl font-bold mb-4">blogs.</h3>
          <h4 className="text-lg font-semibold mb-4" >i have a lot of stories on drafts, but these are few of them which i published</h4>
          {/* Blog tiles */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
            {blogs.map((blog) => (
              <li
                key={blog.slug}
                className={`rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${
                  theme === 'dark'
                    ? 'bg-black/20 border border-white/10'
                    : theme === 'dusk'
                    ? 'bg-white/10 border border-black/20'
                    : 'bg-white/60 border border-black/5'
                }`}
              >
                <h4 className={`text-lg font-semibold leading-snug mb-1 ${textClass}`}>{blog.title}</h4>
                <div className={`text-xs mb-2 ${textClass}`}>{blog.date}</div>
                <p className={`text-sm ${textClass}`}>
                  {blog.excerpt} <Link to={blog.link} className="underline font-medium">...more</Link>
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