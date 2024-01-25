package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "forecast")
public class ForecastModel {
    @Id
    private String id;
    private String title;
    private String dateTime;
    private String description;
    private Integer likes;
    private Boolean visible;
}
