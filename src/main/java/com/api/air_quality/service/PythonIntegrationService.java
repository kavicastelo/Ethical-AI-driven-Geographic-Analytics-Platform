package com.api.air_quality.service;

import org.springframework.stereotype.Service;
import py4j.GatewayServer;
import com.api.air_quality.python.AIModel;

@Service
public class PythonIntegrationService {
    private GatewayServer gatewayServer;

    public void startPythonGateway() {
        // Start the Py4J gateway server in a separate thread
        Thread gatewayThread = new Thread(() -> {
            gatewayServer = new GatewayServer(new AIModel());
            gatewayServer.start();
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
}
