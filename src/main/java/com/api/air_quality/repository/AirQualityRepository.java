package com.api.air_quality.repository;

import com.api.air_quality.model.AirQualityModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AirQualityRepository extends MongoRepository<AirQualityModel, String> {

    List<AirQualityModel> findByTimestampBetween(String startDate, String endDate);
}
