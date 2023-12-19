package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.MetrologicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MetrologicalController {
    @Autowired
    MetrologicalRepository metrologicalRepository;

    @PostMapping("/api/v1/saveMetrological")
    public ResponseEntity<ApiResponse> saveMetrological(@RequestBody MetrologicalModel metrologicalModel) {
        metrologicalRepository.save(metrologicalModel);

        ApiResponse response = new ApiResponse("Saved "+metrologicalModel.getId()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllMetrological")
    public List<MetrologicalModel> getAllMetrological() {
        return metrologicalRepository.findAll();
    }

    @GetMapping("/api/v1/getMetrologicalById/{id}")
    public Optional<MetrologicalModel> getMetrological(@PathVariable String id) {
        return metrologicalRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteMetrological/{id}")
    public ResponseEntity<ApiResponse> deleteMetrological(@PathVariable String id) {
        metrologicalRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateMetrological/{id}")
    public ResponseEntity<ApiResponse> updateMetrological(@PathVariable String id, @RequestBody MetrologicalModel metrologicalModel) {
        Optional<MetrologicalModel> selectedMetrological = metrologicalRepository.findById(id);

        if (selectedMetrological.isPresent()){
            MetrologicalModel m = selectedMetrological.get();
            
            m.setLocation(metrologicalModel.getLocation());
            m.setLand_type(metrologicalModel.getLand_type());

            metrologicalRepository.save(m);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
