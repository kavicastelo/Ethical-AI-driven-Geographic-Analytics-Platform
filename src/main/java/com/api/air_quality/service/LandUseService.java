package com.api.air_quality.service;

import com.api.air_quality.model.LandUseModel;
import com.api.air_quality.repository.LandUseRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class LandUseService {
    @Autowired
    private LandUseRepository landUseRepository;

    public void importDataFromCSV(String filePath) {
        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            List<LandUseModel> data = new ArrayList<>();
            String[] line;
            while ((line = reader.readNext()) != null) {
                // Map CSV fields to YourModelClass attributes
                LandUseModel model = new LandUseModel();
                model.setLocation(line[0]);
                model.setLand_type(line[1]);

                data.add(model);
            }

            // Bulk insert into MongoDB
            landUseRepository.saveAll(data);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }
    }
}
