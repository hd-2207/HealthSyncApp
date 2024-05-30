package com.projectone.devicehealth.exception;

public class DeviceHealthServiceException extends RuntimeException {
	
	public DeviceHealthServiceException(String message) {
        super(message);
    }

    public DeviceHealthServiceException(String message, Throwable cause) {
        super(message, cause);
    }

}
