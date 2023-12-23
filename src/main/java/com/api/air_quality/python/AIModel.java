package com.api.air_quality.python;

import org.springframework.stereotype.Component;
import py4j.GatewayServer;

@Component
public class AIModel {
    public String Message() { return "Server Get The Response From Here"; }
    public static void main(String[] args) {

        AIModel aiModel = new AIModel();
        // Start the Py4J gateway server
        GatewayServer server = new GatewayServer(aiModel);
        server.start();
        System.out.println("Py4J Gateway Server Started");
    }

    public double predict(double[] features) {
        // Replace this with your actual prediction logic
        return 0.0;
    }
}
