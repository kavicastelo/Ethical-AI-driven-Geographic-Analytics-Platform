package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.UserPolicyModel;
import com.api.air_quality.repository.UserPolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserPolicyController {
    @Autowired
    UserPolicyRepository userPolicyRepository;

    @GetMapping("/api/v1/UserPolicy")
    public List<UserPolicyModel> getAllUserPolicy() {
        return userPolicyRepository.findAll();
    }

    @PostMapping("/api/v1/UserPolicy/save")
    public ResponseEntity<ApiResponse> saveUserPolicy(@RequestBody UserPolicyModel userPolicyModel) {
        userPolicyRepository.save(userPolicyModel);

        ApiResponse response = new ApiResponse("UserPolicy saved successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/UserPolicy/update/{id}")
    public ResponseEntity<ApiResponse> updateUserPolicy(@PathVariable String id, @RequestBody UserPolicyModel userPolicyModel) {
        Optional<UserPolicyModel> selectedUserPolicy = userPolicyRepository.findById(id);

        if (selectedUserPolicy.isPresent()) {
            UserPolicyModel userPolicy = selectedUserPolicy.get();

            userPolicy.setMarkdownContent(userPolicyModel.getMarkdownContent());
            userPolicy.setDate(userPolicyModel.getDate());

            userPolicyRepository.save(userPolicy);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
