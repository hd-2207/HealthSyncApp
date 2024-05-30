import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

const DeviceHistory = () => {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScans = async () => {
      try {
        const response = await fetch('http://localhost:8080/device-health/history/last-three');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setScans(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchScans();
  }, []);

  if (loading) {
    return <Container><Typography>Loading...</Typography></Container>;
  }

  if (error) {
    return <Container><Typography>Error: {error.message}</Typography></Container>;
  }

  return (
    <Container sx={{ marginTop: 0, paddingTop: 0 }}>
      <Typography variant="h4" gutterBottom>
        Last Three Device Health Scans
      </Typography>
      <ul>
        {scans.map((scan) => (
          <li key={scan.id}>
            <p>Temperature: {scan.temperature}</p>
            <p>Load Percentage: {scan.loadPercentage}</p>
            <p>Battery Percentage: {scan.batteryPercentage}</p>
            <p>Memory Usage: {scan.memoryUsage}</p>
            <p>Network Usage: {scan.networkUsage}</p>
            <p>Last Scan: {new Date(scan.lastScan).toLocaleString()}</p>
            <p>Status: {scan.status}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default DeviceHistory;
