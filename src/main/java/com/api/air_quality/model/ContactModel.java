package com.api.air_quality.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "contact")
public class ContactModel {
    @Id
    private String id;
    private String sender;
    private String senderEmail;
    private String message;
}
