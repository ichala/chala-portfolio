import { useState, createContext } from 'react';

export const ThemeContext = createContext();
const ThemeList = ['cupcake', 'synthwave', 'halloween', 'garden', 'forest', 'luxury', 'dracula', 'night', 'winter'];

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'night');
  localStorage.setItem('theme', JSON.stringify(Theme));
  return (
    <ThemeContext.Provider value={{ Theme, setTheme, ThemeList }}>
      <main data-theme={Theme} className="h-screen overflow-hidden relative bg-base-100">
        {children}
      </main>
    </ThemeContext.Provider>
  );
};
