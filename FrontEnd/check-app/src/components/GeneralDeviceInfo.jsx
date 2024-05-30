import React from 'react';
import { Container, Typography } from '@mui/material';

const GeneralDeviceInfo = ({ temperature, loadPercentage, batteryPercentage, memoryUsage, networkUsage }) => {
  const getStatusMessage = (parameter, value) => {
    switch (parameter) {
      case "memoryUsage":
        if (value > 75) return "Critical issue";
        if (value > 60) return "Warning";
        return "No issues found";
      case "networkUsage":
        if (value > 90) return "Critical issue";
        if (value > 50) return "Warning";
        return "No issues found";
      case "loadPercentage":
        if (value > 75) return "Critical issue";
        if (value > 50) return "Warning";
        return "No issues found";
      case "batteryPercentage":
        if (value < 10) return "Critical issue";
        if (value < 20) return "Warning";
        return "No issues found";
      case "temperature":
        if (value > 90) return "Critical issue";
        if (value > 80) return "Warning";
        return "No issues found";
      default:
        return "No issues found";
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Device Status
      </Typography>
      <Typography variant="subtitle1">Memory Status: {getStatusMessage("memoryUsage", memoryUsage)}</Typography>
      <Typography variant="subtitle1">Network Status: {getStatusMessage("networkUsage", networkUsage)}</Typography>
      <Typography variant="subtitle1">Performance Status: {getStatusMessage("loadPercentage", loadPercentage)}</Typography>
      <Typography variant="subtitle1">Battery Status: {getStatusMessage("batteryPercentage", batteryPercentage)}</Typography>
      <Typography variant="subtitle1">Temperature Status: {getStatusMessage("temperature", temperature)}</Typography>
    </Container>
  );
};

export default GeneralDeviceInfo;




/*import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

const GeneralDeviceInfo = ({ deviceId }) => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    fetchDeviceInformation();
  }, [deviceId]);

  const fetchDeviceInformation = async () => {
    try {
      const response = await fetch(`http://localhost:8080/device-health/${deviceId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched device information:', data); // Debugging statement
      setDeviceInfo(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const getStatusMessage = (parameter, value) => {
    switch (parameter) {
      case "memoryUsage":
        if (value > 75) return "Critical issue";
        if (value > 60) return "Warning";
        return "No issues found";
      case "networkUsage":
        if (value > 90) return "Critical issue";
        if (value > 50) return "Warning";
        return "No issues found";
      case "loadPercentage":
        if (value > 75) return "Critical issue";
        if (value > 50) return "Warning";
        return "No issues found";
      case "batteryPercentage":
        if (value < 10) return "Critical issue";
        if (value < 20) return "Warning";
        return "No issues found";
      case "temperature":
        if (value > 90) return "Critical issue";
        if (value > 80) return "Warning";
        return "No issues found";
      default:
        return "No issues found";
    }
  };

  if (!deviceInfo) {
    return (
      <Container>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Device Status
      </Typography>
  
      <Typography variant="subtitle1">Memory Status: {getStatusMessage("memoryUsage", deviceInfo.memoryUsage)}</Typography>
      <Typography variant="subtitle1">Network Status: {getStatusMessage("networkUsage", deviceInfo.networkUsage)}</Typography>
      <Typography variant="subtitle1">Performance Status: {getStatusMessage("loadPercentage", deviceInfo.loadPercentage)}</Typography>
      <Typography variant="subtitle1">Battery Status: {getStatusMessage("batteryPercentage", deviceInfo.batteryPercentage)}</Typography>
      <Typography variant="subtitle1">Temperature Status: {getStatusMessage("temperature", deviceInfo.temperature)}</Typography>
    </Container>
  );
};

export default GeneralDeviceInfo;

*/

/*import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

const GeneralDeviceInfo = ({ deviceId }) => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    fetchDeviceInformation();
  }, [deviceId]);

  const fetchDeviceInformation = async () => {
    try {
      const response = await fetch(`http://localhost:8080/device-health/${deviceId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched device information:', data); // Debugging statement
      setDeviceInfo(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const getStatusMessage = (parameter, value) => {
    switch (parameter) {
      case "memoryUsage":
        if (value > 75) return "Critical issue";
        if (value > 60) return "Warning";
        return "No issues found";
      case "networkUsage":
        if (value > 90) return "Critical issue";
        if (value > 50) return "Warning";
        return "No issues found";
      case "loadPercentage":
        if (value > 75) return "Critical issue";
        if (value > 50) return "Warning";
        return "No issues found";
      case "batteryPercentage":
        if (value < 10) return "Critical issue";
        if (value < 20) return "Warning";
        return "No issues found";
      case "temperature":
        if (value > 90) return "Critical issue";
        if (value > 80) return "Warning";
        return "No issues found";
      default:
        return "No issues found";
    }
  };
  
  if (!deviceInfo) {
    return (
      <Container>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Device Status
      </Typography>
  
      <Typography variant="subtitle1">Memory Status: {getStatusMessage("memoryUsage", deviceInfo.memoryUsage)}</Typography>
<Typography variant="subtitle1">Network Status: {getStatusMessage("networkUsage", deviceInfo.networkUsage)}</Typography>
<Typography variant="subtitle1">Performance Status: {getStatusMessage("loadPercentage", deviceInfo.loadPercentage)}</Typography>
<Typography variant="subtitle1">Battery Status: {getStatusMessage("batteryPercentage", deviceInfo.batteryPercentage)}</Typography>
<Typography variant="subtitle1">Temperature Status: {getStatusMessage("temperature", deviceInfo.temperature)}</Typography>

  
    </Container>
  );
};

export default GeneralDeviceInfo;
*/