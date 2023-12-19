package com.api.air_quality.service;

import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.MetrologicalRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class MetrologicalService {
    @Autowired
    private MetrologicalRepository metrologicalRepository;

    public void importDataFromCSV(String filePath) {
        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            List<MetrologicalModel> data = new ArrayList<>();
            String[] line;
            while ((line = reader.readNext()) != null) {
                // Map CSV fields to YourModelClass attributes
                MetrologicalModel model = new MetrologicalModel();
                model.setTimestamp(line[0]);
                model.setLocation(line[1]);
                model.setTemperature(line[2]);
                model.setHumidity(line[3]);
                model.setWindSpeed(line[4]);
                model.setPrecipitation(line[5]);

                data.add(model);
            }

            // Bulk insert into MongoDB
            metrologicalRepository.saveAll(data);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }
    }

//    calculate the average (mean) air quality
    public Double getAverageTemperatureByDateRange(String startDate, String endDate) {
        List<MetrologicalModel> airQualityList = metrologicalRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (MetrologicalModel metrologicalModel : airQualityList) {
            double temp = Double.parseDouble(metrologicalModel.getTemperature());
            sumAirQuality += temp;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size()-1;
    }

    public Double getAverageHumidityByDateRange(String startDate, String endDate) {
        List<MetrologicalModel> airQualityList = metrologicalRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (MetrologicalModel metrologicalModel : airQualityList) {
            double humidity = Double.parseDouble(metrologicalModel.getHumidity());
            sumAirQuality += humidity;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size()-1;
    }

    public Double getAverageWindSpeedByDateRange(String startDate, String endDate) {
        List<MetrologicalModel> airQualityList = metrologicalRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (MetrologicalModel metrologicalModel : airQualityList) {
            double windSpeed = Double.parseDouble(metrologicalModel.getWindSpeed());
            sumAirQuality += windSpeed;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size()-1;
    }

    public Double getAveragePrecipitationByDateRange(String startDate, String endDate) {
        List<MetrologicalModel> airQualityList = metrologicalRepository.findByTimestampBetween(startDate, endDate);

        // Calculate the average air quality
        double sumAirQuality = 0.0;
        for (MetrologicalModel metrologicalModel : airQualityList) {
            double precipitation = Double.parseDouble(metrologicalModel.getPrecipitation());
            sumAirQuality += precipitation;
        }

        return airQualityList.isEmpty() ? 0.0 : sumAirQuality / airQualityList.size()-1;
    }
//    calculate the average (mean) air quality

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

    public Double calculateMedianTemperature() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllTemperatureValues();
        List<Double> temperatureValues = metrologicalModels.stream()
                .map(metrologicalModel -> {
                    try {
                        return Double.parseDouble(metrologicalModel.getTemperature());
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
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllHumidityValues();
        List<Double> humidityValues = metrologicalModels.stream()
                .map(metrologicalModel -> {
                    try {
                        return Double.parseDouble(metrologicalModel.getHumidity());
                    } catch (NumberFormatException e) {
                        // Handle the case where the humidity is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(humidityValues);
    }

    public Double calculateMedianWindSpeed() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllWindSpeedValues();
        List<Double> windSpeedValues = metrologicalModels.stream()
                .map(metrologicalModel -> {
                    try {
                        return Double.parseDouble(metrologicalModel.getWindSpeed());
                    } catch (NumberFormatException e) {
                        // Handle the case where the wind speed is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(windSpeedValues);
    }

    public Double calculateMedianPrecipitation() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllPrecipitationValues();
        List<Double> precipitationValues = metrologicalModels.stream()
                .map(metrologicalModel -> {
                    try {
                        return Double.parseDouble(metrologicalModel.getPrecipitation());
                    } catch (NumberFormatException e) {
                        // Handle the case where the precipitation is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return calculateMedian(precipitationValues);
    }
}
