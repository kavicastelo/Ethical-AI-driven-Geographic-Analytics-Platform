package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.LandUseModel;
import com.api.air_quality.repository.LandUseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LandUseController {
    @Autowired
    LandUseRepository landUseRepository;

    @PostMapping("/api/v1/saveLandUse")
    public ResponseEntity<ApiResponse> saveLandUse(@RequestBody LandUseModel landUseModel) {
        landUseRepository.save(landUseModel);

        ApiResponse response = new ApiResponse("Saved "+landUseModel.getId()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllLandUse")
    public List<LandUseModel> getAllLandUse() {
        return landUseRepository.findAll();
    }

    @GetMapping("/api/v1/getLandUseById/{id}")
    public Optional<LandUseModel> getLandUse(@PathVariable String id) {
        return landUseRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteLandUse/{id}")
    public ResponseEntity<ApiResponse> deleteLandUse(@PathVariable String id) {
        landUseRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateLandUse/{id}")
    public ResponseEntity<ApiResponse> updateLandUse(@PathVariable String id, @RequestBody LandUseModel landUseModel) {
        Optional<LandUseModel> selectedLandUse = landUseRepository.findById(id);

        if (selectedLandUse.isPresent()){
            LandUseModel l = selectedLandUse.get();

            l.setTimestamp(landUseModel.getTimestamp());
            l.setLocation(landUseModel.getLocation());
            l.setTemperature(landUseModel.getTemperature());
            l.setHumidity(landUseModel.getHumidity());
            l.setWindSpeed(landUseModel.getWindSpeed());
            l.setPrecipitation(landUseModel.getPrecipitation());

            landUseRepository.save(l);
        }

        ApiResponse response = new ApiResponse("Approved Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
