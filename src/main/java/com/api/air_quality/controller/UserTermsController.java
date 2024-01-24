package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.UserTermsModel;
import com.api.air_quality.repository.UserTermsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserTermsController {
    @Autowired
    UserTermsRepository userTermsRepository;

    @GetMapping("/api/v1/UserTerms")
    public List<UserTermsModel> getAllUserTerms() {
        return userTermsRepository.findAll();
    }

    @PostMapping("/api/v1/UserTerms/save")
    public ResponseEntity<ApiResponse> saveUserTerms(@RequestBody UserTermsModel userTermsModel) {
        userTermsRepository.save(userTermsModel);

        ApiResponse response = new ApiResponse("UserTerms saved successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/UserTerms/update/{id}")
    public ResponseEntity<ApiResponse> updateUserTerms(@PathVariable String id, @RequestBody UserTermsModel userTermsModel) {
        Optional<UserTermsModel> selectedUserTerms = userTermsRepository.findById(id);

        if (selectedUserTerms.isPresent()) {
            UserTermsModel userTerms = selectedUserTerms.get();

            userTerms.setContent(userTermsModel.getContent());
            userTerms.setDate(userTermsModel.getDate());

            userTermsRepository.save(userTerms);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
