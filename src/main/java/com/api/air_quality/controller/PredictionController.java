package com.api.air_quality.controller;
import com.api.air_quality.service.ai_services.PythonIntegrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicReference;


@RestController
@RequestMapping("/api/v1/airQuality/predict")
public class PredictionController {
    @Autowired
    private PythonIntegrationService pythonIntegrationService;

    public final AtomicReference<Double> receivedDataCache = new AtomicReference<>();


    @PostMapping("/airHumidity")
    public ResponseEntity<String> predictAndReceiveAirHumidity(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictAirHumidity(predictRequest);
            ResponseEntity<String> responseEntity = receiveAirHumidityPrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing air humidity prediction");
        }
    }

    @PostMapping("/res/airHumidity")
    public ResponseEntity<String> receiveAirHumidityPrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    // Customize
    private String processPrediction(Double prediction) {
        // Example: Concatenate the prediction value into a string
        return "Processed result: " + prediction;
    }


}
