import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

type Theme = 'light' | 'dark' | 'blue' | 'green';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    console.log('Theme changed to:', theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('dark', 'blue-theme', 'green-theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'blue') {
      document.documentElement.classList.add('blue-theme');
    } else if (theme === 'green') {
      document.documentElement.classList.add('green-theme');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
