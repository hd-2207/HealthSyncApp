import React from 'react';
import { Button, Grid, Typography, AppBar, Toolbar, CssBaseline, Box } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import healthimg from './heal.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ marginBottom: '4rem' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            HealthSync <SyncIcon sx={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ minHeight: '50vh' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={healthimg}
            alt="HealthSync illustration"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: '2rem' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to HealthSync!
          </Typography>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            Ultimate Device Health Check Application
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', mt: '1rem' }}>
            <Button component={Link} to={'/login'} variant="contained" color="primary" sx={{ m: '1rem' }}>
              Login
            </Button>
            <Button component={Link} to={'/register'} variant="outlined" color="primary" sx={{ m: '1rem' }}>
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: '5rem',
          padding: '1rem',
          backgroundColor: 'inherit',
        }}
      >
        <Typography variant="body2" color="textSecondary" align="center">
          Reach Us: techcare@support.com
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
