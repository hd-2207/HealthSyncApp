package com.projectone.devicehealth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.projectone.devicehealth.entity.DeviceHealth;
import com.projectone.devicehealth.repository.DeviceHealthRepository;
import com.projectone.devicehealth.service.DeviceHealthService;
import com.projecttemptest.users.entity.Users;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/device-health")
public class DeviceHealthController {

    @Autowired
    private DeviceHealthService service;
    
    @Autowired
    private DeviceHealthRepository deviceHealthRepository;

    @GetMapping("/{id}")
    public ResponseEntity<?> getDeviceHealth(@PathVariable Long id) {
        DeviceHealth deviceHealth = service.getDeviceHealthById(id);
        if (deviceHealth != null) {
            return ResponseEntity.ok().body(deviceHealth);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
   
   /* @PutMapping("/{id}")
    public ResponseEntity<DeviceHealth> updateDeviceHealth(@PathVariable("id") Long id, 
                                                           @RequestBody DeviceHealth deviceHealth) {
        DeviceHealth updatedDeviceHealth = service.updateDeviceHealth(id, deviceHealth);
        if (updatedDeviceHealth != null) {
            return new ResponseEntity<>(updatedDeviceHealth, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }*/

   /* @PutMapping("/{id}")
    public ResponseEntity<DeviceHealth> updateDeviceHealth(@PathVariable("id") Long id, 
                                                           @RequestBody DeviceHealth deviceHealth,
                                                           @RequestParam("userId") Long userId) {
        DeviceHealth updatedDeviceHealth = service.updateDeviceHealth(userId, id, deviceHealth);
        if (updatedDeviceHealth != null) {
            return new ResponseEntity<>(updatedDeviceHealth, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } */
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateDeviceHealth(@PathVariable Long id, @RequestBody DeviceHealth updatedDeviceHealth) {
        DeviceHealth existingDeviceHealth = service.getDeviceHealthById(id);
        if (existingDeviceHealth != null) {
        
            updatedDeviceHealth.setId(id);
            deviceHealthRepository.save(updatedDeviceHealth);
            return ResponseEntity.ok().body("Device health record updated successfully");
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/history/last-three")
    public ResponseEntity<?> getLastThreeScans() {
        List<DeviceHealth> history = service.getLastThreeScans();
        if (history != null && !history.isEmpty()) {
            return ResponseEntity.ok().body(history);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/create")
    public ResponseEntity<String> createDeviceHealth(@RequestBody DeviceHealth deviceHealth) {
        DeviceHealth savedDeviceHealth = deviceHealthRepository.save(deviceHealth);
        return new ResponseEntity<>("Device health record created successfully with ID: " + savedDeviceHealth.getId(), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDeviceHealth(@PathVariable Long id) {
        boolean isRemoved = service.deleteDeviceHealth(id);
        if (!isRemoved) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Device health record deleted successfully", HttpStatus.OK);
    }
}
