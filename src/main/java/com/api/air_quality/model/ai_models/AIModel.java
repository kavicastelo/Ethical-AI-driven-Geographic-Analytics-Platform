package com.api.air_quality.model.ai_models;

import org.springframework.stereotype.Component;
import py4j.GatewayServer;

@Component
public class AIModel {
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

    public double predict(double[] features) {
        // Replace this with your actual prediction logic
        double[] test_data = {1.0, 2.0, 4.0, 5.0, 7.0, 9.0, 10.0};
        return 0.0;
    }

    public double predictAirHumidity(double[] features) {
        return predict(features);
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
}
