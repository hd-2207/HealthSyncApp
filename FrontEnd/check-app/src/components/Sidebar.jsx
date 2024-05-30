import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ setView }) => {

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8085/users/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button onClick={() => setView('dashboard')}>
            <ListItemText primary="Dashboard" />
          </ListItem>
       {/*   <ListItem button onClick={() => setView('deviceInfo')}>
            <ListItemText primary="Device Information" />
    </ListItem>  */}
          <ListItem button onClick={() => setView('deviceHistory')}>
            <ListItemText primary="Device History" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;


/*import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Toolbar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MemoryIcon from '@mui/icons-material/Memory';
import CpuIcon from '@mui/icons-material/Computer';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ProcessIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Memory', icon: <MemoryIcon />, path: '/memory' },
   { text: 'CPU', icon: <CpuIcon />, path: '/cpu' },
    { text: 'Battery', icon: <BatteryFullIcon />, path: '/battery' },
    { text: 'Performance', icon: <SpeedIcon />, path: '/performance' },
   // { text: 'Storage', icon: <StorageIcon />, path: '/storage' },
    { text: 'Network', icon: <NetworkCheckIcon />, path: '/network' },
   // { text: 'Temperature', icon: <ThermostatIcon />, path: '/temperature' },
    //{ text: 'Processes', icon: <ProcessIcon />, path: '/processes' },
   // { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(0, 123, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 123, 255, 0.15)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 123, 255, 0.05)',
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
*/