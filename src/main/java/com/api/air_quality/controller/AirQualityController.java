package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.repository.AirQualityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@RestController
public class AirQualityController {
    @Autowired
    AirQualityRepository airQualityRepository;

    @PostMapping("/api/v1/saveAirQuality")
    public ResponseEntity<ApiResponse> saveAirQuality(@RequestBody AirQualityModel airQualityModel) {
        airQualityRepository.save(airQualityModel);

        ApiResponse response = new ApiResponse("Saved "+airQualityModel.getId()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllAirQuality")
    public List<AirQualityModel> getAllAirQuality() {
        return airQualityRepository.findAll();
    }

    @GetMapping("/api/v1/getAirQualityById/{id}")
    public Optional<AirQualityModel> getAirQuality(@PathVariable String id) {
        return airQualityRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteAirQuality/{id}")
    public ResponseEntity<ApiResponse> deleteAppointment(@PathVariable String id) {
        airQualityRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateAppointment/{id}")
    public ResponseEntity<ApiResponse> updateAppointment(@PathVariable String id, @RequestBody AirQualityModel airQualityModel) {
        Optional<AirQualityModel> selectedAppointment = airQualityRepository.findById(id);

        if (selectedAppointment.isPresent()){
            AirQualityModel a = selectedAppointment.get();

            a.setTimestamp(airQualityModel.getTimestamp());
            a.setLocation(airQualityModel.getLocation());
            a.setPm25(airQualityModel.getPm25());
            a.setPm10(airQualityModel.getPm10());
            a.setCo2(airQualityModel.getCo2());
            a.setOzone(airQualityModel.getOzone());
            a.setNo2(airQualityModel.getNo2());
            a.setTemperature(airQualityModel.getTemperature());
            a.setHumidity(airQualityModel.getHumidity());
            a.setWindSpeed(airQualityModel.getWindSpeed());

            airQualityRepository.save(a);
        }

        ApiResponse response = new ApiResponse("Approved Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAirQualityByDate")
    public List<AirQualityModel> getAirQualityByDate(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityRepository.findByTimestampBetween(String.valueOf(sDate), String.valueOf(eDate));
    }
}
