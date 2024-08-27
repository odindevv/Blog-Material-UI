import { ReactNode, useState } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import ThemeContext from '../context/ThemeContext';
import type { ThemeOptions } from '../types';

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeOptions>('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme: Theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
