package com.api.air_quality.model;

import py4j.GatewayServer;

public class AirQualityPredictionModel {
    private final AirQualityPredictionModelPython pythonModel;

    public static void main(String[] args) {
        AirQualityPredictionModel model = new AirQualityPredictionModel();
        GatewayServer gatewayServer = new GatewayServer(model);
        gatewayServer.start();
        System.out.println("Py4J Gateway Server Started");
    }

    public AirQualityPredictionModel() {
        this.pythonModel = new AirQualityPredictionModelPython();
    }

    public double predictAirQuality(String location, double[] features) {
        return pythonModel.predict(location, features);
    }
}
