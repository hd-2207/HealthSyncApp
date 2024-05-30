import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const LastScanInfo = ({ deviceId }) => {
  const [lastScan, setLastScan] = useState(null);
  const [totalStatus, setTotalStatus] = useState(null);

  useEffect(() => {
    fetchLastScan();
    fetchTotalStatus();
  }, [deviceId]);

  const fetchLastScan = async () => {
    try {
      const response = await fetch(`http://localhost:8080/device-health/${deviceId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLastScan(data.lastScan);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const fetchTotalStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8081/device-health-check/check/${deviceId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTotalStatus(data.status);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <>
      <Typography variant="subtitle1">
        Last Scan: {lastScan ? new Date(lastScan).toLocaleString() : 'Loading...'}
      </Typography>
     {/* {totalStatus && (
        <Typography variant="subtitle1">
          Current Device Status: {totalStatus}
        </Typography>
      )}  */}
    </>
  );
};

export default LastScanInfo;
