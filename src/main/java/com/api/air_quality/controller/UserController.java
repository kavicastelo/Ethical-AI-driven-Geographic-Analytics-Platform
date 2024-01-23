package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.UserModel;
import com.api.air_quality.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/v1/user/request")
    public ResponseEntity<ApiResponse> saveUser(@RequestBody UserModel userModel) {
        userRepository.save(userModel);

        ApiResponse response = new ApiResponse("User saved successfully");
        return ResponseEntity.ok(response );
    }

    @GetMapping("/api/v1/user/all")
    public List<UserModel> getAllUser() {
        return userRepository.findAll();
    }

    @DeleteMapping("/api/v1/user/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String id) {
        userRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/user/approve/{id}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable String id, @RequestBody UserModel userModel) {
        Optional<UserModel> selectedUser = userRepository.findById(id);

        if (selectedUser.isPresent()) {
            UserModel user = selectedUser.get();

            user.setActive(true);
            userRepository.save(user);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/user/email/{email}")
    public ResponseEntity<UserModel> findByEmail(@PathVariable String email) {
        Optional<UserModel> consultant = userRepository.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }
}
