package com.api.air_quality.repository;

import com.api.air_quality.model.BlogModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlogRepository extends MongoRepository<BlogModel, String> {
}
