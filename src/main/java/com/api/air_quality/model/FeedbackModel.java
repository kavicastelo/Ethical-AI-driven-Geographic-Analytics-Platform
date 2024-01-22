package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "feedback")
public class FeedbackModel {
    @Id
    private String id;
    private String name;
    private String family_name;
    private String email;
    private String picture;
    private String feedback;
    private String date;
}
