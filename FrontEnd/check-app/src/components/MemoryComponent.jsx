import React from 'react';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';

const MemoryComponent = ({ memoryData }) => {
  const { totalMemory, usedMemory, freeMemory } = memoryData;
  const memoryUsage = (usedMemory / totalMemory) * 100;

  let message;
  let color;

  if (memoryUsage > 75) {
    message = 'Memory usage is high!';
    color = 'red';
  } else if (memoryUsage > 50) {
    message = 'Memory usage is elevated.';
    color = 'orange';
  } else {
    message = 'Memory usage is normal.';
    color = 'green';
  }

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Memory</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            value={memoryUsage}
            size={100} // Adjust the size here
            thickness={8} // Adjust the thickness here
            sx={{ color: memoryUsage > 75 ? 'red' : memoryUsage > 50 ? 'orange' : 'green', position: 'relative' }}
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
            <Typography variant="h6">{`${Math.round(memoryUsage)}%`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" sx={{ color }}>{message}</Typography>
          <Typography>Total: {totalMemory} GB</Typography>
          <Typography>Used: {usedMemory} GB</Typography>
          <Typography>Free: {freeMemory} GB</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemoryComponent;
