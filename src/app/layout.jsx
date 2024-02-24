"use client"
import * as React from 'react';
import { useState } from 'react';

import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentsIcon from '@mui/icons-material/Payments';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { IconButton } from '@mui/material';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const DRAWER_WIDTH = 240;


const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Empresas', href: '/empresas', icon: StarIcon },
  { text: 'Pagamentos', href: '/tasks', icon: PaymentsIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Preferencias', icon: SettingsIcon },
  { text: 'Suporte', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];



const DrawerMenuList = () => {
    return (
        <>
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </>
    )
};

export default function RootLayout({ children }) {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  return (
    <html lang="en">
      <body>
        <ThemeRegistry>

          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
              ml: { sm: `${DRAWER_WIDTH}px` },
            }}
          >
            <Toolbar sx={{ backgroundColor: '#3A9256' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                  Agenda Fácil
              </Typography>
            </Toolbar>
          </AppBar>


          <Box
            component="nav"
            sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
              }}
            >
              <DrawerMenuList />
            </Drawer>

            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
              }}
              open
            >
              <DrawerMenuList />
            </Drawer>
          </Box>


          <Box
            component="main"
            sx={{ 
              flexGrow: 1, 
              p: {xs: 2, md: 3}, 
              width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }, 
              mt: ['48px', '56px', '64px'],
              
            }}>

            {children}

          </Box>


        </ThemeRegistry>
      </body>
    </html>
  );
}