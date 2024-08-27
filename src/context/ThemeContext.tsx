import { createContext, useContext } from 'react';
import type { ThemeOptions } from '../types';

interface ThemeContextType {
  themeMode: ThemeOptions;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => console.warn('toggleTheme function no provided'),
  themeMode: 'dark',
});

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
