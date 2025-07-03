import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'dusk';
type BackgroundEffect = 'default' | 'clouds';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  backgroundEffect: BackgroundEffect;
  toggleBackgroundEffect: () => void;
  isAnimating: boolean;
  currentTime: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to determine theme based on current time
const getThemeByTime = (): Theme => {
  const now = new Date();
  const hour = now.getHours();
  
  if (hour >= 6 && hour < 14) {
    return 'light'; // 6am to 2pm
  } else if (hour >= 14 && hour < 20) {
    return 'dusk'; // 2pm to 8pm
  } else {
    return 'dark'; // 8pm to 6am
  }
};

// Function to format current time
const getCurrentTimeString = (): string => {
  const now = new Date();
  return now.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getThemeByTime);
  const [backgroundEffect, setBackgroundEffect] = useState<BackgroundEffect>('default');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTimeString);

  const toggleBackgroundEffect = () => {
    if (backgroundEffect === 'default') {
      // Switching to clouds - immediate transition
      setBackgroundEffect('clouds');
    } else {
      // Switching to default - start fadeout animation
      setIsAnimating(true);
      // After fadeout animation completes, change the background effect
      setTimeout(() => {
        setBackgroundEffect('default');
        setIsAnimating(false);
      }, 1000); // Match the fadeout duration in CSS
    }
  };

  // Update time and theme every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTimeString());
      const newTheme = getThemeByTime();
      if (newTheme !== theme) {
        setTheme(newTheme);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'dusk');
    root.classList.add(theme);
    
    // Set background colors based on theme and background effect
    const backgroundWrap = document.getElementById('background-wrap');
    if (backgroundWrap) {
      if (theme === 'light') {
        backgroundWrap.style.setProperty('background-color', backgroundEffect === 'clouds' ? '#87CEEB' : '#fdf5e0');
      } else if (theme === 'dusk') {
        backgroundWrap.style.setProperty('background-color', backgroundEffect === 'clouds' ? '#DFBBA9' : '#89b7ba');
      } else if (theme === 'dark') {
        backgroundWrap.style.setProperty('background-color', backgroundEffect === 'clouds' ? '#141852' : '#000000');
      }
    }
  }, [theme, backgroundEffect]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, backgroundEffect, toggleBackgroundEffect, isAnimating, currentTime }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 