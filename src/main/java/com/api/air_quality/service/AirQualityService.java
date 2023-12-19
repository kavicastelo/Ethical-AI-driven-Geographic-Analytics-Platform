package com.api.air_quality.service;

import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.repository.AirQualityRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
}
