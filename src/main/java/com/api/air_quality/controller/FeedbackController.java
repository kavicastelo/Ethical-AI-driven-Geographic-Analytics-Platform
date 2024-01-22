package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.FeedbackModel;
import com.api.air_quality.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedbackController {
    @Autowired
    FeedbackRepository feedbackRepository;

    @PostMapping("/api/v1/feedback/save")
    public ResponseEntity<ApiResponse> saveFeedback(@RequestBody FeedbackModel feedbackModel) {
        feedbackRepository.save(feedbackModel);

        ApiResponse response = new ApiResponse("Feedback saved successfully");
        return ResponseEntity.ok(response);

    }

    @GetMapping("/api/v1/feedback/all")
    public List<FeedbackModel> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @DeleteMapping("/api/v1/feedback/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String id) {
        feedbackRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }
}
