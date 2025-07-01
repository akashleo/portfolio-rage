import React from 'react';
import TechStack from '../components/TechStack';
import Profile from '../components/Profile';
import MediaSection from '../components/MediaSection';
import LinksSection from '../components/LinksSection';
import ProjectSection from '../components/ProjectSection';
import BlogSection from '../components/BlogSection';
import WorkedAt from '../components/WorkedAt';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Tech Stack */}
        <div className="lg:col-span-3">
          <TechStack />
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-6 space-y-6">
          <Profile />
          <WorkedAt />
          <MediaSection />
        </div>

        {/* Right Sidebar - Links and Project */}
        <div className="lg:col-span-3 space-y-6">
          <LinksSection />
          <ProjectSection />
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Home; 