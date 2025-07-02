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
      {/* Mobile and Tablet Layout */}
      <div className="flex flex-col gap-6 lg:hidden">
        <Profile />
        <LinksSection />
        <TechStack />
        <WorkedAt />
        <ProjectSection />
        <BlogSection />
        <MediaSection />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-6">
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