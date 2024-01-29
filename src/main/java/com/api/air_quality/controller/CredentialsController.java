package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.CredentialsModel;
import com.api.air_quality.repository.CredentialsRepository;
import com.api.air_quality.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class CredentialsController {
    @Autowired
    CredentialsRepository credentialsRepository;

    @Autowired
    EmailService emailService;

    @PostMapping("/api/v1/login/save")
    public ResponseEntity<ApiResponse> saveCredentials(@RequestBody CredentialsModel credentialsModel) {
        credentialsRepository.save(credentialsModel);

        String date = new Date().toString().split("T",1)[0];

        String to = credentialsModel.getEmail();
        String subject = "Geographic Analytics Platform";
        String text = "Congratulation! Now you can use the platform as a professional user.\n\n" +
                "Your credentials are:\n" +
                "Username: " + credentialsModel.getEmail() + "\n" +
                "Password: " + credentialsModel.getPassword() + "\n\n" +
                "Thank you!\n\n" +
                "https://teal-sunshine-24be83.netlify.app/\n\n\n"+
                "Best regards,\n"+
                "Geographic Analytics Platform\n"+
                "support team: support@ga.com\n"+
                ""+date+"";
        emailService.sendSimpleEmail(to, subject, text);

        ApiResponse response = new ApiResponse("Credentials saved successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/login/get")
    public List<CredentialsModel> getAllCredentials() {
        return credentialsRepository.findAll();
    }

    @GetMapping("/api/v1/login/email/{email}")
    public ResponseEntity<CredentialsModel> findByEmail(@PathVariable String email) {
        Optional<CredentialsModel> selectedUser = credentialsRepository.findOneByEmail(email);

        return selectedUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }

    @DeleteMapping("/api/v1/login/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String id) {
        credentialsRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/login/update/{email}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable String email, @RequestBody CredentialsModel credentialsModel) {
        Optional<CredentialsModel> selectedUser = credentialsRepository.findOneByEmail(email);

        if (selectedUser.isPresent()) {
            CredentialsModel user = selectedUser.get();

            user.setPassword(credentialsModel.getPassword());
            credentialsRepository.save(user);
        }

        ApiResponse response = new ApiResponse("Updated Code:" + email + " successfully");
        return ResponseEntity.ok(response);
    }
}
