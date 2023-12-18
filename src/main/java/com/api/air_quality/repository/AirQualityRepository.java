package com.api.air_quality.repository;


import com.api.air_quality.model.AirQualityModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AirQualityRepository extends MongoRepository<AirQualityModel, String> {
}
