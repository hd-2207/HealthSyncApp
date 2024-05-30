import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/users/login', { username, password }, { withCredentials: true });
      // Handle successful login
      console.log('Login successful:', response.data);
      // Optionally, set a message or redirect user to another page
      setMessage('Login successful');
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid username or password');
      } else {
        setMessage('An error occurred. Please try again.');
      }
      console.error('Login failed:', error.response ? error.response.data : error);
    }
  };
  

  return (
    <>
      <AppBar position="static" style={{ marginBottom: '2rem' }}>
        <Toolbar>
          <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            HealthSync <SyncIcon style={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box
          boxShadow={3}
          p={3}
          bgcolor="background.paper"
          style={{ borderRadius: '8px' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              margin="normal"
              label="Username"
              type='text'
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: '100%' }}
            />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: '100%' }}
            />
            <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={handleLogin}>
              Login
            </Button>
          </Box>
          {message && (
            <Typography variant="body2" align="center" color="error" style={{ marginTop: '1rem' }}>
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
