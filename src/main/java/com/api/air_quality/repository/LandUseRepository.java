package com.api.air_quality.repository;

import com.api.air_quality.model.LandUseModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LandUseRepository extends MongoRepository<LandUseModel, String> {
}
