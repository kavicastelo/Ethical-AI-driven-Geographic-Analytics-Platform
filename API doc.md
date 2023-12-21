# Air Quality and Meteorological Data APIs

## Introduction

Welcome to the documentation for the Air Quality and Meteorological Data APIs. This set of APIs provides functionalities for managing air quality, meteorological data, land use information, and various statistical analyses.

## Base URL

All endpoints are relative to the base URL:
```markdown
https://your-api-base-url.com/api/v1
```


## Authentication

To access the APIs, you need to include your API key in the request headers.

```http
Authorization: Bearer YOUR_API_KEY
```

## API Endpoints
### Air Quality
1. #### Save Air Quality Data
   - **Endpoint:** `/saveAirQuality`
   - **Method:** `POST`
   - **Description:** Save air quality data.
   - **Request:**
    ```json
    {
    "timestamp": "2023-01-01T12:00:00Z",
    "pm25": 10.5,
    "pm10": 25.2,
    "co2": 400,
    "ozone": 20,
    "no2": 15,
    "temperature": 25.0,
    "humidity": 50.0,
    "windSpeed": 10.0
    }
    ```
   - **Response:**
    ```json
    {
    "message": "Data saved successfully"
    }
    ```

2. #### Get All Air Quality Data
    - **Endpoint:** `/getAllAirQuality`
    - **Method:** `GET`
    - **Description:** Retrieve all air quality data.
    - **Response:**
   ```json
    [
      {
      "id": "123",
      "timestamp": "2023-01-01T12:00:00Z",
      "pm25": 10.5,
      "pm10": 25.2,
      "co2": 400,
      "ozone": 20,
      "no2": 15,
      "temperature": 25.0,
      "humidity": 50.0,
      "windSpeed": 10.0
      }
    ]
    ```
   
3. #### Get Air Quality Data By ID
    - **Endpoint:** `/getAirQualityById/{id}`
    - **Method:** `GET`
    - **Description:** Retrieve one air quality data row by id
    - **Request:** 
    ```http request
   https://your-api-base-url.com/api/v1/getAirQualityById/id=123
    ```
    - **Response:** 
    ```json
    [
      {
      "id": "123",
      "timestamp": "2023-01-01T12:00:00Z",
      "pm25": 10.5,
      "pm10": 25.2,
      "co2": 400,
      "ozone": 20,
      "no2": 15,
      "temperature": 25.0,
      "humidity": 50.0,
      "windSpeed": 10.0
      }
    ]
    ```
   
4. #### Delete Air Quality Data By ID
    - **Endpoint:** `/deleteAirQuality/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete one air quality data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/deleteAirQuality/id=123
    ```
    - **Response:**
    ```json
    {
    "message": "123 Data Deleted"
    }
    ```
   
5. #### Update Air Quality Data By ID
    - **Endpoint:** `/updateAirQuality/{id}`
    - **Method:** `PUT`
    - **Description:** Update one air quality data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/updateAirQuality/id=123
    ```
    - **Response:**
    ```json
    {
    "message": "123 Data Updated"
    }
    ```
   
6. #### Bulk import Air Quality Data
    - **Endpoint:** `/updateAirQuality/{id}`
    - **Method:** `PUT`
    - **Description:** Update one air quality data row by id
    - **Request:**
    ```markdown
   File
    ```
    - **Response:**
    ```json
    {
    "message": "Data Imported Successfully"
    }
    ```
   
7. #### Get Mean Value of Air Quality Pm25 column by Date Range
    - **Endpoint:** `/getAQAveragePm25ByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of pm25 column data by date range
    - **Request:**
    ```json
   {
   "startDate": "2022-01-01",
   "endDate": "2024-01-01"
   }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```
   
8. #### Get Mean Value of Air Quality Pm10 column by Date Range
    - **Endpoint:** `/getAQAveragePm10ByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of pm10 column data by date range
    - **Request:**
    ```json
   {
   "startDate": "2022-01-01",
   "endDate": "2024-01-01"
   }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```
   
9. #### Get Mean Value of Air Quality Co2 column by Date Range
    - **Endpoint:** `/getAQAverageCo2ByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of co2 column data by date range
    - **Request:**
    ```json
   {
   "startDate": "2022-01-01",
   "endDate": "2024-01-01"
   }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```
   
