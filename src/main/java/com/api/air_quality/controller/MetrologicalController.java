package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.MetrologicalRepository;
import com.api.air_quality.service.MetrologicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@RestController
public class MetrologicalController {
    @Autowired
    MetrologicalRepository metrologicalRepository;

    @Autowired
    MetrologicalService metrologicalService;

    // Basic CRUD
    @PostMapping("/api/v1/saveMetrological")
    public ResponseEntity<ApiResponse> saveMetrological(@RequestBody MetrologicalModel metrologicalModel) {
        metrologicalRepository.save(metrologicalModel);

        ApiResponse response = new ApiResponse("Saved " + metrologicalModel.getId() + " successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllMetrological")
    public List<MetrologicalModel> getAllMetrological() {
        return metrologicalRepository.findAll();
    }

    @GetMapping("/api/v1/getMetrologicalById/{id}")
    public Optional<MetrologicalModel> getMetrological(@PathVariable String id) {
        return metrologicalRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteMetrological/{id}")
    public ResponseEntity<ApiResponse> deleteMetrological(@PathVariable String id) {
        metrologicalRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateMetrological/{id}")
    public ResponseEntity<ApiResponse> updateMetrological(@PathVariable String id, @RequestBody MetrologicalModel metrologicalModel) {
        Optional<MetrologicalModel> selectedMetrological = metrologicalRepository.findById(id);

        if (selectedMetrological.isPresent()) {
            MetrologicalModel m = selectedMetrological.get();

            m.setTimestamp(metrologicalModel.getTimestamp());
            m.setLocation(metrologicalModel.getLocation());
            m.setTemperature(metrologicalModel.getTemperature());
            m.setHumidity(metrologicalModel.getHumidity());
            m.setWindSpeed(metrologicalModel.getWindSpeed());
            m.setPrecipitation(metrologicalModel.getPrecipitation());

            metrologicalRepository.save(m);
        }

        ApiResponse response = new ApiResponse("Approved Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }
    // Basic CRUD

    // IMPORT CSV
    @PostMapping("/api/v1/importMetrological")
    public ResponseEntity<ApiResponse> importMetrological(@RequestPart("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(new ApiResponse("File is empty"));
        }

        // Assuming you can convert MultipartFile to File
        File convertedFile = convertMultiPartToFile(file);

        metrologicalRepository.deleteAll();
        metrologicalService.importDataFromCSV(convertedFile.getAbsolutePath());

        ApiResponse response = new ApiResponse("Imported successfully");
        return ResponseEntity.ok(response);
    }

    private File convertMultiPartToFile(MultipartFile file) {
        File convertedFile = new File(file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return convertedFile;
    }
    // IMPORT CSV

    // GET REQUEST for all data
    @GetMapping("/api/v1/getMetrologicalByDate")
    public List<MetrologicalModel> getMetrologicalByDate(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return metrologicalRepository.findByTimestampBetween(String.valueOf(sDate), String.valueOf(eDate));
    }
    // GET REQUEST for all data

    // get mean by date range
    @GetMapping("/api/v1/getAverageTemperatureByDateRange")
    public Double getAverageTemperatureByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return metrologicalService.getAverageTemperatureByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAverageHumidityByDateRange")
    public Double getAverageHumidityByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return metrologicalService.getAverageHumidityByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAverageWindSpeedByDateRange")
    public Double getAverageWindSpeedByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return metrologicalService.getAverageWindSpeedByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAveragePrecipitationByDateRange")
    public Double getAveragePrecipitationByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return metrologicalService.getAveragePrecipitationByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }
    // get mean by date range

    // get median
    @GetMapping("/api/v1/getMedianMetrologicalTemperature")
    public Double getMedianMetrologicalTemperature() {
        return metrologicalService.calculateMedianTemperature();
    }

    @GetMapping("/api/v1/getMedianMetrologicalHumidity")
    public Double getMedianMetrologicalHumidity() {
        return metrologicalService.calculateMedianHumidity();
    }

    @GetMapping("/api/v1/getMedianMetrologicalWindSpeed")
    public Double getMedianMetrologicalWindSpeed() {
        return metrologicalService.calculateMedianWindSpeed();
    }

    @GetMapping("/api/v1/getMedianMetrologicalPrecipitation")
    public Double getMedianMetrologicalPrecipitation() {
        return metrologicalService.calculateMedianPrecipitation();
    }
    // get median

    // get mode
    @GetMapping("/api/v1/getModeMetrologicalTemperature")
    public Double getModeMetrologicalTemperature() {
        return metrologicalService.calculateModeTemperature();
    }

    @GetMapping("/api/v1/getModeMetrologicalHumidity")
    public Double getModeMetrologicalHumidity() {
        return metrologicalService.calculateModeHumidity();
    }

    @GetMapping("/api/v1/getModeMetrologicalWindSpeed")
    public Double getModeMetrologicalWindSpeed() {
        return metrologicalService.calculateModeWindSpeed();
    }

    @GetMapping("/api/v1/getModeMetrologicalPrecipitation")
    public Double getModeMetrologicalPrecipitation() {
        return metrologicalService.calculateModePrecipitation();
    }
    // get mode
}
