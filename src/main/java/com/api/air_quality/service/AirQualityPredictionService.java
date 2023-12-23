package com.api.air_quality.service;

import com.api.air_quality.model.AirQualityPredictionModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import py4j.GatewayServer;


@Service
public class AirQualityPredictionService {

    private GatewayServer gatewayServer;

    public void startPythonGateway() {
        Thread gatewayThread = new Thread(() -> {
            AirQualityPredictionModel model = new AirQualityPredictionModel();
            gatewayServer = new GatewayServer(model);
            gatewayServer.start();
        });

        gatewayThread.start();
    }

    public void stopPythonGateway() {
        if (gatewayServer != null) {
            System.out.println("Py4J Gateway Server Stopped");
            gatewayServer.shutdown();
        }
    }

    public double predictAirQuality(String location, double[] features) {
        // Call the predict method on the Python model
        return 0.0; // Placeholder, replace with actual implementation
    }
}

