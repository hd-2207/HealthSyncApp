import React, { useState, useEffect } from 'react';
import { Container, Typography, Toolbar, Button, Grid, Box, Alert } from '@mui/material';
import GeneralDeviceInfo from './GeneralDeviceInfo';
import MemoryComponent from './MemoryComponent';
import BatteryComponent from './BatteryComponent';
import CPULoadComponent from './CPULoadComponent';
import LastScanInfo from './LastScanInfo';
import TemparatureComponent from './TemparatureComponent';

const Dashboard = () => {
  const [deviceId] = useState(1); // Example device ID
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [showDeviceInfo, setShowDeviceInfo] = useState(false);
  const [totalStatus, setTotalStatus] = useState('');

  // State for fetched data
  const [temperature, setTemperature] = useState(0);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkUsage, setNetworkUsage] = useState(0);

  useEffect(() => {
    fetchDeviceData();
  }, [deviceId, updateTrigger]); // Fetch data when deviceId or updateTrigger changes

  const fetchDeviceData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/device-health/${deviceId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTemperature(data.temperature);
      setLoadPercentage(data.loadPercentage);
      setBatteryPercentage(data.batteryPercentage);
      setMemoryUsage(data.memoryUsage);
      setNetworkUsage(data.networkUsage);
      setTotalStatus(data.status); // Use the status from the backend
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleScan = () => {
    setUpdateTrigger(prev => !prev);
    setShowDeviceInfo(true); // Trigger the scan and show device info
  };

  const handleBack = () => {
    setShowDeviceInfo(false); // Hide the General Device Information component
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Critical":
        return "error";
      case "Unhealthy":
        return "warning";
      case "Warning":
        return "info";
      case "Healthy":
        return "success";
      default:
        return "default";
    }
  };

  const totalMemory = 16; // Example total memory in GB
  const usedMemory = (totalMemory * memoryUsage) / 100;
  const freeMemory = totalMemory - usedMemory;

  const cpuLoadData = {
    totalLoad: loadPercentage,
    cores: [
      { coreId: 1, load: 60 },
      { coreId: 2, load: 40 },
      // Add more core data as needed
    ],
  };

  const batteryData = {
    totalCapacity: 100, // Battery capacity percentage is 100
    remainingCapacity: batteryPercentage,
  };
  
  const tempData = {
    currentTemp: temperature,
  };

  const memoryData = {
    totalMemory,
    usedMemory,
    freeMemory,
  };

  const statusColor = getStatusColor(totalStatus);

  return (
    <Container sx={{ marginTop: '-80px', marginLeft: '-48px', paddingTop: 0 }}>
      <Toolbar />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Dashboard
        </Typography>
        {!showDeviceInfo && (
          <Alert severity={statusColor} style={{ marginRight: '20px' }}>
            Device Status: {totalStatus}
          </Alert>
        )}
      </Box>
      {!showDeviceInfo && (
        <>
          <LastScanInfo deviceId={deviceId} /> {/* Render LastScanInfo component here */}
        </>
      )}
      <Typography style={{marginTop:'20px' , marginLeft:'-25px'}}>
        <GeneralDeviceInfo 
          temperature={temperature}
          loadPercentage={loadPercentage}
          batteryPercentage={batteryPercentage}
          memoryUsage={memoryUsage}
          networkUsage={networkUsage}
        />
      </Typography>
      {!showDeviceInfo && (
        <Typography sx={{ marginLeft:'75px' , marginTop:'20px'}} >
          <Button variant="contained" color="primary" onClick={handleScan}>
            Scan
          </Button>
        </Typography>
      )}
      {showDeviceInfo && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MemoryComponent memoryData={memoryData} />
            </Grid>
            <Grid item xs={12}>
              <BatteryComponent batteryData={batteryData} />
            </Grid>
            <Grid item xs={12}>
              <CPULoadComponent cpuLoadData={cpuLoadData} />
            </Grid>
            <Grid item xs={12}>
              <TemparatureComponent tempData={tempData} />
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleBack} sx={{ marginTop: 2 }}>
            Back
          </Button>
        </>
      )}
    </Container>
  );
};

export default Dashboard;





