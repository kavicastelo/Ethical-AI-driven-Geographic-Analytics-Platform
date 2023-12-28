package com.api.air_quality.model.ai_models;

import org.springframework.stereotype.Component;
import py4j.GatewayServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

@Component
public class AIModel {
    Double[] airQualityData;
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

    public Double[] predictAQ() {
        // Replace this with your actual prediction logic
        Double[][] test_data = {airQualityData};

        return test_data[0];
    }

    public Double[] predictAirQuality(Double[] features) {
        airQualityData = features;
        runScript();
        return airQualityData;
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

    public void runScript(){
        try {
            // Assuming your Python script is in the same directory as the JAR file
            String pythonScriptPath = "./src/main/java/com/api/air_quality/python/AirHumidityModelPython.py";
            String pythonExecutablePath = "C:\\Users\\KAVI\\AppData\\Local\\Programs\\Python\\Python310\\python.exe";
            String command = pythonExecutablePath + " " + pythonScriptPath;

            // Execute the command and get the process
            Process process = Runtime.getRuntime().exec(command);

            // Read the output from the Python script
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            // Read the error output from the Python script
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            while ((line = errorReader.readLine()) != null) {
                System.err.println(line);
            }

            // Wait for the Python script to finish
            int exitCode = process.waitFor();
            System.out.println("Python script exited with code: " + exitCode);

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
