package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.FAQModel;
import com.api.air_quality.repository.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FAQController {

    @Autowired
    FAQRepository faqRepository;

    @PostMapping("/api/v1/faq")
    public ResponseEntity<ApiResponse> saveUser(@RequestBody FAQModel faqModel) {
        faqRepository.save(faqModel);

        ApiResponse response = new ApiResponse("User saved successfully");
        return ResponseEntity.ok(response );
    }

    @GetMapping("/api/v1/faq/all")
    public List<FAQModel> getAllUser() {
        return faqRepository.findAll();
    }

    @DeleteMapping("/api/v1/faq/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String id) {
        faqRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/faq/update/{id}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable String id, @RequestBody FAQModel faqModel) {
        Optional<FAQModel> selectedFaq = faqRepository.findById(id);

        if (selectedFaq.isPresent()) {
            FAQModel faq = selectedFaq.get();

            faq.setAnswer(faqModel.getAnswer());
            faqRepository.save(faq);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
