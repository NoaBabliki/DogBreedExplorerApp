import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context with default value
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for previous theme preference
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
