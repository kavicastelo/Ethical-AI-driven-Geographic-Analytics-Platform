# Release Notes v1.0.0
## Overview
We are excited to announce the initial release of our Air Quality Monitoring Application, version 1.0.0. This release lays the foundation for our platform, focusing on Spring Boot backend functionality and basic CRUD operations for the following entities:
- Air Quality
- Land Use
- Meteorological

## Key Features
### Backend Structure
The backend is built on the Spring Boot framework (version 3.2.0), utilizing Java 17. The MongoDB database is employed to store and manage data efficiently.

### File Structure
The application follows a modular file structure for enhanced organization:
```text
com.api.air_quality
    - controller
        - airQualityController
        - landUseController
        - metrologicalController
    - model
        - airQualityModel
        - landUseModel
        - metrologicalModel
    - repository
        - airQualityRepository
        - landUseRepository
        - metrologicalRepository
    - service
        - airQualityService
        - landUseService
        - metrologicalService
    - dto
        - ApiResponse
    - AirQualityApplication
    - CorsConfig
    - MongoConfig
```
### CRUD Operations
In this version, basic CRUD operations are implemented for Air Quality, Land Use, and Meteorological entities. Repository methods are utilized to handle operations, and service files remain unimplemented.

### Technology Stack
The application is built using the following technologies:
- **Spring Boot**: version 3.2.0
- **Java**: Version 17
- **Database**: MongoDB

### Configuration
The application has disabled Spring Security, and route configurations are managed using the CorsConfig file. Responses are formatted into JSON using the ApiResponse class.

### Next Steps
While v1.0.0 provides a solid foundation for our platform, upcoming releases will focus on implementing service logic, adding authentication, and expanding CRUD functionalities. We appreciate your support and look forward to delivering more features in future releases.

Thank you for being part of our journey!

[- Kavindu Kokila(Fullstack developer)](mailto:kavindu.kokila.info@gmail.com)
