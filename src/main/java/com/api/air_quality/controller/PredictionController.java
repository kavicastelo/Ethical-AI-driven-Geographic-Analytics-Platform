package com.api.air_quality.controller;

import com.api.air_quality.service.ai_services.PythonIntegrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PredictionController {
    @Autowired
    private PythonIntegrationService pythonIntegrationService;

    @PostMapping("/api/v1/airQuality/predict/airHumidity")
    public ResponseEntity<Double[]> predictAirHumidity(@RequestBody Double[] predictRequest) {
        try {
            Double[] prediction = pythonIntegrationService.predictAirHumidity(predictRequest);
            Double[] receivedData = {pythonIntegrationService.responsePm25(0.0)};
            return ResponseEntity.ok(receivedData);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new Double[0]); // Return an empty array or handle it as needed
        }
    }

    @PostMapping("/api/v1/airQuality/predict/pm25")
    public ResponseEntity<Double[]> predictPm25(@RequestBody Double[] predictRequest) {
        try {
            Double[] prediction = pythonIntegrationService.predictPm25(predictRequest);
            Double[] receivedData = {pythonIntegrationService.responsePm25(0.0)};
            return ResponseEntity.ok(receivedData);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new Double[0]); // Return an empty array or handle it as needed
        }
    }
}
