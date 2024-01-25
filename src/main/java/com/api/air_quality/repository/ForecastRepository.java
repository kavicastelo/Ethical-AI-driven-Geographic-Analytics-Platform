package com.api.air_quality.repository;

import com.api.air_quality.model.ForecastModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ForecastRepository extends MongoRepository<ForecastModel, String> {
}
