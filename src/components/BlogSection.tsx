import { useTheme } from '../context/ThemeContext';

const BlogSection = () => {
  const { theme } = useTheme();
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
  ? "bg-gradient-to-br from-green-600 to-green-800 text-white" 
  : "bg-neutral-100 text-[#141852]";

const borderClass = theme === 'dark'
  ? ""
  : "border border-gray-300";

const textClass = theme === 'dark'
  ? "text-gray-200"
  : "text-gray-700";
  
  // Blog items
  const blogs = [
    {
      title: "Picking up Angular as a React developer",
      date: "June 15, 2023",
    },
    {
      title: "How I put clouds in my portfolio",
      date: "May 22, 2023",
    },
    {
      title: "That time when i created a npm package that didn't exist",
      date: "April 10, 2023",
    },
    {
      title: "A long journey building Emoquiz",
      date: "April 10, 2023",
    }
  ];
  
  return (
    <div className={`${bgClass} ${borderClass} p-6 rounded-xl relative overflow-hidden`}>
      <div className="relative z-10">
        <h3 className="text-6xl font-bold mb-4">blogs.</h3>
        
        {/* Blog list aligned left */}
        <ul className="text-left mb-4">
          {blogs.map((blog, index) => (
            <li key={index} className="mb-2 last:mb-0">
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="font-medium">{blog.title}</div>
                <div className={`text-xs ${textClass}`}>{blog.date}</div>
              </a>
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
  );
};

export default BlogSection; 