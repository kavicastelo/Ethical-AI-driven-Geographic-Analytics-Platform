# Urban Air Quality Monitoring and Prediction System

![commit activity](https://img.shields.io/github/commit-activity/y/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform/main)
![GitHub language count](https://img.shields.io/github/languages/count/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform/ci.yml?branch=main&label=CI%2FCD%20workflow)
![Netlify](https://img.shields.io/netlify/84cd0792-91fd-49b8-9fe9-bc52d7e78a3d)
![Website](https://img.shields.io/website?url=https%3A%2F%2Furban-air-quality-monitor.netlify.app)
![GitHub License](https://img.shields.io/github/license/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform)
![GitHub Release](https://img.shields.io/github/v/release/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform)


## System Config
*Note:* Default configurations are set up for running the project on server.

## Clone the repository:
```markdown
https://github.com/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform.git
```

## Pre requests
- Install Angular CLI 15.2.x
- Node version 16.19.0
- Java JDK 17
- Python 3.10
- Different runnable environment supportive IDEA (intellij ultimate is recommended)

## Frontend
- Move to the frontend branch
  ```markdown
  git switch frontend
  ```
- Move to the `client` directory
  ```markdown
  cd client
  ```
- Navigates to `src\environment\environment.development.ts`
- Commented out the production base url and uncomment the local (`port 3269 is recommended and default`)
- Move to the client directory in terminal and run `npm install --force` command

> [!IMPORTANT]
> Use --force for install deprecated packages. don't use --legacy-peers

- Run `ng serve` command to start the development server
- Project starts to run on `localhost:4200/` port

## Backend
Move to the `backend` branch
  ```markdown
  git switch backend
  ```

You have to change few files to run the project locally.
1. AIModel.java (*./src/main/java/com/api/air_quality/model/ai_models/AIModel.java*)
   - Comment out line **143** and **145**.
   - Uncomment line **142** and **144**.
2. All Python models except AIModelPython.py (*./src/main/java/com/api/air_quality/python/\*.py*)
   - Replace all file paths in `class *ModelPython:` classes with actual file paths.
   - Ex: `"/app/AI_Models/airHumidity_model.pkl"` to `"./AI_Models/airHumidity_model.pkl"`
3. CorsConfig.java (*./src/main/java/com/api/air_quality/CorsConfig.java*)
   - Uncomment line **17** and **29**.
   - Comment out line **18** and **30**.

If you need to use your own localhost database,
- Create `.env` file in the root directory of the project.
- Add `SPRINGBOOT_URL_PYTHON` environment variable in `.env` file. (Optional)
- Add `PYTHON_EXE_PATH` environment variable in `.env` file. (Optional)
- Add `DATABASE` environment variable in `.env` file. (Default `Urban_Air`)
- Add `DATABASE_PORT` environment variable in `.env` file.
- Add `DATABASE_URI` environment variable in `.env` file.
- Add `SERVER_PORT` environment variable in `.env` file. (default 3269)

Add Environment for Python Models.
- <python.exe path to computer drive> -m venv venv
- source venv\bin\activate (Linux or Mac)
- .\venv\Scripts\activate (Windows)
- pip install -r requirements.txt (recommended)
- venv\Scripts\python.exe -m pip install -r requirements.txt (only if **not working** `pip install -r requirements.txt`)
- deactivate

> [!NOTE]
> If you're facing any idea error, delete the `.idea` directory and rebuild the project


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

## Open APIs
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
   - /api/v1/airQuality/correlation/Pm25AndPm10
   - /api/v1/airQuality/correlation/Pm25AndCo2
   - /api/v1/airQuality/correlation/Pm25AndOzone
   - /api/v1/airQuality/correlation/Pm25AndNo2
   - /api/v1/airQuality/correlation/Pm25AndTemperature
   - /api/v1/airQuality/correlation/Pm25AndHumidity
   - /api/v1/airQuality/correlation/Pm25AndWindSpeed
   - /api/v1/airQuality/correlation/Pm10AndCo2
   - /api/v1/airQuality/correlation/Pm10AndOzone
   - /api/v1/airQuality/correlation/Pm10AndNo2
   - /api/v1/airQuality/correlation/Pm10AndTemperature
   - /api/v1/airQuality/correlation/Pm10AndHumidity
   - /api/v1/airQuality/correlation/Pm10AndWindSpeed
   - /api/v1/airQuality/correlation/Co2AndOzone
   - /api/v1/airQuality/correlation/Co2AndNo2
   - /api/v1/airQuality/correlation/Co2AndTemperature
   - /api/v1/airQuality/correlation/Co2AndHumidity
   - /api/v1/airQuality/correlation/Co2AndWindSpeed
   - /api/v1/airQuality/correlation/OzoneAndNo2
   - /api/v1/airQuality/correlation/OzoneAndTemperature
   - /api/v1/airQuality/correlation/OzoneAndHumidity
   - /api/v1/airQuality/correlation/OzoneAndWindSpeed
   - /api/v1/airQuality/correlation/No2AndTemperature
   - /api/v1/airQuality/correlation/No2AndHumidity
   - /api/v1/airQuality/correlation/No2AndWindSpeed
   - /api/v1/airQuality/correlation/TemperatureAndHumidity
   - /api/v1/airQuality/correlation/TemperatureAndWindSpeed
   - /api/v1/airQuality/correlation/HumidityAndWindSpeed
   - /api/v1/airQuality/correlation/Pm10AndPm25
   - /api/v1/airQuality/correlation/Co2AndPm25
   - /api/v1/airQuality/correlation/OzoneAndPm25
   - /api/v1/airQuality/correlation/No2AndPm25
   - /api/v1/airQuality/correlation/TemperatureAndPm25
   - /api/v1/airQuality/correlation/HumidityAndPm25
   - /api/v1/airQuality/correlation/WindSpeedAndPm25
   - /api/v1/airQuality/correlation/Co2AndPm10
   - /api/v1/airQuality/correlation/OzoneAndPm10
   - /api/v1/airQuality/correlation/No2AndPm10
   - /api/v1/airQuality/correlation/TemperatureAndPm10
   - /api/v1/airQuality/correlation/HumidityAndPm10
   - /api/v1/airQuality/correlation/WindSpeedAndPm10
   - /api/v1/airQuality/correlation/OzoneAndCo2
   - /api/v1/airQuality/correlation/No2AndCo2
   - /api/v1/airQuality/correlation/TemperatureAndCo2
   - /api/v1/airQuality/correlation/HumidityAndCo2
   - /api/v1/airQuality/correlation/WindSpeedAndCo2
   - /api/v1/airQuality/correlation/No2AndOzone
   - /api/v1/airQuality/correlation/TemperatureAndOzone
   - /api/v1/airQuality/correlation/HumidityAndOzone
   - /api/v1/airQuality/correlation/WindSpeedAndOzone
   - /api/v1/airQuality/correlation/TemperatureAndNo2
   - /api/v1/airQuality/correlation/HumidityAndNo2
   - /api/v1/airQuality/correlation/WindSpeedAndNo2
   - /api/v1/airQuality/correlation/HumidityAndTemperature
   - /api/v1/airQuality/correlation/WindSpeedAndTemperature
   - /api/v1/airQuality/correlation/WindSpeedAndHumidity
2. Metrological
   - /api/v1/metrological/correlation/TemperatureAndHumidity
   - /api/v1/metrological/correlation/TemperatureAndWindSpeed
   - /api/v1/metrological/correlation/TemperatureAndPrecipitation
   - /api/v1/metrological/correlation/HumidityAndWindSpeed
   - /api/v1/metrological/correlation/HumidityAndPrecipitation
   - /api/v1/metrological/correlation/WindSpeedAndPrecipitation
   - /api/v1/metrological/correlation/HumidityAndTemperature
   - /api/v1/metrological/correlation/WindSpeedAndTemperature
   - /api/v1/metrological/correlation/PrecipitationAndTemperature
   - /api/v1/metrological/correlation/WindSpeedAndHumidity
   - /api/v1/metrological/correlation/PrecipitationAndHumidity
   - /api/v1/metrological/correlation/PrecipitationAndWindSpeed

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

### Client Side
1. Admin
   - /api/v1/admin
   - /api/v1/admin/all
   - /api/v1/admin/email/{email}
   - /api/v1/admin/password/{id}
   - /api/v1/admin/delete/email/{email}

2. User
   - /api/v1/user/request
   - /api/v1/user/all
   - /api/v1/user/email/{email}
   - /api/v1/user/delete/{id}
   - /api/v1/user/approve/{id}

3. Credential
   - /api/v1/login/save
   - /api/v1/login/get
   - /api/v1/login/delete/{id}
   - /api/v1/login/update/{email}
   - /api/v1/login/email/{email}

4. Blog
   - /api/v1/blog/create
   - /api/v1/blog/all
   - /api/v1/blog/delete/{id}
   - /api/v1/blog/update/{id}

5. Comment
   - /api/v1/comment/save
   - /api/v1/comment/all
   - /api/v1/comment/update/{id}
   - /api/v1/comment/like/{id}

6. FAQ
   - /api/v1/faq
   - /api/v1/faq/all
   - /api/v1/faq/delete/{id}
   - /api/v1/faq/update/{id}

7. Feedback
   - /api/v1/feedback/save
   - /api/v1/feedback/all
   - /api/v1/feedback/delete/{id}

8. Forecasting
   - /api/v1/forecast
   - /api/v1/forecast/all
   - /api/v1/forecast/delete/{id}
   - /api/v1/forecast/{id}
   - /api/v1/forecast/like/{id}

9. User Policy
   - /api/v1/UserPolicy
   - /api/v1/UserPolicy/save
   - /api/v1/UserPolicy/update/{id}

10. Terms and conditions
    - /api/v1/UserTerms
    - /api/v1/UserTerms/save
    - /api/v1/UserTerms/update/{id}

---
## Repo's Stats
![code lines](https://tokei.rs/b1/github/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform)
![files](https://tokei.rs/b1/github/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform?category=files) </br>
![repo size](https://img.shields.io/github/repo-size/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform?label=Repo%20Size&style=for-the-badge&labelColor=black&color=20bf6b)
![GitHub forks](https://img.shields.io/github/forks/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform?&labelColor=black&color=0fb9b1&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform?&labelColor=black&color=f7b731&style=for-the-badge)
![GitHub LastCommit](https://img.shields.io/github/last-commit/kavicastelo/Ethical-AI-driven-Geographic-Analytics-Platform?logo=github&labelColor=black&color=d1d8e0&style=for-the-badge)
