package com.projectone.devicehealth.service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.projectone.devicehealth.entity.DeviceHealth;
import com.projectone.devicehealth.exception.DeviceHealthServiceException;
import com.projectone.devicehealth.repository.DeviceHealthRepository;

import jakarta.annotation.PostConstruct;

@Service
public class DeviceHealthService {

    @Autowired
    private DeviceHealthRepository repository;

    public DeviceHealth getDeviceHealthById(Long id) {
        try {
            return repository.findById(id).orElse(null);
        } catch (Exception e) {
            throw new DeviceHealthServiceException("Error getting device health by ID", e);
        }
    }
 
    public List<DeviceHealth> getLastThreeScans() {
        try {
            // Retrieve the top 3 records sorted by lastScan in descending order
            return repository.findTop3ByOrderByLastScanDesc();
        } catch (Exception e) {
            throw new DeviceHealthServiceException("Error getting last three scans", e);
        }
    }

    public DeviceHealth updateDeviceHealth(Long id, DeviceHealth deviceHealth) {
        try {
            // Update lastScan field before saving
            deviceHealth.setLastScan(LocalDateTime.now());
            
            if (repository.existsById(id)) {
                // Set the ID of the device health record to be updated
                deviceHealth.setId(id);
                return repository.save(deviceHealth);
            } else {
                return null;
            }
        } catch (Exception e) {
            throw new DeviceHealthServiceException("Error updating device health", e);
        }
    }

    public boolean deleteDeviceHealth(Long id) {
        try {
            if (repository.existsById(id)) {
                repository.deleteById(id);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            throw new DeviceHealthServiceException("Error deleting device health", e);
        }
    }
    // New method to initialize mock data
    
    @PostConstruct
    public void init() {
        initializeMockData();
    }
    
    public void initializeMockData() {
        if (repository.count() == 0) {
            DeviceHealth mockDevice1 = new DeviceHealth(36.5, 70.0, 50.0, 40.0, 20.0, LocalDateTime.now().minusDays(1), "Unhealthy");
            DeviceHealth mockDevice2 = new DeviceHealth(35.0, 60.0, 80.0, 30.0, 15.0, LocalDateTime.now().minusDays(2), "Healthy");

            repository.saveAll(Arrays.asList(mockDevice1, mockDevice2));
        }
    }
}










