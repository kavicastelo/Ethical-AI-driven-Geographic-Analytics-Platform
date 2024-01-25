package com.api.air_quality.repository;

import com.api.air_quality.model.FAQModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FAQRepository extends MongoRepository<FAQModel, String> {
}
