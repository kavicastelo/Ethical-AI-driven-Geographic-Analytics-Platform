package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "users")
public class UserModel {
    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String country;
    private String remarks;
    private Boolean active;
}
