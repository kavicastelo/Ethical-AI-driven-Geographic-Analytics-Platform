package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "prediction")
public class PredictionModel {
    @Id
    private String id;
    private String pm25;
    private String pm10;
    private String co2;
    private String ozone;
    private String no2;
    private String airTemperature;
    private String airHumidity;
    private String airWindSpeed;
    private String temperature;
    private String humidity;
    private String windSpeed;
    private String precipitation;
}
