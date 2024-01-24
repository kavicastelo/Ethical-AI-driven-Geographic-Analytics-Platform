# Air Quality Monitoring API Test Plan

## 1. Introduction
### 1.1. Purpose
The purpose of this document is to outline the testing approach and strategy for the Air Quality Monitoring API.

### 1.2. Scope
The scope of this test plan covers the testing of the following aspects of the API:
- API Testing
  - Basic CRUD Operations
  - Air Quality Operations
  - Meteorological Operations
  - Land Use Operations
  - Bulk Import Data
  - Data Retrieval by Date Range
  - Median and Mode Calculations
  - Correlation Calculations
- Services Integration Testing
  - Data Retrieval by Date Range
  - Median and Mode Calculations
  - Correlation Calculations

## 2. Test Objectives
The primary objectives of testing the Air Quality Monitoring API are as follows:
1. Validate the correctness of data input and output.
2. Ensure the accuracy of calculations for mean, median, and correlation.
3. Verify the reliability of CRUD operations.
4. Test the performance of bulk data import operations.
5. Validate the functionality of data retrieval operations.

## 3. Test Environment
### 3.1. Software
- Java (JDK 17)
- Spring Boot
- JUnit 5
- Mockito
- MongoDB
- Postman or similar API testing tool

### 3.2. Hardware
The test environment should mirror the production environment as closely as possible.

## 4. Test Cases
### 4.1. API Testing
These test cases are covered by the [API doc](API%20doc.md) document. All test cases are executed using Postman or similar API testing tool.

### 4.2. Services Integration Testing
#### 4.2.1. Data Retrieval by Date Range
Unit testing is performed using JUnit 5.
- **Request Method:**
  ```java
  @SpringBootTest
  public class AirQualityServiceTest {

    @Autowired
    private AirQualityService airQualityService;

    @Test
    public void testGetAverageCo2ByDateRange() {
        // Perform the service method
        Double result = airQualityService.getAverageCo2ByDateRange("2023-01-01", "2023-01-31");

        // Assertions
        assertNotNull(result);
        // Add more assertions based on your specific use case
    }
  }
  ```
- **Response:**
  <div>
  <a href="https://github.com/kavicastelo">
  <img alt="Tests Passing" src="https://github.com/anuraghazra/github-readme-stats/workflows/Test/badge.svg" />
  </a>
  </div>
  
#### 4.2.2. Median and Mode Calculations
Unit testing is performed using JUnit 5.
- **Request Method:** (Median)
  ```java
  @SpringBootTest
  public class AirQualityServiceTest {
  
    @Autowired
    private AirQualityService airQualityService;
  
    @Test
    public void testCalculateMedianPm25(){
        Double result = airQualityService.calculateMedianPm25();
        assertNotNull(result);
    }
  }
  ```
- **Response:**
  <div>
  <a href="https://github.com/kavicastelo">
  <img alt="Tests Passing" src="https://github.com/anuraghazra/github-readme-stats/workflows/Test/badge.svg" />
  </a>
  </div>

- **Request Method:** (Mode)
  ```java
  @SpringBootTest
  public class AirQualityServiceTest {
      
    @Autowired
    private AirQualityService airQualityService;
  
    @Test
    public void testCalculateModeNo2(){
        Double result = airQualityService.calculateModeNo2();
        assertNotNull(result);
    }
  }
  ```
- **Response:**
  <div>
  <a href="https://github.com/kavicastelo">
  <img alt="Tests Passing" src="https://github.com/anuraghazra/github-readme-stats/workflows/Test/badge.svg" />
  </a>
  </div>

#### 4.2.3. Correlation Calculations
- **Request Method:** (Correlation)
  ```java
  @SpringBootTest
  public class AirQualityServiceTest {
  
    @MockBean
    private AirQualityRepository airQualityRepository;
  
    @Autowired
    private AirQualityService airQualityService;
  
    @Test
    public void testCalculateCorrelationPm25Co2(){
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setCo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setCo2("18.0");

        when(airQualityRepository.findAllByPm25AndCo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndCo2();
        assertNotNull(result);
    }
  }
  ```
- **Response:**
  <div>
  <a href="https://github.com/kavicastelo">
  <img alt="Tests Passing" src="https://github.com/anuraghazra/github-readme-stats/workflows/Test/badge.svg" />
  </a>
  </div>
