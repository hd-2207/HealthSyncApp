# HealthSync

HealthSync is an application designed to monitor and report on the health status of devices.
The application is divided into two main parts: a backend written in Java and a frontend developed using React.

## Project Description

HealthSync provides a platform for users to monitor the health of their devices. The backend service handles data processing and storage,
while the frontend provides an intuitive user interface for users to interact with the system.

## Microservices

### User Microservice
- Manages user accounts.
- Provides endpoints for user registration, login, and logout.

### Device Health Microservice
- CRUD operations for the health status of devices.
- Provides endpoints to get the status of various device components like memory, network, performance, battery, and temperature.

### Device Health Check Microservice
- Performs health checks on devices.
- Updates the health status in the Device Health microservice.

  
