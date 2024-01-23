package com.api.air_quality.repository;

import com.api.air_quality.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserModel, String> {

    Optional<UserModel> findOneByEmail(String email);
}
