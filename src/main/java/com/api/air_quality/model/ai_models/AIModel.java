package com.api.air_quality.model.ai_models;

import com.api.air_quality.repository.PredictionRepository;
import com.api.air_quality.model.PredictionModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import py4j.GatewayServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.concurrent.atomic.AtomicReference;

@Component
public class AIModel {

    @Autowired
    PredictionRepository predictionRepository;

    public final AtomicReference<Double[]> airQualityDataCache = new AtomicReference<>();
    public final AtomicReference<Double> receivedDataCache = new AtomicReference<>();
    public String Message() {
        return "Server Get The Response From Here";
    }

    public static void main(String[] args) {

        AIModel aiModel = new AIModel();
        // Start the Py4J gateway server
        GatewayServer server = new GatewayServer(aiModel);
        server.start();
        System.out.println("Py4J Gateway Server Started");
    }

    public Double[] predictPm25(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("Pm25ModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictAirHumidity(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("AirHumidityModelPython");
        return airQualityDataCache.get();
    }

    public double predictMetrological(double[] features) {
        return 0.0;
    }

    public double receivedAirHumidityPrediction(double prediction) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AIModel.class);
        System.out.println(prediction);
        // Create an instance of PredictionModel and set values
        PredictionModel predictionModel = new PredictionModel();

        predictionModel.setPm25("0.0");
        predictionModel.setPm10("0.0");
        predictionModel.setCo2("0.0");
        predictionModel.setOzone("0.0");
        predictionModel.setNo2("0.0");
        predictionModel.setAirTemperature("0.0");
        predictionModel.setAirHumidity(String.valueOf(prediction));
        predictionModel.setAirWindSpeed("0.0");
        predictionModel.setTemperature("0.0");
        predictionModel.setHumidity("0.0");
        predictionModel.setWindSpeed("0.0");
        predictionModel.setPrecipitation("0.0");

        try {
            PredictionRepository predictionRepository = context.getBean(PredictionRepository.class);
            predictionRepository.save(predictionModel);
        } catch (Exception e) {
            e.printStackTrace();
        }
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

    public void runScript(String file){
        try {
            // Assuming your Python script is in the same directory as the JAR file
            String pythonScriptPath = "./src/main/java/com/api/air_quality/python/" + file + ".py";
            String pythonExecutablePath = "C:\\Users\\KAVI\\AppData\\Local\\Programs\\Python\\Python310\\python.exe";
            String command = pythonExecutablePath + " " + pythonScriptPath;

            // Append the cached data to the command
            for (Double value : airQualityDataCache.get()) {
                command += " " + value;
            }

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
