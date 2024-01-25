package com.api.air_quality.service;

import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.MetrologicalRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.apache.commons.math3.stat.correlation.PearsonsCorrelation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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

    // calculate mode formula
    private Double calculateMode(List<Double> values) {
        if (values.isEmpty()) {
            return 0.0; // or throw an exception, depending on your requirements
        }
        Map<Double, Long> frequencyMap = values.stream()
                .collect(Collectors.groupingBy(Double::doubleValue, Collectors.counting()));
        long maxFrequency = frequencyMap.values().stream().max(Long::compareTo).orElse(0L);
        return frequencyMap.entrySet().stream()
                .filter(entry -> entry.getValue() == maxFrequency)
                .mapToDouble(Map.Entry::getKey)
                .average()
                .orElse(0.0);
    }
    // calculate mode formula

    public Double calculateModeTemperature() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllTemperatureValues();
        List<Double> temperatureVals = metrologicalModels.stream()
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
        return calculateMode(temperatureVals);
    }

    public Double calculateModeHumidity() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllHumidityValues();
        List<Double> humidityVals = metrologicalModels.stream()
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
        return calculateMode(humidityVals);
    }

    public Double calculateModeWindSpeed() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllWindSpeedValues();
        List<Double> windSpeedVals = metrologicalModels.stream()
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
        return calculateMode(windSpeedVals);
    }

    public Double calculateModePrecipitation() {
        List<MetrologicalModel> metrologicalModels = metrologicalRepository.findAllPrecipitationValues();
        List<Double> precipitationVals = metrologicalModels.stream()
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
        return calculateMode(precipitationVals);
    }

    // calculate correlations
    public List<Double> calculateCorrelationTemperatureAndHumidity() {
        List<MetrologicalModel> factorValues = metrologicalRepository.findAllByTemperatureAndHumidity();

        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getTemperature()))
                .filter(Objects::nonNull).toList();

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getHumidity()))
                .filter(Objects::nonNull).toList();

        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        return List.of(correlationValue);
    }

    public List<Double> calculateCorrelationTemperatureAndWindSpeed() {
        List<MetrologicalModel> factorValues = metrologicalRepository.findAllByTemperatureAndWindSpeed();

        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getTemperature()))
                .filter(Objects::nonNull).toList();

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getWindSpeed()))
                .filter(Objects::nonNull).toList();

        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        return List.of(correlationValue);
    }

    public List<Double> calculateCorrelationTemperatureAndPrecipitation() {
        List<MetrologicalModel> factorValues = metrologicalRepository.findAllByTemperatureAndPrecipitation();

        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getTemperature()))
                .filter(Objects::nonNull).toList();

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getPrecipitation()))
                .filter(Objects::nonNull).toList();

        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        return List.of(correlationValue);
    }

    public List<Double> calculateCorrelationHumidityAndWindSpeed() {
        List<MetrologicalModel> factorValues = metrologicalRepository.findAllByHumidityAndWindSpeed();

        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getHumidity()))
                .filter(Objects::nonNull).toList();

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getWindSpeed()))
                .filter(Objects::nonNull).toList();

        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        return List.of(correlationValue);
    }

    public List<Double> calculateCorrelationHumidityAndPrecipitation() {
        List<MetrologicalModel> factorValues = metrologicalRepository.findAllByHumidityAndPrecipitation();

        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getHumidity()))
                .filter(Objects::nonNull).toList();

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getPrecipitation()))
                .filter(Objects::nonNull).toList();

        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        return List.of(correlationValue);
    }

    public List<Double> calculateCorrelationWindSpeedAndPrecipitation() {
        List<MetrologicalModel> factorValues = metrologicalRepository.findAllByWindSpeedAndPrecipitation();

        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getWindSpeed()))
                .filter(Objects::nonNull).toList();

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getPrecipitation()))
                .filter(Objects::nonNull).toList();

        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        return List.of(correlationValue);
    }

    private Double parseDoubleOrDefault(String value) {
        // Check if the value is not null and not empty
        if (value != null && !value.trim().isEmpty()) {
            try {
                return Double.parseDouble(value);
            } catch (NumberFormatException e) {
                return null; // or any other appropriate value
            }
        } else {
            return null; // or any other appropriate value
        }
    }
    // calculate correlations

}
