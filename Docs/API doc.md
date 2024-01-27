# Air Quality and Meteorological Data APIs

## Introduction

Welcome to the documentation for the Air Quality and Meteorological Data APIs. This set of APIs provides functionalities
for managing air quality, meteorological data, land use information, and various statistical analyses.

## Table Of Contents

- [Base URL](#base-url)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
    - [Air Quality API](#air-quality-api)
    - [Meteorological API](#metrological-api)
    - [Land Use API](#land-use-api)
    - [System API](#system-api-not-recommend-for-users)
    - [Client API](#client-api)
- [Error Handling](#error-handling)
- [Contact](#contact-us)

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

### Air Quality API

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
    - **Endpoint:** `/importAirQuality`
    - **Method:** `POST`
    - **Description:** Import bulk air quality data from a CSV file
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

31. #### Get Air Quality Correlation Between Pm25 and Pm10
    - **Endpoint:** `/airQuality/correlation/pm25AndPm10`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and pm10
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

32. #### Get Air Quality Correlation Between Pm25 and Co2
    - **Endpoint:** `/airQuality/correlation/pm25AndCo2`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and co2
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

33. #### Get Air Quality Correlation Between Pm25 and Ozone
    - **Endpoint:** `/airQuality/correlation/pm25AndOzone`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and ozone
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

34. #### Get Air Quality Correlation Between Pm25 and No2
    - **Endpoint:** `/airQuality/correlation/pm25AndNo2`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and no2
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

35. #### Get Air Quality Correlation Between Pm25 and Temperature
    - **Endpoint:** `/airQuality/correlation/pm25AndTemperature`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and temperature
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

36. #### Get Air Quality Correlation Between Pm25 and Humidity
    - **Endpoint:** `/airQuality/correlation/pm25AndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

37. #### Get Air Quality Correlation Between Pm25 and WindSpeed
    - **Endpoint:** `/airQuality/correlation/pm25AndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between pm25 and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

38. #### Get Air Quality Correlation Between Pm10 and Co2
    - **Endpoint:** `/airQuality/correlation/pm10AndCo2`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and co2
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

39. #### Get Air Quality Correlation Between Pm10 and Ozone
    - **Endpoint:** `/airQuality/correlation/pm10AndOzone`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and ozone
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

40. #### Get Air Quality Correlation Between Pm10 and No2
    - **Endpoint:** `/airQuality/correlation/pm10AndNo2`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and no2
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

41. #### Get Air Quality Correlation Between Pm10 and Temperature
    - **Endpoint:** `/airQuality/correlation/pm10AndTemperature`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and temperature
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

42. #### Get Air Quality Correlation Between Pm10 and Humidity
    - **Endpoint:** `/airQuality/correlation/pm10AndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

43. #### Get Air Quality Correlation Between Pm10 and WindSpeed
    - **Endpoint:** `/airQuality/correlation/pm10AndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

44. #### Get Air Quality Correlation Between Co2 and Ozone
    - **Endpoint:** `/airQuality/correlation/co2AndOzone`
    - **Method:** `GET`
    - **Description:** Get correlation between co2 and ozone
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

45. #### Get Air Quality Correlation Between Pm10 and No2
    - **Endpoint:** `/airQuality/correlation/pm10AndNo2`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and no2
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

46. #### Get Air Quality Correlation Between Pm10 and Temperature
    - **Endpoint:** `/airQuality/correlation/pm10AndTemperature`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and temperature
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

47. #### Get Air Quality Correlation Between Pm10 and Humidity
    - **Endpoint:** `/airQuality/correlation/pm10AndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

48. #### Get Air Quality Correlation Between Pm10 and WindSpeed
    - **Endpoint:** `/airQuality/correlation/pm10AndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between pm10 and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

49. #### Get Air Quality Correlation Between Ozone and No2
    - **Endpoint:** `/airQuality/correlation/ozoneAndNo2`
    - **Method:** `GET`
    - **Description:** Get correlation between ozone and no2
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

50. #### Get Air Quality Correlation Between Ozone and Temperature
    - **Endpoint:** `/airQuality/correlation/ozoneAndTemperature`
    - **Method:** `GET`
    - **Description:** Get correlation between ozone and temperature
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

51. #### Get Air Quality Correlation Between Ozone and Humidity
    - **Endpoint:** `/airQuality/correlation/ozoneAndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between ozone and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

52. #### Get Air Quality Correlation Between Ozone and WindSpeed
    - **Endpoint:** `/airQuality/correlation/ozoneAndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between ozone and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

53. #### Get Air Quality Correlation Between No2 and Temperature
    - **Endpoint:** `/airQuality/correlation/no2AndTemperature`
    - **Method:** `GET`
    - **Description:** Get correlation between no2 and temperature
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

54. #### Get Air Quality Correlation Between No2 and Humidity
    - **Endpoint:** `/airQuality/correlation/no2AndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between no2 and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

55. #### Get Air Quality Correlation Between No2 and WindSpeed
    - **Endpoint:** `/airQuality/correlation/no2AndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between no2 and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

56. #### Get Air Quality Correlation Between Temperature and Humidity
    - **Endpoint:** `/airQuality/correlation/temperatureAndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between temperature and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

57. #### Get Air Quality Correlation Between Temperature and WindSpeed
    - **Endpoint:** `/airQuality/correlation/temperatureAndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between temperature and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

58. #### Get Air Quality Correlation Between Humidity and WindSpeed
    - **Endpoint:** `/airQuality/correlation/humidityAndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between humidity and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

59. #### Get All Air Quality Data by Date Range
    - **Endpoint:** `/getAirQualityByDate`
    - **Method:** `GET`
    - **Description:** Get all Air quality data by date range
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
    "data": [
        {
        "id": "123",
        "timestamp": "2023-01-01T12:00:00Z",
        "location": "123 Main St",
        "pm25": "10.5676436",
        "pm10": "10.5676436",
        "co2": "10.5676436",
        "ozone": "10.5676436",
        "no2": "10.5676436",
        "temperature": "24.5676436",
        "humidity": "50.5676436",
        "windSpeed": "10.5676436"
        }
    ]
    }
    ```

60. #### Get pm25 prediction
    - **Endpoint:** `/airQuality/predict/pm25`
    - **Method:** `POST`
    - **Description:** Get pm25 value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

61. #### Get pm10 prediction
    - **Endpoint:** `/airQuality/predict/pm10`
    - **Method:** `POST`
    - **Description:** Get pm10 value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

62. #### Get co2 prediction
    - **Endpoint:** `/airQuality/predict/co2`
    - **Method:** `POST`
    - **Description:** Get co2 value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

63. #### Get ozone prediction
    - **Endpoint:** `/airQuality/predict/ozone`
    - **Method:** `POST`
    - **Description:** Get ozone value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

64. #### Get no2 prediction
    - **Endpoint:** `/airQuality/predict/no2`
    - **Method:** `POST`
    - **Description:** Get no2 value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

65. #### Get temperature prediction
    - **Endpoint:** `/airQuality/predict/airTemperature`
    - **Method:** `POST`
    - **Description:** Get temperature value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

66. #### Get humidity prediction
    - **Endpoint:** `/airQuality/predict/airHumidity`
    - **Method:** `POST`
    - **Description:** Get humidity value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

67. #### Get windSpeed prediction
    - **Endpoint:** `/airQuality/predict/airWindSpeed`
    - **Method:** `POST`
    - **Description:** Get windSpeed value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

### Metrological API

1. #### Save Metrological Data
    - **Endpoint:** `/saveMetrological`
    - **Method:** `POST`
    - **Description:** Save metrological data.
    - **Request:**
    ```json
    {
    "timestamp": "2023-01-01T12:00:00Z",
    "temperature": 25.0,
    "humidity": 50.0,
    "windSpeed": 10.0,
    "precipitation": 0.0
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Data saved successfully"
    }
    ```

2. #### Get All Metrological Data
    - **Endpoint:** `/getAllMetrological`
    - **Method:** `GET`
    - **Description:** Retrieve all metrological data.
    - **Response:**
   ```json
    [
      {
      "id": "123",
      "timestamp": "2023-01-01T12:00:00Z",
      "temperature": 25.0,
      "humidity": 50.0,
      "windSpeed": 10.0,
      "precipitation": 0.0
      }
    ]
    ```

3. #### Get Metrological Data By ID
    - **Endpoint:** `/getMetrologicalById/{id}`
    - **Method:** `GET`
    - **Description:** Retrieve one metrological data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/getMetrologicalById/id=123
    ```
    - **Response:**
    ```json
    [
      {
      "id": "123",
      "timestamp": "2023-01-01T12:00:00Z",
      "temperature": 25.0,
      "humidity": 50.0,
      "windSpeed": 10.0,
      "precipitation": 0.0
      }
    ]
    ```

4. #### Delete Metrological Data By ID
    - **Endpoint:** `/deleteMetrological/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete one metrological data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/deleteMetrological/id=123
    ```
    - **Response:**
    ```json
    {
    "message": "123 Data Deleted"
    }
    ```

5. #### Update Metrological Data By ID
    - **Endpoint:** `/updateMetrological/{id}`
    - **Method:** `PUT`
    - **Description:** Update one metrological data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/updateMetrological/id=123
    ```
    - **Response:**
    ```json
    {
    "message": "123 Data Updated"
    }
    ```

6. #### Bulk import Metrological Data
    - **Endpoint:** `/importMetrological`
    - **Method:** `POST`
    - **Description:** Import bulk metrological data from CSV file
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

7. #### Get Mean Value of Metrological Temperature column by Date Range
    - **Endpoint:** `/getAverageTemperatureByDateRange`
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

8. #### Get Mean Value of Metrological Humidity column by Date Range
    - **Endpoint:** `/getAverageHumidityByDateRange`
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
    "data": "50.5676436"
    }
    ```

9. #### Get Mean Value of Metrological WindSpeed column by Date Range
    - **Endpoint:** `/getAverageWindSpeedByDateRange`
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
    "data": "10.5676436"
    }
    ```

10. #### Get Mean Value of Metrological Precipitation column by Date Range
    - **Endpoint:** `/getAveragePrecipitationByDateRange`
    - **Method:** `GET`
    - **Description:** Get mean value of precipitation column data by date range
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
    "data": "0.5676436"
    }
    ```

11. #### Get Median Value of Metrological Temperature column
    - **Endpoint:** `/getMedianMetrologicalTemperature`
    - **Method:** `GET`
    - **Description:** Get median value of temperature column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

12. #### Get Median Value of Metrological Humidity column
    - **Endpoint:** `/getMedianMetrologicalHumidity`
    - **Method:** `GET`
    - **Description:** Get median value of humidity column data
    - **Response:**
    ```json
    {
    "data": "50.5676436"
    }
    ```

13. #### Get Median Value of Metrological WindSpeed column
    - **Endpoint:** `/getMedianMetrologicalWindSpeed`
    - **Method:** `GET`
    - **Description:** Get median value of windSpeed column data
    - **Response:**
    ```json
    {
    "data": "10.5676436"
    }
    ```

14. #### Get Median Value of Metrological Precipitation column
    - **Endpoint:** `/getMedianMetrologicalPrecipitation`
    - **Method:** `GET`
    - **Description:** Get median value of precipitation column data
    - **Response:**
    ```json
    {
    "data": "0.5676436"
    }
    ```

15. #### Get Mode Value of Metrological Temperature column
    - **Endpoint:** `/getModeMetrologicalTemperature`
    - **Method:** `GET`
    - **Description:** Get average mode value of temperature column data
    - **Response:**
    ```json
    {
    "data": "24.5676436"
    }
    ```

16. #### Get Mode Value of Metrological Humidity column
    - **Endpoint:** `/getModeMetrologicalHumidity`
    - **Method:** `GET`
    - **Description:** Get average mode value of humidity column data
    - **Response:**
    ```json
    {
    "data": "50.5676436"
    }
    ```

17. #### Get Mode Value of Metrological WindSpeed column
    - **Endpoint:** `/getModeMetrologicalWindSpeed`
    - **Method:** `GET`
    - **Description:** Get average mode value of windSpeed column data
    - **Response:**
    ```json
    {
    "data": "10.5676436"
    }
    ```

18. #### Get Mode Value of Metrological Precipitation column
    - **Endpoint:** `/getModeMetrologicalPrecipitation`
    - **Method:** `GET`
    - **Description:** Get average mode value of precipitation column data
    - **Response:**
    ```json
    {
    "data": "0.5676436"
    }
    ```

19. #### Get Metrological Correlation Between Temperature and Humidity
    - **Endpoint:** `/metrological/correlation/temperatureAndHumidity`
    - **Method:** `GET`
    - **Description:** Get correlation between temperature and humidity
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

20. #### Get Metrological Correlation Between Temperature and WindSpeed
    - **Endpoint:** `/metrological/correlation/temperatureAndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between temperature and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

21. #### Get Metrological Correlation Between Temperature and Precipitation
    - **Endpoint:** `/metrological/correlation/temperatureAndPrecipitation`
    - **Method:** `GET`
    - **Description:** Get correlation between temperature and precipitation
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

22. #### Get Metrological Correlation Between Humidity and WindSpeed
    - **Endpoint:** `/metrological/correlation/humidityAndWindSpeed`
    - **Method:** `GET`
    - **Description:** Get correlation between humidity and windSpeed
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

23. #### Get Metrological Correlation Between Humidity and Precipitation
    - **Endpoint:** `/metrological/correlation/humidityAndPrecipitation`
    - **Method:** `GET`
    - **Description:** Get correlation between humidity and precipitation
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

24. #### Get Metrological Correlation Between WindSpeed and Precipitation
    - **Endpoint:** `/metrological/correlation/windSpeedAndPrecipitation`
    - **Method:** `GET`
    - **Description:** Get correlation between windSpeed and precipitation
    - **Response:**
    ```json
    {
    "data": "0.84358380"
    }
    ```

25. #### Get All Metrological Data by Date Range
    - **Endpoint:** `/getMetrologicalByDate`
    - **Method:** `GET`
    - **Description:** Get all Metrological data by date range
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
    "data": [
        {
        "id": "123",
        "timestamp": "2023-01-01T12:00:00Z",
        "location": "123 Main St",
        "temperature": "24.5676436",
        "humidity": "50.5676436",
        "windSpeed": "10.5676436",
        "precipitation": "0.5676436"
        }
    ]
    }
    ```

26. #### Get Temperature Prediction
    - **Endpoint:** `/airQuality/predict/temperature`
    - **Method:** `POST`
    - **Description:** Get temperature value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

27. #### Get Humidity Prediction
    - **Endpoint:** `/airQuality/predict/humidity`
    - **Method:** `POST`
    - **Description:** Get humidity value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

28. #### Get WindSpeed Prediction
    - **Endpoint:** `/airQuality/predict/windSpeed`
    - **Method:** `POST`
    - **Description:** Get windSpeed value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

29. #### Get Precipitation Prediction
    - **Endpoint:** `/airQuality/predict/precipitation`
    - **Method:** `POST`
    - **Description:** Get precipitation value prediction according to other factor values.
    - **Request:**
    ```json
    [1.0, 2.0, 3.0]
    ```
    - **Response:**
    ```md
    Processed result: 4.602289711583845
    ```

### Land Use API

1. #### Save Land Use Data
    - **Endpoint:** `/saveLandUse`
    - **Method:** `POST`
    - **Description:** Save land use data.
    - **Request:**
    ```json
    {
    "timestamp": "2023-01-01T12:00:00Z",
    "location": "123 Main St",
    "landType": "Industrial"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Data saved successfully"
    }
    ```

2. #### Get All Land Use Data
    - **Endpoint:** `/getAllLandUse`
    - **Method:** `GET`
    - **Description:** Retrieve all land use data.
    - **Response:**
   ```json
    [
      {
      "id": "123",
      "timestamp": "2023-01-01T12:00:00Z",
      "location": "123 Main St",
      "landType": "Industrial"
      }
    ]
    ```

3. #### Get Land Use Data By ID
    - **Endpoint:** `/getLandUseById/{id}`
    - **Method:** `GET`
    - **Description:** Retrieve one land use data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/getLandUseById/id=123
    ```
    - **Response:**
    ```json
    [
      {
      "id": "123",
      "timestamp": "2023-01-01T12:00:00Z",
      "location": "123 Main St",
      "landType": "Industrial"
      }
    ]
    ```

4. #### Delete Land use Data By ID
    - **Endpoint:** `/deleteLandUse/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete one land use data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/deleteLandUse/id=123
    ```
    - **Response:**
    ```json
    {
    "message": "123 Data Deleted"
    }
    ```

5. #### Update Land Use Data By ID
    - **Endpoint:** `/updateLandUse/{id}`
    - **Method:** `PUT`
    - **Description:** Update one land use data row by id
    - **Request:**
    ```http request
   https://your-api-base-url.com/api/v1/updateLandUse/id=123
    ```
    - **Response:**
    ```json
    {
    "message": "123 Data Updated"
    }
    ```

6. #### Bulk import Land Use Data
    - **Endpoint:** `/importLandUse`
    - **Method:** `POST`
    - **Description:** Import bulk land use data from CSV file
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

### System API (Not Recommend for users)

1. #### Send pm 25 predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/pm25`
    - **Method:** `POST`
    - **Description:** Send pm 25 predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

2. #### Send pm 10 predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/pm10`
    - **Method:** `POST`
    - **Description:** Send pm 10 predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

3. #### Send co2 predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/co2`
    - **Method:** `POST`
    - **Description:** Send co2 predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

4. #### Send ozone predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/ozone`
    - **Method:** `POST`
    - **Description:** Send ozone predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

5. #### Send no2 predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/no2`
    - **Method:** `POST`
    - **Description:** Send no2 predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

6. #### Send airTemperature predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/airTemperature`
    - **Method:** `POST`
    - **Description:** Send airTemperature predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

7. #### Send airHumidity predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/airHumidity`
    - **Method:** `POST`
    - **Description:** Send airHumidity predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

8. #### Send airWindSpeed predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/airWindSpeed`
    - **Method:** `POST`
    - **Description:** Send airWindSpeed predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

9. #### Send temperature predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/temperature`
    - **Method:** `POST`
    - **Description:** Send temperature predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

10. #### Send humidity predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/humidity`
    - **Method:** `POST`
    - **Description:** Send humidity predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

11. #### Send windSpeed predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/windSpeed`
    - **Method:** `POST`
    - **Description:** Send windSpeed predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

12. #### Send precipitation predicted value to the server
    - **Endpoint:** `/airQuality/predict/res/precipitation`
    - **Method:** `POST`
    - **Description:** Send precipitation predicted value from python file to the server
    - **Request:**
    ```json
    {
    "DoubleValue": "4.602289711583845"
    }
    ```
    - **Response:**
    ```json
    {
    "Processed result": "4.602289711583845"
    }
    ```

### Client API

#### Admin

1. #### Save admin
    - **Endpoint:** `/admin`
    - **Method:** `POST`
    - **Description:** Save admin
    - **Request:**
    ```json
    {
    "name": "admin",
    "email": "admin@gmail.com",
    "phone": "1234567890",
    "password": "admin"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Admin saved successfully"
    }
    ```

2. #### Update admin credentials
    - **Endpoint:** `/admin/password/{adminId}`
    - **Method:** `PUT`
    - **Description:** Update admin password
    - **Request:**
    ```json
    {
    "name": "admin",
    "email": "admin@gmail.com",
    "phone": "1234567890",
    "password": "admin"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Admin updated successfully"
    }
    ```

3. #### Delete admin
    - **Endpoint:** `/admin/delete/email/{email}`
    - **Method:** `DELETE`
    - **Description:** Delete admin by email address
    - **Request:**
    ```json
    {
    "email": "admin@gmail.com"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Admin deleted successfully"
    }
    ```

4. #### Get admin
    - **Endpoint:** `/admin/email/{email}`
    - **Method:** `GET`
    - **Description:** Get admin by email address
    - **Request:**
    ```json
    {
    "email": "admin@gmail.com"
    }
    ```
    - **Response:**
    ```json
    {
    "email": "admin@gmail.com",
    "name": "admin",
    "phone": "1234567890",
    "password": "admin"
    }
    ```

5. #### Get all admins
    - **Endpoint:** `/admin/all`
    - **Method:** `GET`
    - **Description:** Get all admins
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "admins": [
        {
        "email": "admin@gmail.com",
        "name": "admin",
        "phone": "1234567890",
        "password": "admin"
        }
    ]
    }

#### User

1. #### Request user
    - **Endpoint:** `/user/request`
    - **Method:** `POST`
    - **Description:** Request user to the system for get credentials
    - **Request:**
    ```json
    {
    "name": "user",
    "email": "user@gmail.com",
    "phone": "1234567890",
    "country": "India",
    "remarks": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "active": false
    }
    ```
    - **Response:**
    ```json
    {
    "message": "User Requested successfully"
    }
    ```

2. #### Get user
    - **Endpoint:** `/user/email/{email}`
    - **Method:** `GET`
    - **Description:** Get user by email address
    - **Request:**
    ```json
    {
    "email": "user@gmail.com"
    }
    ```
    - **Response:**
    ```json
    {
    "email": "user@gmail.com",
    "name": "user",
    "phone": "1234567890",
    "country": "India",
    "remarks": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "active": false
    }
    ```

3. #### Get all users
    - **Endpoint:** `/user/all`
    - **Method:** `GET`
    - **Description:** Get all users
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "users": [
        {
        "email": "user@gmail.com",
        "name": "user",
        "phone": "1234567890",
        "country": "India",
        "remarks": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "active": false
        }
      ]
    }
   ```

4. #### Approve User
    - **Endpoint:** `/user/avvrove/{id}`
    - **Method:** `PUT`
    - **Description:** Approve user request
    - **Request:**
    ```json
    {
    "name": "user",
    "email": "user@gmail.com",
    "phone": "1234567890",
    "country": "India",
    "remarks": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "active": true
    }
    ```
    - **Response:**
    ```json
    {
    "message": "User approved successfully"
    }
    ```

5. #### Delete user
    - **Endpoint:** `/user/delete/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete user by id
    - **Request:**
    ```json
    {
    "email": "2csk623f2442b"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "User deleted successfully"
    }
    ```

#### Credentials

1. #### Get credentials by email address
    - **Endpoint:** `/login/email/{email}`
    - **Method:** `GET`
    - **Description:** Get credentials by email address
    - **Request:**
    ```json
    {
    "email": "user@gmail.com"
    }
    ```
    - **Response:**
    ```json
    {
    "email": "user@gmail.com",
    "password": "dskjd53b24"
    }
    ```

2. Save credentials
    - **Endpoint:** `/login/save`
    - **Method:** `POST`
    - **Description:** Save credentials
    - **Request:**
    ```json
    {
    "email": "user@gmail.com",
    "password": "dskjd53b24"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Credentials saved successfully"
    }
    ```

3. #### Update credentials
    - **Endpoint:** `/login/update/{email}`
    - **Method:** `PUT`
    - **Description:** Update credentials
    - **Request:**
    ```json
    {
    "email": "user@gmail.com",
    "password": "dskjd53b24"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Credentials updated successfully"
    }
    ```

4. #### Delete credentials
    - **Endpoint:** `/login/delete/{email}`
    - **Method:** `DELETE`
    - **Description:** Delete credentials by email address
    - **Request:**
    ```json
    {
    "email": "user@gmail.com"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Credentials deleted successfully"
    }
    ```

5. #### Get all credentials
    - **Endpoint:** `/login/get`
    - **Method:** `GET`
    - **Description:** Get all credentials
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "credentials": [
        {
        "email": "user@gmail.com",
        "password": "dskjd53b24"
        }
      ]
    }
    ```

#### Blog

1. #### Create blog
    - **Endpoint:** `/blog/create`
    - **Method:** `POST`
    - **Description:** Create a new blog
    - **Request:**
    ```json
    {
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "image": "https://example.com/image.jpg",
    "tags": "Technology",
    "created_at": "2024.01.27",
    "updated_at": "2024.01.27",
    "author": "admin"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Blog created successfully"
    }
    ```

2. #### Get all blogs
    - **Endpoint:** `/blog/all`
    - **Method:** `GET`
    - **Description:** Get all blogs
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "blogs": [
        {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "image": "https://example.com/image.jpg",
        "tags": "Technology",
        "created_at": "2024.01.27",
        "updated_at": "2024.01.27",
        "author": "admin"
        }
      ]
    }
    ```

3. #### Delete blog
    - **Endpoint:** `/blog/delete/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete blog by id
    - **Request:**
    ```json
    {
    "id": "1"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Blog deleted successfully"
    }
    ```

4. #### Update blog
    - **Endpoint:** `/blog/update/{id}`
    - **Method:** `PUT`
    - **Description:** Update blog by id
    - **Request:**
    ```json
    {
    "id": "1",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "image": "https://example.com/image.jpg",
    "tags": "Technology",
    "created_at": "2024.01.27",
    "updated_at": "2024.01.27",
    "author": "admin"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Blog updated successfully"
    }
    ```

#### Comment

1. #### Create comment
    - **Endpoint:** `/comment/save`
    - **Method:** `POST`
    - **Description:** Create a new comment
    - **Request:**
    ```json
    {
    "blog_id": "1",
    "name": "user",
    "email": "user@gmail.com",
    "profile": "https://example.com/image.jpg",
    "date": "2024.01.27",
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "reply": "",
    "like": 0
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Comment created successfully"
    }
    ```

2. #### Get all comments
    - **Endpoint:** `/comment/all`
    - **Method:** `GET`
    - **Description:** Get all comments
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "comments": [
        {
        "blog_id": "1",
        "name": "user",
        "email": "user@gmail.com",
        "profile": "https://example.com/image.jpg",
        "date": "2024.01.27",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "reply": "",
        "like": 0
        }
      ]
    }
    ```

3. #### Update Comment
    - **Endpoint:** `/comment/update/{id}`
    - **Method:** `PUT`
    - **Description:** Update comment by id
    - **Request:**
    ```json
    {
    "id": "1",
    "blog_id": "1",
    "name": "user",
    "email": "user@gmail.com",
    "profile": "https://example.com/image.jpg",
    "date": "2024.01.27",
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "reply": "lorem",
    "like": 0
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Comment updated successfully"
    }
    ```

4. #### Like Comment
    - **Endpoint:** `/comment/like/{id}`
    - **Method:** `PUT`
    - **Description:** Like comment by id
    - **Request:**
    ```json
    {
    "id": "1",
    "blog_id": "1",
    "name": "user",
    "email": "user@gmail.com",
    "profile": "https://example.com/image.jpg",
    "date": "2024.01.27",
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "reply": "",
    "like": 1
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Comment liked successfully"
    }
    ```

#### FAQ

1. #### Create FAQ
    - **Endpoint:** `/faq`
    - **Method:** `POST`
    - **Description:** Create a new FAQ
    - **Request:**
    ```json
    {
    "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl."
    }
    ```
    - **Response:**
    ```json
    {
    "message": "FAQ created successfully"
    }
    ```

2. #### Get all FAQs
    - **Endpoint:** `/faq/all`
    - **Method:** `GET`
    - **Description:** Get all FAQs
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "faqs": [
        {
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl."
        }
      ]
    }
    ```

3. #### Update FAQ
    - **Endpoint:** `/faq/update/{id}`
    - **Method:** `PUT`
    - **Description:** Update FAQ by id
    - **Request:**
    ```json
    {
    "id": "1",
    "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl."
    }
    ```
    - **Response:**
    ```json
    {
    "message": "FAQ updated successfully"
    }
    ```

4. #### Delete FAQ
    - **Endpoint:** `/faq/delete/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete FAQ by id
    - **Request:**
    ```json
    {
    "id": "1"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "FAQ deleted successfully"
    }
    ```

#### Feedback

1. #### Create Feedback
    - **Endpoint:** `/feedback/save`
    - **Method:** `POST`
    - **Description:** Create a new feedback
    - **Request:**
    ```json
    {
    "name":"user",
    "family_name":"user 1",
    "email":"user@gmail.com",
    "picture":"https://example.com/image.jpg",
    "feedback":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
    "date":"2022.01.27"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Feedback created successfully"
    }
    ```

2. #### Get all feedbacks
    - **Endpoint:** `/feedback/all`
    - **Method:** `GET`
    - **Description:** Get all feedbacks
    - **Request:**
    ```json
    {}
    ```
    - **Response:**
    ```json
    {
    "feedbacks": [
        {
        "name":"user",
        "family_name":"user 1",
        "email":"user@gmail.com",
        "picture":"https://example.com/image.jpg",
        "feedback":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl vel nisl.",
        "date":"2022.01.27"
        }
      ]
    }
    ```
   
3. Delete Feedback
    - **Endpoint:** `/feedback/delete/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete feedback by id
    - **Request:**
    ```json
    {
    "id": "1"
    }
    ```
    - **Response:**
    ```json
    {
    "message": "Feedback deleted successfully"
    }
    ```

## Error Handling

- ### HTTP Status Codes:
    - **200 OK:** Successful request.
    - **400 Bad Request:** Malformed request.
    - **401 Unauthorized:** Authentication failure.
    - **403 Forbidden:** Insufficient permissions.
    - **404 Not Found:** Resource not found.
    - **500 Internal Server Error:** Unexpected server error.

- ### Error Codes:
    - **E001:** Invalid request.
    - **E002:** Authentication failure.
    - **E003:** Insufficient permissions.
    - **E004:** Resource not found.
    - **E005:** Unexpected server error.

## Contact Us

If you have any questions or concerns, please contact us
at [kavindu.kokila.info@gmail.com](mailto:kavindu.kokila.info@gmail.com).
