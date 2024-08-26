import { Tabs, Tab } from '@mui/material';
import { NavLink } from '../../types';

interface Props {
  tabLinks: Array<NavLink>;
  currentTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}
export const TabsBar: React.FC<Props> = ({
  tabLinks,
  currentTab,
  onTabChange,
}) => {
  return (
    <Tabs
      value={currentTab}
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'flex',
        },
        mx: 'auto',
        justifyContent: 'space-between',
      }}
      onChange={onTabChange}
    >
      {tabLinks.map((link) => (
        <Tab
          key={link.label}
          label={link.label}
        />
      ))}
    </Tabs>
  );
};
