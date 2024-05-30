import React from 'react';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';

const BatteryComponent = ({ batteryData }) => {
  const { remainingCapacity, totalCapacity } = batteryData;
  const batteryPercentage = (remainingCapacity / totalCapacity) * 100;

  let message;
  let color;

  if (batteryPercentage < 30) {
    message = 'Battery is low!';
    color = 'red';
  } else if (batteryPercentage < 50) {
    message = 'Battery is running out.';
    color = 'orange';
  } else {
    message = 'Battery is charged.';
    color = 'green';
  }

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Battery</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            value={batteryPercentage}
            size={100} // Adjust the size here
            thickness={8} // Adjust the thickness here
            sx={{ color: batteryPercentage < 30 ? 'red' : batteryPercentage < 50 ? 'orange' : 'green', position: 'relative' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '52%',
              left: '30%', // Adjust the left position here
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%'
            }}
          >
            <Typography variant="h6">{`${Math.round(batteryPercentage)}%`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" sx={{ color }}>{message}</Typography>
          <Typography>Total Capacity: {totalCapacity} %</Typography>
          <Typography>Remaining Capacity: {remainingCapacity} %</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BatteryComponent;
