package com.api.air_quality.repository;

import com.api.air_quality.model.AdminModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AdminRepository extends MongoRepository<AdminModel, String> {

    Optional<AdminModel> findOneByEmail(String email);

    Optional<AdminModel> deleteByEmail(String email);
}
