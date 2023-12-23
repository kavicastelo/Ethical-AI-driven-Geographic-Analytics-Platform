package com.api.air_quality.service.ai_services;

import com.api.air_quality.model.ai_models.AirHumidityModel;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import py4j.GatewayServer;

@Service
public class AirHumidityModelService {
    private final PythonIntegrationService pythonIntegrationService;
    private final AirHumidityModel airHumidityModel;

    @Autowired
    public AirHumidityModelService(PythonIntegrationService pythonIntegrationService, AirHumidityModel airHumidityModel) {
        this.pythonIntegrationService = pythonIntegrationService;
        this.airHumidityModel = airHumidityModel;
    }

    public double predictAirHumidity(double[] features) {
        // Call the predict method on the Java model
        return airHumidityModel.predictAirHumidity(features);
    }
}
