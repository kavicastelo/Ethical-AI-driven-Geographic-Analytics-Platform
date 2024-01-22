package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "blog")
public class BlogModel {
    @Id
    private String id;
    private String title;
    private String description;
    private Object content;
    private String image;
    private String tags;
    private String created_at;
    private String updated_at;
    private String author;
}
