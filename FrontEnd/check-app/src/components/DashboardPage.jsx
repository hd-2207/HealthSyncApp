
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import DeviceHistory from './DeviceHistory';

const drawerWidth = 240; // Sidebar width

const DashboardPage = () => {
  const [view, setView] = useState('dashboard');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            HealthSync <SyncIcon sx={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar setView={setView} /> {/* Pass setView function as a prop */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${drawerWidth}px`, // Adjusted margin left to account for Sidebar
          marginTop: '64px', // Adjusted margin top to account for AppBar
          height: 'calc(100vh - 64px)', // Ensure it fills the remaining vertical space
          overflow: 'auto', // Add scrolling if content overflows
        }}
      >
        {view === 'dashboard' && <Dashboard />}
        {view === 'deviceHistory' && <DeviceHistory />}
      </Box>
    </Box>
  );
};

export default DashboardPage;



/*import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
//import DeviceInfo from './DeviceInfo';
//import DeviceHistory from './DeviceHistory';

const DashboardPage = () => {
  const [view, setView] = useState('dashboard');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            HealthSync <SyncIcon sx={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar setView={setView} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
        <Toolbar />
        {view === 'dashboard' && <Dashboard />}
        {view === 'deviceInfo' && <DeviceInfo />}
        {view === 'deviceHistory' && <DeviceHistory />} 
      </Box>
    </Box>
  );
};

export default DashboardPage;
*/

/*import React from 'react';
import { AppBar, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            HealthSync <SyncIcon sx={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Dashboard />
    </Box>
  );
};

export default DashboardPage;
*/
