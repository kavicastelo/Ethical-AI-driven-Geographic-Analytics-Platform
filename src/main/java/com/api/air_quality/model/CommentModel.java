package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "comment")
public class CommentModel {
    @Id
    private String id;
    private String blogId;
    private String name;
    private String email;
    private String profile;
    private String date;
    private String comment;
    private Object reply;
    private Integer like;
}
