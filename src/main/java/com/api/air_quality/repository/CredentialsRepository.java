package com.api.air_quality.repository;

import com.api.air_quality.model.CredentialsModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CredentialsRepository extends MongoRepository<CredentialsModel, String> {
    Optional<CredentialsModel> findOneByEmail(String email);
}
