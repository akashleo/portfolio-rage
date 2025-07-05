import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import { useTheme } from './context/ThemeContext';
import CloudAnimation from './components/CloudAnimation';

function App() {
  const { backgroundEffect, isAnimating } = useTheme();

  console.log(backgroundEffect);

  return (
    <Router>
      <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] relative">
        {/* Original background is at z-index 0 (default) */}
        
        {/* Cloud animation background - Always rendered for background colors */}
        <CloudAnimation />
        
        {/* Main content - z-index 20 (middle layer for component tiles) */}
        <div className="container mx-auto px-4 py-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;