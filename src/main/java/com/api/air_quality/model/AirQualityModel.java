package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "air_quality")
public class AirQualityModel {
    @Id
    private String id;
    private String timestamp;
    private String location;
    private String pm25;
    private String pm10;
    private String co2;
    private String ozone;
    private String no2;
    private String temperature;
    private String humidity;
    private String windSpeed;
}
