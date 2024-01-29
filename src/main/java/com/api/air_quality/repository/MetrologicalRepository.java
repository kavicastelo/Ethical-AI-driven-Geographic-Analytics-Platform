package com.api.air_quality.repository;

import com.api.air_quality.model.MetrologicalModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.Instant;
import java.util.List;

public interface MetrologicalRepository extends MongoRepository<MetrologicalModel, String> {

    List<MetrologicalModel> findByTimestampBetween(String timestamp, String timestamp2);

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1}")
    List<MetrologicalModel> findAllTemperatureValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'humidity': 1}")
    List<MetrologicalModel> findAllHumidityValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'windSpeed': 1}")
    List<MetrologicalModel> findAllWindSpeedValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'precipitation': 1}")
    List<MetrologicalModel> findAllPrecipitationValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1, 'humidity': 1}")
    List<MetrologicalModel> findAllByTemperatureAndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1, 'windSpeed': 1}")
    List<MetrologicalModel> findAllByTemperatureAndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1, 'precipitation': 1}")
    List<MetrologicalModel> findAllByTemperatureAndPrecipitation();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'humidity': 1, 'windSpeed': 1}")
    List<MetrologicalModel> findAllByHumidityAndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'humidity': 1, 'precipitation': 1}")
    List<MetrologicalModel> findAllByHumidityAndPrecipitation();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'windSpeed': 1, 'precipitation': 1}")
    List<MetrologicalModel> findAllByWindSpeedAndPrecipitation();

    void deleteByTimestampBefore(Instant cutoffTimestamp);
}
