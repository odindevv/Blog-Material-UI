import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';

import { navLinksBottom, navLinksTop } from '../../mocks/NavLinks';
import { TabsBar } from './TabsBar';
import { DrawerNav } from './DrawerNav';
import { ThemeToggleButton } from './ThemeToggleButton';

export const NavBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position='static'
      color='transparent'
      sx={{ boxShadow: '0' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant='text'
          sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }}
        >
          SUBSCRIBE
        </Button>
        <Typography
          variant='h4'
          sx={{ cursor: 'default' }}
        >
          Blog
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box
            sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant='outlined'>SIGN UP</Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <ThemeToggleButton />
          </Box>
        </Box>
      </Toolbar>
      <Divider />

      <TabsBar
        tabLinks={navLinksBottom}
        currentTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <DrawerNav
        topLinks={navLinksTop}
        bottomLinks={navLinksBottom}
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </AppBar>
  );
};
