import React from 'react';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';

const TemperatureComponent = ({ tempData }) => {
  const { currentTemp } = tempData;

  let message;
  let color;

  if (currentTemp > 75) {
    message = 'Device is heated up!';
    color = 'red';
  } else if (currentTemp > 50) {
    message = 'Temperature is elevated.';
    color = 'orange';
  } else {
    message = 'Device temperature is normal.';
    color = 'green';
  }

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Temperature</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            value={currentTemp}
            size={100} // Adjust the size here
            thickness={8} // Adjust the thickness here
            sx={{ color: currentTemp > 40 ? 'red' : currentTemp > 35 ? 'orange' : 'green', position: 'relative' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%'
            }}
          >
            <Typography variant="h6">{`${Math.round(currentTemp)}°C`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" sx={{ color }}>{message}</Typography>
          <Typography>Current Temperature: {currentTemp}°C</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TemperatureComponent;
