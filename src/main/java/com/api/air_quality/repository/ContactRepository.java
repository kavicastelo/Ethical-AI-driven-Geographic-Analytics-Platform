package com.api.air_quality.repository;

import com.api.air_quality.model.ContactModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<ContactModel, String> {
}
