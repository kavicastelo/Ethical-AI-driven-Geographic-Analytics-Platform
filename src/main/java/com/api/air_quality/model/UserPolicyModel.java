package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "user_policy")
public class UserPolicyModel {
    @Id
    private String id;
    private String markdownContent;
    private String date;
}
