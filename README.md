# Urban Air Quality Monitoring and Prediction System

## Data Dictionaries

### 1. Air Quality Data

- **timestamp:** Date and time of the data point.
- **location:** Geographic location where the data was collected.
- **pm25:** Particulate Matter (PM) with a diameter of 2.5 micrometers or smaller.
- **pm10:** Particulate Matter (PM) with a diameter of 10 micrometers or smaller.
- **co2:** Carbon Dioxide levels.
- **ozone:** Ozone levels.
- **no2:** Nitrogen Dioxide levels.
- **temperature:** Ambient temperature at the time of measurement.
- **humidity:** Relative humidity at the time of measurement.
- **wind_speed:** Wind speed at the time of measurement.

### 2. Meteorological Data

- **timestamp:** Date and time of the data point.
- **location:** Geographic location where the data was collected.
- **temperature:** Ambient temperature.
- **humidity:** Relative humidity.
- **wind_speed:** Wind speed.
- **precipitation:** Amount of precipitation (rainfall) during the specified period.

### 3. Land Use Data

- **location:** Geographic location for which land use information is provided.
- **land_type:** Type of land use (e.g., Residential, Commercial, Industrial, Park).

## Routes
### Basic CRUD
1. Air Quality
   - /api/v1/saveAirQuality
   - /api/v1/getAllAirQuality
   - /api/v1/getAirQualityById/{id}
   - /api/v1/deleteAirQuality/{id}
   - /api/v1/updateAirQuality/{id}
2. Metrological
   - /api/v1/saveMetrological
   - /api/v1/getAllMetrological
   - /api/v1/getMetrologicalById/{id}
   - /api/v1/deleteMetrological/{id}
   - /api/v1/updateMetrological/{id}
3. Land Use
   - /api/v1/saveLandUse
   - /api/v1/getAllLandUse
   - /api/v1/getLandUseById/{id}
   - /api/v1/deleteLandUse/{id}
   - /api/v1/updateLandUse/{id}

### Bulk import data
1. Air Quality
   - /api/v1/importAirQuality
2. Metrological
   - /api/v1/importMetrological
3. Land Use
   - /api/v1/importLandUse

### Get all data by date range
1. Air Quality
   - /api/v1/getAirQualityByDate
2. Metrological
   - /api/v1/getMetrologicalByDate

### Get mean(average) by date range
1. Air Quality
   - /api/v1/getAQAveragePm25ByDateRange
   - /api/v1/getAQAveragePm10ByDateRange
   - /api/v1/getAQAverageCo2ByDateRange
   - /api/v1/getAQAverageOzoneByDateRange
   - /api/v1/getAQAverageNo2ByDateRange
   - /api/v1/getAQAverageTemperatureByDateRange
   - /api/v1/getAQAverageHumidityByDateRange
   - /api/v1/getAQAverageWindSpeedByDateRange
2. Metrological
   - /api/v1/getAverageTemperatureByDateRange
   - /api/v1/getAverageHumidityByDateRange
   - /api/v1/getAverageWindSpeedByDateRange
   - /api/v1/getAveragePrecipitationByDateRange

### Get median
1. Air Quality
   - /api/v1/getMedianAirQualityPm25
   - /api/v1/getMedianAirQualityPm10
   - /api/v1/getMedianAirQualityCo2
   - /api/v1/getMedianAirQualityOzone
   - /api/v1/getMedianAirQualityNo2
   - /api/v1/getMedianAirQualityTemperature
   - /api/v1/getMedianAirQualityHumidity
   - /api/v1/getMedianAirQualityWindSpeed
2. Metrological
   - /api/v1/getMedianMetrologicalTemperature
   - /api/v1/getMedianMetrologicalHumidity
   - /api/v1/getMedianMetrologicalWindSpeed
   - /api/v1/getMedianMetrologicalPrecipitation

### Get mode(Average mode)
1. Air Quality
   - /api/v1/getModeAirQualityPm25
   - /api/v1/getModeAirQualityPm10
   - /api/v1/getModeAirQualityCo2
   - /api/v1/getModeAirQualityOzone
   - /api/v1/getModeAirQualityNo2
   - /api/v1/getModeAirQualityTemperature
   - /api/v1/getModeAirQualityHumidity
   - /api/v1/getModeAirQualityWindSpeed
