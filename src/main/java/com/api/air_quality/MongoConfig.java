package com.api.air_quality;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;


@Configuration
public class MongoConfig {

    @Bean
    public MongoTemplate mongoTemplate(MongoDatabaseFactory mongoDbFactory,
                                       MappingMongoConverter mappingMongoConverter) {
        return new MongoTemplate(mongoDbFactory, mappingMongoConverter);
    }
}
