package com.api.air_quality.service;

import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.repository.AirQualityRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.apache.commons.math3.stat.correlation.PearsonsCorrelation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.*;
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

    public Double calculateModePm25() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllPm25Values();
        List<Double> pm25Vals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getPm25());
                    } catch (NumberFormatException e) {
                        // Handle the case where the pm25 is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return calculateMode(pm25Vals);
    }

    public Double calculateModePm10() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllPm10Values();
        List<Double> pm10Vals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getPm10());
                    } catch (NumberFormatException e) {
                        // Handle the case where the pm10 is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return calculateMode(pm10Vals);
    }

    public Double calculateModeCo2() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllCo2Values();
        List<Double> co2Vals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getCo2());
                    } catch (NumberFormatException e) {
                        // Handle the case where the co2 is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return calculateMode(co2Vals);
    }

    public Double calculateModeOzone() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllOzoneValues();
        List<Double> ozoneVals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getOzone());
                    } catch (NumberFormatException e) {
                        // Handle the case where the ozone is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return calculateMode(ozoneVals);
    }

    public Double calculateModeNo2() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllNo2Values();
        List<Double> no2Vals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getNo2());
                    } catch (NumberFormatException e) {
                        // Handle the case where the no2 is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return calculateMode(no2Vals);
    }

    public Double calculateModeTemperature() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllTemperatureValues();
        List<Double> temperatureVals = airQualityModels.stream()
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
        return calculateMode(temperatureVals);
    }

    public Double calculateModeHumidity() {
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllHumidityValues();
        List<Double> humidityVals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getHumidity());
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
        List<AirQualityModel> airQualityModels = airQualityRepository.findAllWindSpeedValues();
        List<Double> windSpeedVals = airQualityModels.stream()
                .map(airQualityModel -> {
                    try {
                        return Double.parseDouble(airQualityModel.getWindSpeed());
                    } catch (NumberFormatException e) {
                        // Handle the case where the windSpeed is not a valid double
                        return null; // or any other appropriate value
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return calculateMode(windSpeedVals);
    }

    // calculate correlations
    public List<Double> calculateCorrelation() {
        // Retrieve documents with the specified factors
        List<AirQualityModel> factorValues = airQualityRepository.findAllByPm25AndPm10();

        // Log the size of factorValues
//        System.out.println("Factor Values Size: " + factorValues.size());

        // Extract the values from the documents for both factors
        List<Double> factor1Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getPm25()))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        // Log the size of factor1Values
//        System.out.println("Factor 1 Values Size: " + factor1Values.size());

        List<Double> factor2Values = factorValues.stream()
                .map(airQualityModel -> parseDoubleOrDefault(airQualityModel.getPm10()))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        // Log the size of factor2Values
//        System.out.println("Factor 2 Values Size: " + factor2Values.size());

        // Log the parsed values for debugging
//        System.out.println("Factor 1 Values: " + factor1Values);
//        System.out.println("Factor 2 Values: " + factor2Values);

        // Perform correlation calculation using Pearson correlation coefficient
        PearsonsCorrelation correlation = new PearsonsCorrelation();
        double correlationValue = correlation.correlation(
                factor1Values.stream().mapToDouble(Double::doubleValue).toArray(),
                factor2Values.stream().mapToDouble(Double::doubleValue).toArray()
        );

        // Return the result
        return List.of(correlationValue);
    }

    private Double parseDoubleOrDefault(String value) {
        // Check if the value is not null and not empty
        if (value != null && !value.trim().isEmpty()) {
            try {
                return Double.parseDouble(value);
            } catch (NumberFormatException e) {
                // Log the error for debugging
//                System.out.println("Error parsing value: " + value);
                return null; // or any other appropriate value
            }
        } else {
            // Log the error for debugging
//            System.out.println("Value is null or empty: " + value);
            return null; // or any other appropriate value
        }
    }
    // calculate correlations
}