2. Metrological
   - /api/v1/getModeMetrologicalTemperature
   - /api/v1/getModeMetrologicalHumidity
   - /api/v1/getModeMetrologicalWindSpeed
   - /api/v1/getModeMetrologicalPrecipitation

### Get Correlations
1. Air Quality
   - /api/v1/airQuality/correlation/pm25AndPm10
   - /api/v1/airQuality/correlation/pm25AndCo2
   - /api/v1/airQuality/correlation/pm25AndOzone
   - /api/v1/airQuality/correlation/pm25AndNo2
   - /api/v1/airQuality/correlation/pm25AndTemperature
   - /api/v1/airQuality/correlation/pm25AndHumidity
   - /api/v1/airQuality/correlation/pm25AndWindSpeed
   - /api/v1/airQuality/correlation/pm10AndCo2
   - /api/v1/airQuality/correlation/pm10AndOzone
   - /api/v1/airQuality/correlation/pm10AndNo2
   - /api/v1/airQuality/correlation/pm10AndTemperature
   - /api/v1/airQuality/correlation/pm10AndHumidity
   - /api/v1/airQuality/correlation/pm10AndWindSpeed
   - /api/v1/airQuality/correlation/co2AndOzone
   - /api/v1/airQuality/correlation/co2AndNo2
   - /api/v1/airQuality/correlation/co2AndTemperature
   - /api/v1/airQuality/correlation/co2AndHumidity
   - /api/v1/airQuality/correlation/co2AndWindSpeed
   - /api/v1/airQuality/correlation/ozoneAndNo2
   - /api/v1/airQuality/correlation/ozoneAndTemperature
   - /api/v1/airQuality/correlation/ozoneAndHumidity
   - /api/v1/airQuality/correlation/ozoneAndWindSpeed
   - /api/v1/airQuality/correlation/no2AndTemperature
   - /api/v1/airQuality/correlation/no2AndHumidity
   - /api/v1/airQuality/correlation/no2AndWindSpeed
   - /api/v1/airQuality/correlation/temperatureAndHumidity
   - /api/v1/airQuality/correlation/temperatureAndWindSpeed
   - /api/v1/airQuality/correlation/humidityAndWindSpeed
2. Metrological
   - /api/v1/metrological/correlation/temperatureAndHumidity
   - /api/v1/metrological/correlation/temperatureAndWindSpeed
   - /api/v1/metrological/correlation/temperatureAndPrecipitation
   - /api/v1/metrological/correlation/humidityAndWindSpeed
   - /api/v1/metrological/correlation/humidityAndPrecipitation
   - /api/v1/metrological/correlation/windSpeedAndPrecipitation

### Make Prediction
1. Air Quality
   - /api/v1/airQuality/predict/pm25
   - /api/v1/airQuality/predict/pm10
   - /api/v1/airQuality/predict/co2
   - /api/v1/airQuality/predict/ozone
   - /api/v1/airQuality/predict/no2
   - /api/v1/airQuality/predict/airTemperature
   - /api/v1/airQuality/predict/airHumidity
   - /api/v1/airQuality/predict/airWindSpeed

2. Metrological
   - /api/v1/metrological/predict/temperature
   - /api/v1/metrological/predict/humidity
   - /api/v1/metrological/predict/windSpeed
   - /api/v1/metrological/predict/precipitation

### Make Prediction (System Use : Not recommended for users)
1. Air Quality
   - /api/v1/airQuality/predict/res/pm25
   - /api/v1/airQuality/predict/res/pm10
   - /api/v1/airQuality/predict/res/co2
   - /api/v1/airQuality/predict/res/ozone
   - /api/v1/airQuality/predict/res/no2
   - /api/v1/airQuality/predict/res/airTemperature
   - /api/v1/airQuality/predict/res/airHumidity
   - /api/v1/airQuality/predict/res/airWindSpeed

2. Metrological
   - /api/v1/metrological/predict/res/temperature
   - /api/v1/metrological/predict/res/humidity
   - /api/v1/metrological/predict/res/windSpeed
   - /api/v1/metrological/predict/res/precipitation
