package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "admin")
public class AdminModel {
    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String password;
}
