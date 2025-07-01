import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'system';
type BackgroundEffect = 'default' | 'clouds';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  backgroundEffect: BackgroundEffect;
  toggleBackgroundEffect: () => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'system';
  });

  const [backgroundEffect, setBackgroundEffect] = useState<BackgroundEffect>('default');
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(mediaQuery.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, backgroundEffect, toggleBackgroundEffect, isAnimating }}>
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