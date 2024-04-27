package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.ContactModel;
import com.api.air_quality.repository.ContactRepository;
import com.api.air_quality.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    EmailService emailService;

    @PostMapping("/api/v1/contact")
    public ResponseEntity<ApiResponse> sendMail(@RequestBody ContactModel contactModel){
        emailService.sendSimpleEmail("kavindu.kokila.info@gmail.com","Urban air quality platform - contact","" +
                "Dear Administration,"+"\n" +
                "You got an contact email from: "+contactModel.getName()+"\n" +
                "Email Address: "+contactModel.getEmail()+"\n\n" +
                ""+contactModel.getMessage()+"\n\n" +
                "Client is waiting for your response. Reply ASAP\n\n\n" +
                "System Automated Email - Urban Air Quality Platform");

        emailService.sendSimpleEmail(contactModel.getEmail(),"Urban air quality platform - contact","" +
                "Dear "+contactModel.getName()+","+"\n" +
                "We got your contact message. Our agent will be contact you ASAP. Thank you for contacting with us! \n\n" +
                "Sincerely,\n" +
                "Urban Air Quality Platform.\n\n" +
                "Note:- Don't reply to this email. This is system automated email.");

        ApiResponse response = new ApiResponse("Contact message sent successfully!");
        return ResponseEntity.ok(response);
    }
}
