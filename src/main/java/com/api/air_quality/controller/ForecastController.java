package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.ForecastModel;
import com.api.air_quality.repository.ForecastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ForecastController {

    @Autowired
    ForecastRepository forecastRepository;

    @PostMapping("/api/v1/forecast")
    public ResponseEntity<ApiResponse> saveForecast(@RequestBody ForecastModel forecastModel) {
        forecastRepository.save(forecastModel);

        ApiResponse response = new ApiResponse("Forecast saved successfully");
        return ResponseEntity.ok(response );
    }

    @GetMapping("/api/v1/forecast/all")
    public List<ForecastModel> getAllForecast() {
        return forecastRepository.findAll();
    }

    @DeleteMapping("/api/v1/forecast/delete/{id}")
    public ResponseEntity<ApiResponse> deleteForecast(@PathVariable String id) {
        forecastRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/forecast/{id}")
    public ResponseEntity<ApiResponse> updateForecast(@PathVariable String id, @RequestBody ForecastModel forecastModel) {
        Optional<ForecastModel> selectedForecast = forecastRepository.findById(id);

        if (selectedForecast.isPresent()) {
            ForecastModel forecast = selectedForecast.get();

            forecast.setTitle(forecastModel.getTitle());
            forecast.setDateTime(forecastModel.getDateTime());
            forecast.setDescription(forecastModel.getDescription());
            forecast.setLikes(forecastModel.getLikes());
            forecast.setVisible(forecastModel.getVisible());

            forecastRepository.save(forecast);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/forecast/like/{id}")
    public ResponseEntity<ApiResponse> likeForecast(@PathVariable String id, @RequestBody ForecastModel forecastModel) {
        Optional<ForecastModel> selectedForecast = forecastRepository.findById(id);

        if (selectedForecast.isPresent()) {
            ForecastModel forecast = selectedForecast.get();

            forecast.setLikes(forecastModel.getLikes());

            forecastRepository.save(forecast);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
