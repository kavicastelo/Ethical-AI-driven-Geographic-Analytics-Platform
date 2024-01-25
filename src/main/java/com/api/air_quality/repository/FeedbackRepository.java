package com.api.air_quality.repository;

import com.api.air_quality.model.FeedbackModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<FeedbackModel, String> {
}
