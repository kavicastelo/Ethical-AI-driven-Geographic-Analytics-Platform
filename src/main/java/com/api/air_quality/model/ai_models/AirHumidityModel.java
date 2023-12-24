package com.api.air_quality.model.ai_models;

import org.springframework.stereotype.Component;
import org.jpmml.model.PMMLUtil;

import javax.xml.transform.stream.StreamSource;

import java.io.File;

@Component
public class AirHumidityModel {

    private final org.dmg.pmml.PMML pmml;

    public AirHumidityModel() throws Exception {
        // Replace with the actual path to your PMML file
        String pmmlPath = "../../../../../../../../AI_Models/airHumidity_model.joblib";
        this.pmml = loadPMML(pmmlPath);
    }

    public double predict(double[] features) {
        // Implement your prediction logic using the loaded PMML model
        // Replace the following line with your actual prediction code
        return 0.0;
    }

    private org.dmg.pmml.PMML loadPMML(String pmmlPath) throws Exception {
        File file = new File(pmmlPath);
        StreamSource source = new StreamSource(file);
//        return PMMLUtil.unmarshal(source.getInputStream());
        try {
            return PMMLUtil.unmarshal(source.getInputStream());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public double predictAirHumidity(double[] features) {
        return predict(features);
    }
}