10. #### Get Mean Value of Air Quality Ozone column by Date Range
    - **Endpoint:** `/getAQAverageOzoneByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of ozone column data by date range
    - **Request:**
    ```json
    {
    "startDate": "2022-01-01",
    "endDate": "2024-01-01"
    }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```
    
11. #### Get Mean Value of Air Quality No2 column by Date Range
    - **Endpoint:** `/getAQAverageNo2ByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of no2 column data by date range
    - **Request:**
    ```json
    {
    "startDate": "2022-01-01",
    "endDate": "2024-01-01"
    }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

12. #### Get Mean Value of Air Quality Temperature column by Date Range
    - **Endpoint:** `/getAQAverageTemeratureByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of temperature column data by date range
    - **Request:**
    ```json
    {
    "startDate": "2022-01-01",
    "endDate": "2024-01-01"
    }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

13. #### Get Mean Value of Air Quality Humidity column by Date Range
    - **Endpoint:** `/getAQAverageHumidityByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of humidity column data by date range
    - **Request:**
    ```json
    {
    "startDate": "2022-01-01",
    "endDate": "2024-01-01"
    }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

14. #### Get Mean Value of Air Quality WindSpeed column by Date Range
    - **Endpoint:** `/getAQAverageWindSpeedByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of windSpeed column data by date range
    - **Request:**
    ```json
    {
    "startDate": "2022-01-01",
    "endDate": "2024-01-01"
    }
    ```
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

15. #### Get Median Value of Air Quality Pm25 column
    - **Endpoint:** `/getMedianAirQualityPm25`
    - **Method:** `GET`
    - **Description:** Get median value of pm25 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

16. #### Get Median Value of Air Quality Pm10 column
    - **Endpoint:** `/getMedianAirQualityPm10`
    - **Method:** `GET`
    - **Description:** Get median value of pm10 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

17. #### Get Median Value of Air Quality Co2 column
    - **Endpoint:** `/getMedianAirQualityCo2`
    - **Method:** `GET`
    - **Description:** Get median value of co2 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

18. #### Get Median Value of Air Quality Ozone column
    - **Endpoint:** `/getMedianAirQualityOzone`
    - **Method:** `GET`
    - **Description:** Get median value of ozone column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

19. #### Get Median Value of Air Quality No2 column
    - **Endpoint:** `/getMedianAirQualityNo2`
    - **Method:** `GET`
    - **Description:** Get median value of no2 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

20. #### Get Median Value of Air Quality Temperature column
    - **Endpoint:** `/getMedianAirQualityTemperature`
    - **Method:** `GET`
    - **Description:** Get median value of temperature column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

21. #### Get Median Value of Air Quality Humidity column
    - **Endpoint:** `/getMedianAirQualityHumidity`
    - **Method:** `GET`
    - **Description:** Get median value of humidity column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

22. #### Get Median Value of Air Quality WindSpeed column
    - **Endpoint:** `/getMedianAirQualityWindSpeed`
    - **Method:** `GET`
    - **Description:** Get median value of windSpeed column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

23. #### Get Mode Value of Air Quality Pm25 column
    - **Endpoint:** `/getModeAirQualityPm25`
    - **Method:** `GET`
    - **Description:** Get average mode value of pm25 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

24. #### Get Mode Value of Air Quality Pm10 column
    - **Endpoint:** `/getModeAirQualityPm10`
    - **Method:** `GET`
    - **Description:** Get average mode value of pm10 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

25. #### Get Mode Value of Air Quality Co2 column
    - **Endpoint:** `/getModeAirQualityCo2`
    - **Method:** `GET`
    - **Description:** Get average mode value of co2 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

26. #### Get Mode Value of Air Quality Ozone column
    - **Endpoint:** `/getModeAirQualityOzone`
    - **Method:** `GET`
    - **Description:** Get average mode value of ozone column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

27. #### Get Mode Value of Air Quality No2 column
    - **Endpoint:** `/getModeAirQualityNo2`
    - **Method:** `GET`
    - **Description:** Get average mode value of no2 column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

28. #### Get Mode Value of Air Quality Temperature column
    - **Endpoint:** `/getModeAirQualityTemperature`
    - **Method:** `GET`
    - **Description:** Get average mode value of temperature column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

29. #### Get Mode Value of Air Quality Humidity column
    - **Endpoint:** `/getModeAirQualityHumidity`
    - **Method:** `GET`
    - **Description:** Get average mode value of humidity column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

30. #### Get Mode Value of Air Quality WindSpeed column
    - **Endpoint:** `/getModeAirQualityWindSpeed`
    - **Method:** `GET`
    - **Description:** Get average mode value of windSpeed column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```
