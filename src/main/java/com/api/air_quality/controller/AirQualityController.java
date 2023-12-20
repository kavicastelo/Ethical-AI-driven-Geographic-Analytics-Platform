package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.repository.AirQualityRepository;
import com.api.air_quality.service.AirQualityService;
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
import java.util.Objects;
import java.util.Optional;

@RestController
public class AirQualityController {
    @Autowired
    AirQualityRepository airQualityRepository;

    @Autowired
    AirQualityService airQualityService;

    @PostMapping("/api/v1/saveAirQuality")
    public ResponseEntity<ApiResponse> saveAirQuality(@RequestBody AirQualityModel airQualityModel) {
        airQualityRepository.save(airQualityModel);

        ApiResponse response = new ApiResponse("Saved " + airQualityModel.getId() + " successfully");
        return ResponseEntity.ok(response);
    }

    //    Basic CRUD
    @GetMapping("/api/v1/getAllAirQuality")
    public List<AirQualityModel> getAllAirQuality() {
        return airQualityRepository.findAll();
    }

    @GetMapping("/api/v1/getAirQualityById/{id}")
    public Optional<AirQualityModel> getAirQuality(@PathVariable String id) {
        return airQualityRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteAirQuality/{id}")
    public ResponseEntity<ApiResponse> deleteAirQuality(@PathVariable String id) {
        airQualityRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateAirQuality/{id}")
    public ResponseEntity<ApiResponse> updateAirQuality(@PathVariable String id, @RequestBody AirQualityModel airQualityModel) {
        Optional<AirQualityModel> selectedAppointment = airQualityRepository.findById(id);

        if (selectedAppointment.isPresent()) {
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

        ApiResponse response = new ApiResponse("Approved Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }
    //    Basic CRUD

    //    CSV IMPORT
    @PostMapping("/api/v1/importAirQuality")
    public ResponseEntity<ApiResponse> importAirQuality(@RequestPart("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(new ApiResponse("File is empty"));
        }

        // Assuming you can convert MultipartFile to File
        File convertedFile = convertMultiPartToFile(file);

        airQualityRepository.deleteAll();
        airQualityService.importDataFromCSV(convertedFile.getAbsolutePath());

        ApiResponse response = new ApiResponse("Imported successfully");
        return ResponseEntity.ok(response);
    }

    private File convertMultiPartToFile(MultipartFile file) {
        File convertedFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return convertedFile;
    }
    //    CSV IMPORT

    // GET REQUEST for all data
    @GetMapping("/api/v1/getAirQualityByDate")
    public List<AirQualityModel> getAirQualityByDate(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityRepository.findByTimestampBetween(String.valueOf(sDate), String.valueOf(eDate));
    }
    // GET REQUEST for all data

    // Means of Air Quality
    @GetMapping("/api/v1/getAQAveragePm25ByDateRange")
    public Double getAveragePm25ByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAveragePm25ByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAveragePm10ByDateRange")
    public Double getAveragePm10ByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAveragePm10ByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAverageCo2ByDateRange")
    public Double getAverageCo2ByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAverageCo2ByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAverageOzoneByDateRange")
    public Double getAverageOzoneByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAverageOzoneByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAverageNo2ByDateRange")
    public Double getAverageNo2ByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAverageNo2ByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAverageTemperatureByDateRange")
    public Double getAverageTemperatureByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAverageTemperatureByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAverageHumidityByDateRange")
    public Double getAverageHumidityByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAverageHumidityByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }

    @GetMapping("/api/v1/getAQAverageWindSpeedByDateRange")
    public Double getAverageWindSpeedByDateRange(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        LocalDateTime sDate = startDate.atStartOfDay();
        LocalDateTime eDate = endDate.atTime(LocalTime.MAX);
        return airQualityService.getAverageWindSpeedByDateRange(String.valueOf(sDate), String.valueOf(eDate));
    }
    // Means of Air Quality

    // Medians of Air Quality
    @GetMapping("/api/v1/getMedianAirQualityPm25")
    public Double getMedianAirQualityPm25() {
        return airQualityService.calculateMedianPm25();
    }

    @GetMapping("/api/v1/getMedianAirQualityPm10")
    public Double getMedianAirQualityPm10() {
        return airQualityService.calculateMedianPm10();
    }

    @GetMapping("/api/v1/getMedianAirQualityCo2")
    public Double getMedianAirQualityCo2() {
        return airQualityService.calculateMedianCo2();
    }

    @GetMapping("/api/v1/getMedianAirQualityOzone")
    public Double getMedianAirQualityOzone() {
        return airQualityService.calculateMedianOzone();
    }

    @GetMapping("/api/v1/getMedianAirQualityNo2")
    public Double getMedianAirQualityNo2() {
        return airQualityService.calculateMedianNo2();
    }

    @GetMapping("/api/v1/getMedianAirQualityTemperature")
    public Double getMedianAirQualityTemperature() {
        return airQualityService.calculateMedianTemperature();
    }

    @GetMapping("/api/v1/getMedianAirQualityHumidity")
    public Double getMedianAirQualityHumidity() {
        return airQualityService.calculateMedianHumidity();
    }

    @GetMapping("/api/v1/getMedianAirQualityWindSpeed")
    public Double getMedianAirQualityWindSpeed() {
        return airQualityService.calculateMedianWindSpeed();
    }
    // Medians of Air Quality

    // Mode of Air Quality
    @GetMapping("/api/v1/getModeAirQualityPm25")
    public Double getModeAirQualityPm25() {
        return airQualityService.calculateModePm25();
    }

    @GetMapping("/api/v1/getModeAirQualityPm10")
    public Double getModeAirQualityPm10() {
        return airQualityService.calculateModePm10();
    }

    @GetMapping("/api/v1/getModeAirQualityCo2")
    public Double getModeAirQualityCo2() {
        return airQualityService.calculateModeCo2();
    }

    @GetMapping("/api/v1/getModeAirQualityOzone")
    public Double getModeAirQualityOzone() {
        return airQualityService.calculateModeOzone();
    }

    @GetMapping("/api/v1/getModeAirQualityNo2")
    public Double getModeAirQualityNo2() {
        return airQualityService.calculateModeNo2();
    }

    @GetMapping("/api/v1/getModeAirQualityTemperature")
    public Double getModeAirQualityTemperature() {
        return airQualityService.calculateModeTemperature();
    }

    @GetMapping("/api/v1/getModeAirQualityHumidity")
    public Double getModeAirQualityHumidity() {
        return airQualityService.calculateModeHumidity();
    }

    @GetMapping("/api/v1/getModeAirQualityWindSpeed")
    public Double getModeAirQualityWindSpeed() {
        return airQualityService.calculateModeWindSpeed();
    }
    // Mode of Air Quality

    // correlation
    @GetMapping("/api/v1/airQuality/correlation/pm25AndPm10")
    public List<Double> getCorrelation() {
        return airQualityService.calculateCorrelationPm25AndPm10();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm25AndCo2")
    public List<Double> getCorrelationPm25AndCo2() {
        return airQualityService.calculateCorrelationPm25AndCo2();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm25AndOzone")
    public List<Double> getCorrelationPm25AndOzone() {
        return airQualityService.calculateCorrelationPm25AndOzone();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm25AndNo2")
    public List<Double> getCorrelationPm25AndNo2() {
        return airQualityService.calculateCorrelationPm25AndNo2();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm25AndTemperature")
    public List<Double> getCorrelationPm25AndTemperature() {
        return airQualityService.calculateCorrelationPm25AndTemperature();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm25AndHumidity")
    public List<Double> getCorrelationPm25AndHumidity() {
        return airQualityService.calculateCorrelationPm25AndHumidity();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm25AndWindSpeed")
    public List<Double> getCorrelationPm25AndWindSpeed() {
        return airQualityService.calculateCorrelationPm25AndWindSpeed();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm10AndCo2")
    public List<Double> getCorrelationPm10AndCo2() {
        return airQualityService.calculateCorrelationPm10AndCo2();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm10AndOzone")
    public List<Double> getCorrelationPm10AndOzone() {
        return airQualityService.calculateCorrelationPm10AndOzone();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm10AndNo2")
    public List<Double> getCorrelationPm10AndNo2() {
        return airQualityService.calculateCorrelationPm10AndNo2();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm10AndTemperature")
    public List<Double> getCorrelationPm10AndTemperature() {
        return airQualityService.calculateCorrelationPm10AndTemperature();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm10AndHumidity")
    public List<Double> getCorrelationPm10AndHumidity() {
        return airQualityService.calculateCorrelationPm10AndHumidity();
    }

    @GetMapping("/api/v1/airQuality/correlation/pm10AndWindSpeed")
    public List<Double> getCorrelationPm10AndWindSpeed() {
        return airQualityService.calculateCorrelationPm10AndWindSpeed();
    }

    @GetMapping("/api/v1/airQuality/correlation/co2AndOzone")
    public List<Double> getCorrelationCo2AndOzone() {
        return airQualityService.calculateCorrelationCo2AndOzone();
    }

    @GetMapping("/api/v1/airQuality/correlation/co2AndNo2")
    public List<Double> getCorrelationCo2AndNo2() {
        return airQualityService.calculateCorrelationCo2AndNo2();
    }

    @GetMapping("/api/v1/airQuality/correlation/co2AndTemperature")
    public List<Double> getCorrelationCo2AndTemperature() {
        return airQualityService.calculateCorrelationCo2AndTemperature();
    }

    @GetMapping("/api/v1/airQuality/correlation/co2AndHumidity")
    public List<Double> getCorrelationCo2AndHumidity() {
        return airQualityService.calculateCorrelationCo2AndHumidity();
    }

    @GetMapping("/api/v1/airQuality/correlation/co2AndWindSpeed")
    public List<Double> getCorrelationCo2AndWindSpeed() {
        return airQualityService.calculateCorrelationCo2AndWindSpeed();
    }

    @GetMapping("/api/v1/airQuality/correlation/ozoneAndNo2")
    public List<Double> getCorrelationOzoneAndNo2() {
        return airQualityService.calculateCorrelationOzoneAndNo2();
    }

    @GetMapping("/api/v1/airQuality/correlation/ozoneAndTemperature")
    public List<Double> getCorrelationOzoneAndTemperature() {
        return airQualityService.calculateCorrelationOzoneAndTemperature();
    }

    @GetMapping("/api/v1/airQuality/correlation/ozoneAndHumidity")
    public List<Double> getCorrelationOzoneAndHumidity() {
        return airQualityService.calculateCorrelationOzoneAndHumidity();
    }

    @GetMapping("/api/v1/airQuality/correlation/ozoneAndWindSpeed")
    public List<Double> getCorrelationOzoneAndWindSpeed() {
        return airQualityService.calculateCorrelationOzoneAndWindSpeed();
    }

    @GetMapping("/api/v1/airQuality/correlation/no2AndTemperature")
    public List<Double> getCorrelationNo2AndTemperature() {
        return airQualityService.calculateCorrelationNo2AndTemperature();
    }

    @GetMapping("/api/v1/airQuality/correlation/no2AndHumidity")
    public List<Double> getCorrelationNo2AndHumidity() {
        return airQualityService.calculateCorrelationNo2AndHumidity();
    }

    @GetMapping("/api/v1/airQuality/correlation/no2AndWindSpeed")
    public List<Double> getCorrelationNo2AndWindSpeed() {
        return airQualityService.calculateCorrelationNo2AndWindSpeed();
    }

    @GetMapping("/api/v1/airQuality/correlation/temperatureAndHumidity")
    public List<Double> getCorrelationTemperatureAndHumidity() {
        return airQualityService.calculateCorrelationTemperatureAndHumidity();
    }

    @GetMapping("/api/v1/airQuality/correlation/temperatureAndWindSpeed")
    public List<Double> getCorrelationTemperatureAndWindSpeed() {
        return airQualityService.calculateCorrelationTemperatureAndWindSpeed();
    }

    @GetMapping("/api/v1/airQuality/correlation/humidityAndWindSpeed")
    public List<Double> getCorrelationHumidityAndWindSpeed() {
        return airQualityService.calculateCorrelationHumidityAndWindSpeed();
    }
    // correlation
}
