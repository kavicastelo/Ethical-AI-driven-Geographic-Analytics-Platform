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
}
