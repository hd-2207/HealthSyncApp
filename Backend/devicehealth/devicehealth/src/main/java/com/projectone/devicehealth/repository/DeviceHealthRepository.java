package com.projectone.devicehealth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectone.devicehealth.entity.DeviceHealth;
public interface DeviceHealthRepository extends JpaRepository<DeviceHealth, Long> {
	 List<DeviceHealth> findTop3ByOrderByLastScanDesc();
	  
}
