import React, { useEffect, CSSProperties } from 'react';
import { useTheme } from '../context/ThemeContext';

const CloudAnimation = () => {
  const { theme, backgroundEffect, isAnimating } = useTheme();
  
  // Log when the component mounts (animation starts)
  useEffect(() => {
    console.log("Cloud animation started with marquee-like continuous movement");
  }, []);

  // Define background styles based on theme
  const backgroundStyle: CSSProperties = theme === 'dark' 
    ? { 
        background: '#2d3b8d',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10
      }
    : { 
        backgroundColor: '#87CEEB',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10
      };

  return (
    <>
      {/* Sky background layer - z-index 10 */}
      <div 
        id="background-wrap" 
        style={backgroundStyle} 
        className={isAnimating ? 'animate-fadeout' : ''}
      />
      
      {/* Clouds layer - z-index 30 (above components) */}
      <div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 30, pointerEvents: 'none', overflow: 'hidden' }}
        className={isAnimating ? 'animate-fadeout' : ''}
      >
        {/* Cloud 1 - Right to Left */}
        <div className="cloud-container x1">
          <img src="/cloud1.png" alt="Cloud 1" className="cloud-img" />
        </div>
        
        {/* Cloud 2 - Left to Right */}
        <div className="cloud-container x2">
          <img src="/cloud2.png" alt="Cloud 2" className="cloud-img" />
        </div>
        
        {/* Cloud 3 - Right to Left */}
        <div className="cloud-container x3">
          <img src="/cloud3.png" alt="Cloud 3" className="cloud-img" />
        </div>
        
        {/* Cloud 4 - Left to Right */}
        <div className="cloud-container x4">
          <img src="/cloud4.png" alt="Cloud 4" className="cloud-img" />
        </div>
        
        {/* Cloud 5 - Right to Left */}
        <div className="cloud-container x5">
          <img src="/cloud5.png" alt="Cloud 5" className="cloud-img" />
        </div>
      </div>
    </>
  );
};

export default CloudAnimation; 