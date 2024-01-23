package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.AdminModel;
<<<<<<< HEAD
=======
import com.api.air_quality.model.UserModel;
>>>>>>> backend
import com.api.air_quality.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AdminController {

    @Autowired
    AdminRepository adminRepository;

    @PostMapping("/api/v1/admin")
    public ResponseEntity<ApiResponse> saveAdmin(@RequestBody AdminModel adminModel) {
        adminRepository.save(adminModel);

        ApiResponse response = new ApiResponse("Admin saved successfully");
        return ResponseEntity.ok(response );
    }

    @GetMapping("/api/v1/admin/all")
    public List<AdminModel> getAllAdmin() {
        return adminRepository.findAll();
    }

    @GetMapping("/api/v1/admin/email/{email}")
    public ResponseEntity<AdminModel> findByEmail(@PathVariable String email) {
        Optional<AdminModel> consultant = adminRepository.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }

    @PutMapping("/api/v1/admin/password/{id}")
    public ResponseEntity<ApiResponse> updatePassword(@PathVariable String id, @RequestBody AdminModel adminModel) {
        Optional<AdminModel> selectedAdmin = adminRepository.findById(id);

        if (selectedAdmin.isPresent()) {
            AdminModel admin = selectedAdmin.get();

            admin.setPassword(adminModel.getPassword());

            adminRepository.save(admin);
        }

        ApiResponse response = new ApiResponse("Updated Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/api/v1/admin/delete/email/{email}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String email) {
        adminRepository.deleteByEmail(email);

        ApiResponse response = new ApiResponse("Deleted Code:" + email + " successfully");
        return ResponseEntity.ok(response);
    }
}
