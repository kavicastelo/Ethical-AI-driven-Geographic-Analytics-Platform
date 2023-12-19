package com.api.air_quality.repository;

import com.api.air_quality.model.MetrologicalModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface MetrologicalRepository extends MongoRepository<MetrologicalModel, String> {

    List<MetrologicalModel> findByTimestampBetween(String timestamp, String timestamp2);
}
