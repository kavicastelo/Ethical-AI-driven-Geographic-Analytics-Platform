package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "land_use")
public class LandUseModel {
    @Id
    private String id;
    private String location;
    private String land_type;
}
