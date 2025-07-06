import React, { useEffect, useRef, useState } from "react";
import { MapPin, Circle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const { toggleBackgroundEffect, theme, backgroundEffect, currentTime } = useTheme();
  const bengaliTextRef = useRef<HTMLSpanElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Dynamic classes based on theme
  const bgClass = theme === 'dark' 
    ? "bg-gray-900 border-gray-800" 
    : "bg-white border-gray-300";
  
  const textClass = theme === 'dark'
    ? "text-white"
    : "text-[#141852]";
    
  const secondaryTextClass = theme === 'dark'
    ? "text-gray-400"
    : "text-gray-600";
    
  const paragraphClass = theme === 'dark'
    ? "text-gray-300"
    : "text-gray-600";
    
  const accentTextClass = theme === 'dark'
    ? "text-blue-400"
    : "text-blue-600";
    
  const snippetBgClass = theme === 'dark'
    ? "bg-gray-900 border-gray-800"
    : "bg-white border-gray-300";
    
  const commentClass = theme === 'dark'
    ? "text-gray-500"
    : "text-gray-500";
    
  const codeClass = theme === 'dark'
    ? "text-blue-400"
    : "text-blue-600";
    
  const tooltipClass = theme === 'dark'
    ? "bg-gray-800 text-gray-100"
    : "bg-white text-[#141852] shadow-lg";

  // Apply or remove glow effect based on backgroundEffect
  useEffect(() => {
    if (!bengaliTextRef.current) return;
    
    if (backgroundEffect === 'clouds') {
      // Apply glow effect
      bengaliTextRef.current.style.color = "#87CEEB";
      bengaliTextRef.current.style.textShadow = "0 0 8px #87CEEB";
      bengaliTextRef.current.style.transition = "all 0.5s ease";
    } else {
      // Remove glow effect with fade out animation
      bengaliTextRef.current.style.transition = "all 1s ease";
      bengaliTextRef.current.style.color = "";
      bengaliTextRef.current.style.textShadow = "none";
    }
  }, [backgroundEffect]);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className={`${bgClass} rounded-xl border`}>
        <div className="p-6">
          <div className="flex items-start gap-4">
            <img className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" src="https://media.licdn.com/dms/image/v2/D5603AQHG4ZNePwpC1g/profile-displayphoto-scale_400_400/B56ZfNpMeoGoAg-/0/1751501818526?e=1756944000&v=beta&t=Cmc4kTN3PmLDn9WiH0nBr-GMRzM99dk4QJ_woVLFnjw"/>
            <div>
              <h1 className={`text-2xl font-bold ${textClass}`}>akash ghosh.</h1>
              <p className={secondaryTextClass}>@akashleo_tw</p>
            </div>
            <div className="ml-auto text-right">
              <div className={`${textClass} font-mono font-bold text-lg relative`}>
                <span
                  ref={bengaliTextRef}
                  className={`transition-all duration-300 hover:text-blue-400 inline-block cursor-pointer ${backgroundEffect === 'clouds' ? 'animate-pulse' : 'animate-prominent-glow click-indicator'}`}
                  onClick={toggleBackgroundEffect}
                  onMouseEnter={(e) => {
                    setShowTooltip(true);
                    if (backgroundEffect === 'default') {
                      e.currentTarget.style.color = "#87CEEB";
                      e.currentTarget.style.textShadow = "0 0 8px #87CEEB";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    setShowTooltip(false);
                    if (backgroundEffect === 'default') {
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.textShadow = "none";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  আকাশ
                </span>
                
                {/* Tooltip */}
                {showTooltip && (
                  <div 
                    className={`absolute right-0 top-full mt-2 p-2 rounded-md ${tooltipClass} text-xs w-48 z-50 transform transition-opacity duration-200`}
                    style={{ 
                      opacity: showTooltip ? 1 : 0,
                      boxShadow: theme === 'dark' ? '0 0 10px rgba(0,0,0,0.5)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="font-normal">
                      This is my name in Bangla. Akash means "the sky".
                    </div>
                    <div 
                      className="absolute -top-2 right-3 w-3 h-3 rotate-45"
                      style={{ 
                        backgroundColor: theme === 'dark' ? '#1f2937' : 'white' 
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="space-y-3 p-6">
            <p className={`${textClass} text-lg`}>
              I build{" "}
              <span className={`font-semibold ${accentTextClass}`}>Web Apps</span>.
            </p>

            <p className={paragraphClass}>
              Hello, I'm Akash! a 26 year old developer based in Bengaluru - India.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <Circle className="w-2 h-2 fill-green-400 text-green-400" />
              <span className="text-green-400">Available for work</span>
              <span className="text-gray-500 ml-2">
                {currentTime}
              </span>
            </div>
          </div>

          <div className="rounded-xl flex items-end justify-end">
            <img
              src="/happy-guy.png"
              alt="think-explode"
              className="h-auto w-40 object-contain rounded-br-xl"
            />
          </div>
        </div>{" "}
      </div>

      {/* Code Snippet */}
      <div className={`${snippetBgClass} rounded-xl border flex items-center justify-between overflow-hidden`}>
        <div className="p-4">
          <div className="font-mono text-sm">
            <div className={commentClass}>// How do I center</div>
            <div className={codeClass}>
              &gt; a div again??
            </div>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center">
          <img
            src="/table-flip-2.gif"
            alt="think-explode"
            className="h-auto w-40 object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
