package com.api.air_quality.service;

import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.model.LandUseModel;
import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.AirQualityRepository;
import com.api.air_quality.repository.LandUseRepository;
import com.api.air_quality.repository.MetrologicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;
import java.util.Random;

@Service
public class DataGenerationService {

    @Autowired
    private AirQualityRepository airQualityRepository;

    @Autowired
    private MetrologicalRepository meteorologicalRepository;

    @Autowired
    private LandUseRepository landUseRepository;

    private final Random random = new Random();

    @Scheduled(fixedRate = 1800000) // Run every 30 minutes
    public void generateAndSaveRandomValues() {
        generateAndSaveAirQualityData();
        generateAndSaveMeteorologicalData();
        manageAirQualityDataLimit();
        manageMeteorologicalDataLimit();
    }

    private void generateAndSaveAirQualityData() {
        String timestamp = generateTimestamp();
        String[] locations = {"Colombo", "Galle", "Matara", "Hambantota"};
        String location = locations[random.nextInt(locations.length)];
        double pm25 = generateRandomValue(20, 30) + generateRandomValue(-2, 2);
        double pm10 = generateRandomValue(20, 30) + generateRandomValue(-2, 2);
        double co2 = generateRandomValue(20, 30) + generateRandomValue(-3, 3);
        double ozone = generateRandomValue(20, 30) + generateRandomValue(-2, 2);
        double no2 = generateRandomValue(20, 30) + generateRandomValue(-1, 1);
        double temperature = generateRandomValue(20, 30);
        double humidity = generateRandomValue(15, 20);
        double windSpeed = generateRandomValue(3, 8);

        AirQualityModel airQuality = new AirQualityModel();
        airQuality.setTimestamp(timestamp);
        airQuality.setLocation(location);
        airQuality.setPm25(String.valueOf(pm25));
        airQuality.setPm10(String.valueOf(pm10));
        airQuality.setCo2(String.valueOf(co2));
        airQuality.setOzone(String.valueOf(ozone));
        airQuality.setNo2(String.valueOf(no2));
        airQuality.setTemperature(String.valueOf(temperature));
        airQuality.setHumidity(String.valueOf(humidity));
        airQuality.setWindSpeed(String.valueOf(windSpeed));

        airQualityRepository.save(airQuality);
    }

    private void generateAndSaveMeteorologicalData() {
        String timestamp = generateTimestamp();
        String[] locations = {"Residential", "Commercial", "Industrial", "Park"};
        String location = locations[random.nextInt(locations.length)];
        double temperature = generateRandomValue(20, 30);
        double humidity = generateRandomValue(15, 20);
        double windSpeed = generateRandomValue(3, 8);
        double precipitation = generateRandomValue(0, 0.5) + Math.max(0, (25 - temperature) / 25);

        MetrologicalModel meteorological = new MetrologicalModel();
        meteorological.setTimestamp(timestamp);
        meteorological.setLocation(location);
        meteorological.setTemperature(String.valueOf(temperature));
        meteorological.setHumidity(String.valueOf(humidity));
        meteorological.setWindSpeed(String.valueOf(windSpeed));
        meteorological.setPrecipitation(String.valueOf(precipitation));

        meteorologicalRepository.save(meteorological);
    }

    private void generateAndSaveLandUseData() {
        String[] landTypes = {"Residential", "Commercial", "Industrial", "Park"};
        String landType = landTypes[random.nextInt(landTypes.length)];

        LandUseModel landUse = new LandUseModel();
        landUse.setLand_type(landType);

        landUseRepository.save(landUse);
    }

    public void manageAirQualityDataLimit() {
        int limit = 500;

        long currentRowCount = airQualityRepository.count();

        if (currentRowCount > limit) {
            Instant cutoffTimestamp = Instant.now().minus(Duration.ofDays(30));
            airQualityRepository.deleteByTimestampBefore(cutoffTimestamp);
        }
    }

    public void manageMeteorologicalDataLimit() {
        int limit = 500;

        long currentRowCount = meteorologicalRepository.count();

        if (currentRowCount > limit) {
            Instant cutoffTimestamp = Instant.now().minus(Duration.ofDays(30));
            meteorologicalRepository.deleteByTimestampBefore(cutoffTimestamp);
        }
    }

    private String generateTimestamp() {
        return new Date().toString();
    }

    private double generateRandomValue(double min, double max) {
        return min + (max - min) * random.nextDouble();
    }
}