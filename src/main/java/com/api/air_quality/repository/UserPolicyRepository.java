package com.api.air_quality.repository;

import com.api.air_quality.model.UserPolicyModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserPolicyRepository extends MongoRepository<UserPolicyModel, String> {
}
