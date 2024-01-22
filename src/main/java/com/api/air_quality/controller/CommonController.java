package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicReference;

@RestController
public class CommonController {

    public final AtomicReference<String> receivedDataCache = new AtomicReference<>();

    @PostMapping("/api/v1/feedback")
    public String feedbackLogin() {
        ApiResponse response = new ApiResponse("feedback");
        receivedDataCache.set(response.getMessage());
        return ResponseEntity.ok(response).toString();
    }
    @GetMapping("/api/v1/feedback-login")
    public String getFeedbackLogin() {
        return receivedDataCache.get();
    }
}
