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

    @PostMapping("/pm25")
    public ResponseEntity<String> predictAndReceivePm25(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictPm25(predictRequest);
            ResponseEntity<String> responseEntity = receivePm25Prediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing pm25 prediction");
        }
    }
    @PostMapping("/res/pm25")
    public ResponseEntity<String> receivePm25Prediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/pm10")
    public ResponseEntity<String> predictAndReceivePm10(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictPm10(predictRequest);
            ResponseEntity<String> responseEntity = receivePm10Prediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing pm10 prediction");
        }
    }
    @PostMapping("/res/pm10")
    public ResponseEntity<String> receivePm10Prediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/co2")
    public ResponseEntity<String> predictAndReceiveCo2(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictCo2(predictRequest);
            ResponseEntity<String> responseEntity = receiveCo2Prediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing co2 prediction");
        }
    }
    @PostMapping("/res/co2")
    public ResponseEntity<String> receiveCo2Prediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/ozone")
    public ResponseEntity<String> predictAndReceiveOzone(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictOzone(predictRequest);
            ResponseEntity<String> responseEntity = receiveOzonePrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing ozone prediction");
        }
    }
    @PostMapping("/res/ozone")
    public ResponseEntity<String> receiveOzonePrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/no2")
    public ResponseEntity<String> predictAndReceiveNo2(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictNo2(predictRequest);
            ResponseEntity<String> responseEntity = receiveNo2Prediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing no2 prediction");
        }
    }
    @PostMapping("/res/no2")
    public ResponseEntity<String> receiveNo2Prediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/airTemperature")
    public ResponseEntity<String> predictAndReceiveAirTemperature(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictAirTemperature(predictRequest);
            ResponseEntity<String> responseEntity = receiveAirTemperaturePrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing air temperature prediction");
        }
    }
    @PostMapping("/res/airTemperature")
    public ResponseEntity<String> receiveAirTemperaturePrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/airWindSpeed")
    public ResponseEntity<String> predictAndReceiveAirWindSpeed(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictAirWindSpeed(predictRequest);
            ResponseEntity<String> responseEntity = receiveAirWindSpeedPrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing air wind speed prediction");
        }
    }
    @PostMapping("/res/airWindSpeed")
    public ResponseEntity<String> receiveAirWindSpeedPrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/temperature")
    public ResponseEntity<String> predictAndReceiveTemperature(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictTemperature(predictRequest);
            ResponseEntity<String> responseEntity = receiveTemperaturePrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing temperature prediction");
        }
    }
    @PostMapping("/res/temperature")
    public ResponseEntity<String> receiveTemperaturePrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/windSpeed")
    public ResponseEntity<String> predictAndReceiveWindSpeed(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictWindSpeed(predictRequest);
            ResponseEntity<String> responseEntity = receiveWindSpeedPrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing wind speed prediction");
        }
    }
    @PostMapping("/res/windSpeed")
    public ResponseEntity<String> receiveWindSpeedPrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/humidity")
    public ResponseEntity<String> predictAndReceiveHumidity(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictHumidity(predictRequest);
            ResponseEntity<String> responseEntity = receiveHumidityPrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing humidity prediction");
        }
    }
    @PostMapping("/res/humidity")
    public ResponseEntity<String> receiveHumidityPrediction(@RequestBody Double prediction) {
        String processedResult = processPrediction(prediction);
        receivedDataCache.set(prediction);

        return ResponseEntity.ok(processedResult);
    }

    @PostMapping("/precipitation")
    public ResponseEntity<String> predictAndReceivePrecipitation(@RequestBody Double[] predictRequest) {
        try {
            pythonIntegrationService.predictPrecipitation(predictRequest);
            ResponseEntity<String> responseEntity = receivePrecipitationPrediction(receivedDataCache.get());
            String processedResult = responseEntity.getBody();
            return ResponseEntity.ok(processedResult);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error processing precipitation prediction");
        }
    }
    @PostMapping("/res/precipitation")
    public ResponseEntity<String> receivePrecipitationPrediction(@RequestBody Double prediction) {
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
