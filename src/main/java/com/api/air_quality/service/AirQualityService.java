package com.api.air_quality.service;

import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.AirQualityRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class AirQualityService {

    @Autowired
    private AirQualityRepository airQualityRepository;

    public void importDataFromCSV(String filePath) {
        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            List<AirQualityModel> data = new ArrayList<>();
            String[] line;
            while ((line = reader.readNext()) != null) {
                // Map CSV fields to YourModelClass attributes
                AirQualityModel model = new AirQualityModel();
                model.setTimestamp(line[0]);
                model.setLocation(line[1]);
                model.setPm25(line[2]);
                model.setPm10(line[3]);
                model.setCo2(line[4]);
                model.setOzone(line[5]);
                model.setNo2(line[6]);
                model.setTemperature(line[7]);
                model.setHumidity(line[8]);
                model.setWindSpeed(line[9]);

                data.add(model);
            }

            // Bulk insert into MongoDB
            airQualityRepository.saveAll(data);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }
    }

    public Double getAveragePm25ByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double pm25 = Double.parseDouble(airQualityModel.getPm25());
            sumAirQuality += pm25;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAveragePm10ByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double pm10 = Double.parseDouble(airQualityModel.getPm10());
            sumAirQuality += pm10;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAverageCo2ByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double co2 = Double.parseDouble(airQualityModel.getCo2());
            sumAirQuality += co2;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAverageOzoneByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double ozone = Double.parseDouble(airQualityModel.getOzone());
            sumAirQuality += ozone;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAverageNo2ByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double no2 = Double.parseDouble(airQualityModel.getNo2());
            sumAirQuality += no2;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAverageTemperatureByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double temperature = Double.parseDouble(airQualityModel.getTemperature());
            sumAirQuality += temperature;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAverageHumidityByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double humidity = Double.parseDouble(airQualityModel.getHumidity());
            sumAirQuality += humidity;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    public Double getAverageWindSpeedByDateRange(String startDate, String endDate) {
        List<AirQualityModel> airQualityList = airQualityRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (AirQualityModel airQualityModel : airQualityList) {
            double windSpeed = Double.parseDouble(airQualityModel.getWindSpeed());
            sumAirQuality += windSpeed;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size();
    }

    //    calculate the median formula
    private Double calculateMedian(List<Double> values) {
        if (values.isEmpty()) {
            return 0.0; // or throw an exception, depending on your requirements
        }
        values.sort(Double::compareTo);
        int size = values.size();
        if (size % 2 == 0) {
            int mid = size / 2;
            return (values.get(mid - 1) + values.get(mid)) / 2.0;
        } else {
            return values.get(size / 2);
        }
    }
//    calculate the median formula

    public Double calculateMedianPm25() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllPm25Values();
        List<Double> pm25Values = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getPm25());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(pm25Values);
    }

    public Double calculateMedianPm10() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllPm10Values();
        List<Double> pm10Values = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getPm10());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(pm10Values);
    }

    public Double calculateMedianCo2() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllCo2Values();
        List<Double> co2Values = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getCo2());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(co2Values);
    }

    public Double calculateMedianOzone() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllOzoneValues();
        List<Double> ozoneValues = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getOzone());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(ozoneValues);
    }

    public Double calculateMedianNo2() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllNo2Values();
        List<Double> no2Values = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getNo2());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(no2Values);
    }

    public Double calculateMedianTemperature() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllTemperatureValues();
        List<Double> temperatureValues = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getTemperature());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(temperatureValues);
    }

    public Double calculateMedianHumidity() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllHumidityValues();
        List<Double> humidityValues = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getHumidity());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(humidityValues);
    }

    public Double calculateMedianWindSpeed() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllWindSpeedValues();
        List<Double> windSpeedValues = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getWindSpeed());
                    } catch (NumberFormatException e) {
                        // Handle the case where the temperature is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(windSpeedValues);
    }
}
