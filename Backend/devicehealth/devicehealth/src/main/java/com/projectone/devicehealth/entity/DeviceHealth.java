package com.projectone.devicehealth.entity;


import java.time.LocalDateTime;



import jakarta.persistence.*;

@Entity
@Table(name="devicehealth")
public class DeviceHealth {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	  
   
  
	
	

	private double temperature;
    private double loadPercentage;
    private double batteryPercentage;
    private double memoryUsage;
    private double networkUsage;
    private LocalDateTime lastScan;
    private String status;
    
   

    
    public DeviceHealth() {}

	public DeviceHealth(double temperature, double loadPercentage, double batteryPercentage, double memoryUsage,
			double networkUsage,LocalDateTime lastScan, String status) {
		super();
	     
		
		this.temperature = temperature;
		this.loadPercentage = loadPercentage;
		this.batteryPercentage = batteryPercentage;
		this.memoryUsage = memoryUsage;
		this.networkUsage = networkUsage;
		this.lastScan = lastScan;
		this.status = status;
	}

	public LocalDateTime getLastScan() {
		return lastScan;
	}

	public void setLastScan(LocalDateTime lastScan) {
		this.lastScan = lastScan;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getTemperature() {
		return temperature;
	}

	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}

	public double getLoadPercentage() {
		return loadPercentage;
	}

	public void setLoadPercentage(double loadPercentage) {
		this.loadPercentage = loadPercentage;
	}

	public double getBatteryPercentage() {
		return batteryPercentage;
	}

	public void setBatteryPercentage(double batteryPercentage) {
		this.batteryPercentage = batteryPercentage;
	}

	public double getMemoryUsage() {
		return memoryUsage;
	}

	public void setMemoryUsage(double memoryUsage) {
		this.memoryUsage = memoryUsage;
	}

	public double getNetworkUsage() {
		return networkUsage;
	}

	public void setNetworkUsage(double networkUsage) {
		this.networkUsage = networkUsage;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
    
    
    
}
