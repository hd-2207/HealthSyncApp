import React from 'react';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';

const CPULoadComponent = ({ cpuLoadData }) => {
  const { totalLoad } = cpuLoadData;

  let message;
  let color;

  if (totalLoad > 75) {
    message = 'CPU load is high!';
    color = 'red';
  } else if (totalLoad > 50) {
    message = 'CPU load is elevated.';
    color = 'orange';
  } else {
    message = 'CPU load is normal.';
    color = 'green';
  }

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>CPU Load</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            value={totalLoad}
            size={100} // Adjust the size here
            thickness={8} // Adjust the thickness here
            sx={{ color: totalLoad > 75 ? 'red' : totalLoad > 50 ? 'orange' : 'green', position: 'relative' }}
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
            <Typography variant="h6">{`${Math.round(totalLoad)}%`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" sx={{ color }}>{message}</Typography>
          <Typography>Total CPU Load: {totalLoad}%</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CPULoadComponent;
