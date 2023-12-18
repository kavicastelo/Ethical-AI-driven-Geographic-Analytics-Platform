package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.repository.AirQualityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AirQualityController {
    @Autowired
    AirQualityRepository airQualityRepository;

    @PostMapping("/api/v1/save")
    public ResponseEntity<ApiResponse> saveAirQuality(@RequestBody AirQualityModel airQualityModel) {
        airQualityRepository.save(airQualityModel);

        ApiResponse response = new ApiResponse("Saved "+airQualityModel.getId()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAll")
    public List<AirQualityModel> getAllAirQuality() {
        return airQualityRepository.findAll();
    }
}
