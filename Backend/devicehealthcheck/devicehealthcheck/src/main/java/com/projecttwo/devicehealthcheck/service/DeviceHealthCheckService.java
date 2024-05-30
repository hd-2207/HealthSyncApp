package com.projecttwo.devicehealthcheck.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.projecttwo.devicehealthcheck.entity.DeviceHealth;

@Service
public class DeviceHealthCheckService {

    @Autowired
    private RestTemplate restTemplate;

    public String checkDeviceHealth(Long deviceId) {
        DeviceHealth deviceHealth = fetchDeviceHealth(deviceId);

        if (deviceHealth != null) {
            String status = determineStatus(deviceHealth);
            deviceHealth.setStatus(status);
            
            // Update lastScan field before sending for update
            deviceHealth.setLastScan(LocalDateTime.now());

            // Update the status in the DeviceHealth microservice
            try {
                // PUT request to update device health status
                ResponseEntity<String> response = restTemplate.exchange(
                    "http://localhost:8080/device-health/update/{id}", 
                    HttpMethod.PUT, 
                    new HttpEntity<>(deviceHealth), 
                    String.class, 
                    deviceId
                );

                if (response.getStatusCode() == HttpStatus.OK) {
                    // Successfully updated status
                    return status;
                } else {
                    // Handle other status codes if needed
                    return "Error updating device health status. Unexpected response: " + response.getStatusCodeValue();
                }
            } catch (HttpClientErrorException e) {
                // Handle HTTP error
                return "Error updating device health status: " + e.getMessage();
            }
        } else {
            return "Device health data not found";
        }
    }

    private DeviceHealth fetchDeviceHealth(Long deviceId) {
        String url = "http://localhost:8080/device-health/" + deviceId; // Endpoint of DeviceHealth microservice
        try {
            return restTemplate.getForObject(url, DeviceHealth.class);
        } catch (HttpClientErrorException e) {
            // Handle HTTP error
            return null;
        }
    }

    private String determineStatus(DeviceHealth deviceHealth) {
        double temperature = deviceHealth.getTemperature();
        double loadPercentage = deviceHealth.getLoadPercentage();
        double batteryPercentage = deviceHealth.getBatteryPercentage();
        double memoryUsage = deviceHealth.getMemoryUsage();
        double networkUsage = deviceHealth.getNetworkUsage();

        if (temperature > 90 || loadPercentage > 95 || batteryPercentage < 10 || memoryUsage > 90 || networkUsage > 90) {
            return "Critical";
        } else if (temperature > 80 || loadPercentage > 90 || batteryPercentage < 20 || memoryUsage > 80 || networkUsage > 80) {
            return "Unhealthy";
        } else if (temperature > 70 || loadPercentage > 80 || batteryPercentage < 30 || memoryUsage > 70 || networkUsage > 70) {
            return "Warning";
        } else {
            return "Healthy";
        }
    }
}
