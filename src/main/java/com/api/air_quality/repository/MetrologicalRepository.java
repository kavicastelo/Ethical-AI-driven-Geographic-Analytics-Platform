package com.api.air_quality.repository;

import com.api.air_quality.model.MetrologicalModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MetrologicalRepository extends MongoRepository<MetrologicalModel, String> {
}
