import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button, AppBar, Toolbar } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';

const RegisterPage = () => {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      // Send registration request to backend
      const response = await axios.post('http://localhost:8085/users/register', {
        email,
        username,
        password
      });
      // Handle successful registration
      console.log(response.data);
      // Optionally, redirect user to login page or display success message
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error.response.data);
      // Optionally, display error message to user
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
            Register
          </Typography>
          
          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Username"
                type="text"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                margin="normal"
              />
            </div>
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '1rem' }}>
              Register
            </Button>
          </form>
          
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
