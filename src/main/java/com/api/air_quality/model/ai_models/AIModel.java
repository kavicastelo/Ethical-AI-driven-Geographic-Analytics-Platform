package com.api.air_quality.model.ai_models;

import org.springframework.stereotype.Component;
import py4j.GatewayServer;

import java.util.Arrays;

@Component
public class AIModel {
    public Double[] airQualityData;
    public String Message() { return "Server Get The Response From Here"; }

    public String AirHumidity() {
        return "Server Get The Response From Here air Humidity";
    }

    public static void main(String[] args) {

        AIModel aiModel = new AIModel();
        // Start the Py4J gateway server
        GatewayServer server = new GatewayServer(aiModel);
        server.start();
        System.out.println("Py4J Gateway Server Started");
    }

    public Double[] predict() {
        // Replace this with your actual prediction logic
        Double[][] test_data = {airQualityData};

        return test_data[0];
    }

    public Double[] predictAirQuality(Double[] features) {
        airQualityData = features;
        System.out.println(Arrays.toString(airQualityData));
        return features;
    }

    public double predictMetrological(double[] features) {
        return 0.0;
    }

    public double receivedAirHumidityPrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedAirTemperaturePrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedAirWindSpeedPrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedHumidityPrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedWindSpeedPrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedTemperaturePrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedPrecipitationPrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedCo2Prediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedNo2Prediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedOzonePrediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedPm10Prediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }

    public double receivedPm25Prediction(double prediction) {
        System.out.println(prediction);
        return prediction;
    }
}
