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
}
