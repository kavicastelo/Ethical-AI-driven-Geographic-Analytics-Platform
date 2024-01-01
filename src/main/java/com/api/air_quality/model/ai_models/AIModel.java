package com.api.air_quality.model.ai_models;

import org.springframework.stereotype.Component;
import py4j.GatewayServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.concurrent.atomic.AtomicReference;

@Component
public class AIModel {

    public final AtomicReference<Double[]> airQualityDataCache = new AtomicReference<>();
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

        System.out.println();
        runScript("AirHumidityModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictPm10(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("Pm10ModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictCo2(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("Co2ModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictOzone(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("OzoneModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictNo2(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("No2ModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictAirTemperature(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("AirTemperatureModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictAirWindSpeed(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("AirWindSpeedPython");
        return airQualityDataCache.get();
    }

    public Double[] predictTemperature(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("TemperatureModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictHumidity(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("HumidityModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictWindSpeed(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("WindSpeedModelPython");
        return airQualityDataCache.get();
    }

    public Double[] predictPrecipitation(Double[] features) {
        if (features != null && features.length > 0) {
            airQualityDataCache.set(features);
        }

        runScript("PrecipitationModelPython");
        return airQualityDataCache.get();
    }

    public void runScript(String file){

        try {
            String venvPath = "./venv";
            String pythonExecutablePath = venvPath + "/Scripts/python.exe";
            String pythonScriptPath = "./src/main/java/com/api/air_quality/python/" + file + ".py";
            StringBuilder command = new StringBuilder(pythonExecutablePath + " " + pythonScriptPath);

            // Append the cached data to the command
            for (Double value : airQualityDataCache.get()) {
                command.append(" ").append(value);
            }

            // Execute the command
            Process process = Runtime.getRuntime().exec(command.toString());

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
            if (exitCode != 0) {
                System.out.println("Python script exited with code: " + exitCode);
            }

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
