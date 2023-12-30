package com.api.air_quality.service.ai_services;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import py4j.GatewayServer;
import com.api.air_quality.model.ai_models.AIModel;

@Service
public class PythonIntegrationService {

    private final GatewayServer gatewayServer;
    private final AIModel aiModel;

    @Autowired
    @Lazy
    public PythonIntegrationService(GatewayServer gatewayServer) {
        this.gatewayServer = gatewayServer;
        this.aiModel = new AIModel();
    }

    @Bean
    @Lazy
    public GatewayServer gatewayServer(AIModel aiModel) {
        return new GatewayServer(aiModel);
    }

    @PostConstruct
    public void startPythonGateway() {
        AIModel aiModel = new AIModel();

        // Start the Py4J gateway server in a separate thread
        Thread gatewayThread = new Thread(() -> {
            GatewayServer server = new GatewayServer(aiModel);
            server.start();
            System.out.println("Py4J Gateway Server Started");
        });

        gatewayThread.start();
    }

    public void stopPythonGateway() {
        if (gatewayServer != null) {
            System.out.println("Py4J Gateway Server Stopped");
            gatewayServer.shutdown();
        }
    }

    public Double[] predictPm25(Double[] features) {
        return aiModel.predictPm25(features);
    }

    public Double[] predictAirHumidity(Double[] features) {
        return aiModel.predictAirHumidity(features);
    }

    public double responsePm25(Double response) {
        double val = aiModel.receivedAirHumidityPrediction(response);
        System.out.println(val);
        return val;
    }

    public double predictMetrological(double[] features) {
        return aiModel.predictMetrological(features);
    }
}
