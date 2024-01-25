package com.api.air_quality.repository;

import com.api.air_quality.model.UserTermsModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserTermsRepository extends MongoRepository<UserTermsModel, String> {
}
