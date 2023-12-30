package com.api.air_quality.repository;

import com.api.air_quality.model.PredictionModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PredictionRepository extends MongoRepository<PredictionModel, String> {
}
