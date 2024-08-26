import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from '../../types';

interface Props {
  topLinks: Array<NavLink>;
  bottomLinks: Array<NavLink>;
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const DrawerNav: React.FC<Props> = ({
  topLinks,
  bottomLinks,
  isOpen,
  toggleDrawer,
}) => {
  return (
    <Hidden lgUp>
      <Drawer
        open={isOpen}
        anchor='left'
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 250 }}>
          <nav>
            <List>
              {topLinks.map((link) => (
                <ListItem
                  key={link.label}
                  disablePadding
                >
                  <ListItemButton
                    component='a'
                    href='#'
                  >
                    <ListItemIcon>{link?.icon}</ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider />
              {bottomLinks.map((link) => (
                <ListItem
                  key={link.label}
                  disablePadding
                >
                  <ListItemButton
                    component='a'
                    href='#'
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Drawer>
    </Hidden>
  );
};
