import React from 'react';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Profile from './components/Profile';
import DailyTools from './components/DailyTools';
import MediaSection from './components/MediaSection';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import LinksSection from './components/LinksSection';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
     
      <div className="container mx-auto px-4 py-8">
      <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Tech Stack */}
          <div className="lg:col-span-3">
            <TechStack />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6 space-y-6">
            <Profile />
            <DailyTools />
            <MediaSection />
            <Projects />
            <Blogs />
          </div>

          {/* Right Sidebar - Links */}
          <div className="lg:col-span-3">
            <LinksSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;