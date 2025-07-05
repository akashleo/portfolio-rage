import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const CloudAnimation = () => {
  const { theme, backgroundEffect, isAnimating } = useTheme();
  
  // Log when the component mounts (animation starts)
  useEffect(() => {
    console.log("Cloud animation started with marquee-like continuous movement");
  }, []);

  // Get background color based on theme and effect
  const getBackgroundColor = () => {
    if (theme === 'light') {
      return backgroundEffect === 'clouds' ? '#87CEEB' : '#fdf5e0';
    } else if (theme === 'dusk') {
      return backgroundEffect === 'clouds' ? '#d2c4f4' : '#4E5481';
    } else { // dark
      return backgroundEffect === 'clouds' ? '#141852' : '#000000';
    }
  };

  return (
    <>
      {/* Sky background layer - z-index 10 - Always rendered */}
      <div 
        id="background-wrap" 
        style={{
          backgroundColor: getBackgroundColor(),
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10
        }} 
        className={isAnimating ? 'animate-fadeout' : ''}
      />
      
      {/* Clouds layer - z-index 30 (above components) - Only when clouds effect is active */}
      {backgroundEffect === 'clouds' && (
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
      )}
    </>
  );
};

export default CloudAnimation; 