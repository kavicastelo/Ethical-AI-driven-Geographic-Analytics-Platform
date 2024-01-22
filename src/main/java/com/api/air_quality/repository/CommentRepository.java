package com.api.air_quality.repository;

import com.api.air_quality.model.CommentModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository<CommentModel, String> {
}
