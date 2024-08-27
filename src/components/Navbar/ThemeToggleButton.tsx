import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../../context/ThemeContext';

export const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeContext();
  return (
    <IconButton onClick={toggleTheme}>
      {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};
