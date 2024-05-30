package com.projecttwo.devicehealthcheck.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.projecttwo.devicehealthcheck.entity.DeviceHealth;
import com.projecttwo.devicehealthcheck.service.DeviceHealthCheckService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/device-health-check")
public class DeviceHealthCheckController {

    @Autowired
    private DeviceHealthCheckService service;

    @GetMapping("/check/{id}")
    public ResponseEntity<?> checkDeviceHealth(@PathVariable Long id) {
        String status = service.checkDeviceHealth(id);
        return ResponseEntity.ok().body(Map.of("status", status));
    }
}