/*import React, { useState, useEffect } from 'react';
import { Container, Typography, Toolbar, Button, Grid, Box, Alert } from '@mui/material';
import GeneralDeviceInfo from './GeneralDeviceInfo';
import MemoryComponent from './MemoryComponent';
import BatteryComponent from './BatteryComponent';
import CPULoadComponent from './CPULoadComponent';
import LastScanInfo from './LastScanInfo';
import TemperatureComponent from './TemparatureComponent';

const Dashboard = () => {
  const [deviceId] = useState(5); // Example device ID
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [showDeviceInfo, setShowDeviceInfo] = useState(false);
  const [totalStatus, setTotalStatus] = useState('');

  // State for fetched data
  const [temperature, setTemperature] = useState(0);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkUsage, setNetworkUsage] = useState(0);

  useEffect(() => {
    fetchDeviceData();
  }, [deviceId, updateTrigger]); // Fetch data when deviceId or updateTrigger changes

  const fetchDeviceData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/device-health/${deviceId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTemperature(data.temperature);
      setLoadPercentage(data.loadPercentage);
      setBatteryPercentage(data.batteryPercentage);
      setMemoryUsage(data.memoryUsage);
      setNetworkUsage(data.networkUsage);
      setTotalStatus(getTotalStatus());
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleScan = () => {
    setUpdateTrigger(prev => !prev);
    setShowDeviceInfo(false); // Reset showDeviceInfo to false before scanning
    setShowDeviceInfo(true); // Then set it to true to trigger the scan
  };

  const handleBack = () => {
    setShowDeviceInfo(false); // Hide the General Device Information component
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Critical":
        return "error";
      case "Unhealthy":
        return "warning";
      case "Warning":
        return "info";
      case "Healthy":
        return "success";
      default:
        return "default";
    }
  };

  const totalMemory = 16; // Example total memory in GB
  const usedMemory = (totalMemory * memoryUsage) / 100;
  const freeMemory = totalMemory - usedMemory;

  const cpuLoadData = {
    totalLoad: loadPercentage,
    cores: [
      { coreId: 1, load: 60 },
      { coreId: 2, load: 40 },
      // Add more core data as needed
    ],
  };

  const batteryData = {
    totalCapacity: 100, // Battery capacity percentage is 100
    remainingCapacity: batteryPercentage,
  };
   const tempData = {
       currentTemp :temperature,
   }
  const memoryData = {
    totalMemory,
    usedMemory,
    freeMemory,
  };

  const getTotalStatus = () => {
    if (temperature > 45 || loadPercentage > 95 || batteryPercentage < 10 || memoryUsage > 90 || networkUsage > 90) {
      return "Critical";
    } else if (temperature > 40 || loadPercentage > 90 || batteryPercentage < 20 || memoryUsage > 80 || networkUsage > 80) {
      return "Unhealthy";
    } else if (temperature > 35 || loadPercentage > 80 || batteryPercentage < 30 || memoryUsage > 70 || networkUsage > 70) {
      return "Warning";
    } else {
      return "Healthy";
    }
  };

  const statusColor = getStatusColor(totalStatus);

  return (
    <Container sx={{ marginTop: '-80px', marginLeft: '-48px', paddingTop: 0 }}>
      <Toolbar />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Dashboard
        </Typography>
        {!showDeviceInfo && (
          <Alert severity={statusColor} style={{ marginRight: '20px' }}>
            Device Status: {totalStatus}
          </Alert>
        )}
      </Box>
      {!showDeviceInfo && (
        <>
          <LastScanInfo deviceId={deviceId} /> 
        </>
      )}
      <Typography style={{marginTop:'20px' , marginLeft:'-25px'}}>
      <GeneralDeviceInfo deviceId={deviceId} />
      </Typography>
      {!showDeviceInfo && (
        <Typography sx={{ marginLeft:'75px' , marginTop:'20px'}} >
        <Button variant="contained" color="primary" onClick={handleScan}>
          Scan
        </Button>
        </Typography>
      )}
      {showDeviceInfo && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MemoryComponent memoryData={memoryData} />
            </Grid>
            <Grid item xs={12}>
              <BatteryComponent batteryData={batteryData} />
            </Grid>
            <Grid item xs={12}>
              <CPULoadComponent cpuLoadData={cpuLoadData} />
            </Grid>
            <Grid item xs={12}>
              <TemperatureComponent tempData={tempData} />
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleBack} sx={{ marginTop: 2 }}>
            Back
          </Button>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
*/
