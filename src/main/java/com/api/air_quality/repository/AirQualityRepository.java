package com.api.air_quality.repository;

import com.api.air_quality.model.AirQualityModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface AirQualityRepository extends MongoRepository<AirQualityModel, String> {

    List<AirQualityModel> findByTimestampBetween(String startDate, String endDate);

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1}")
    List<AirQualityModel> findAllPm25Values();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1}")
    List<AirQualityModel> findAllPm10Values();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'co2': 1}")
    List<AirQualityModel> findAllCo2Values();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'ozone': 1}")
    List<AirQualityModel> findAllOzoneValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'no2': 1}")
    List<AirQualityModel> findAllNo2Values();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1}")
    List<AirQualityModel> findAllTemperatureValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'humidity': 1}")
    List<AirQualityModel> findAllHumidityValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'windSpeed': 1}")
    List<AirQualityModel> findAllWindSpeedValues();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'pm10': 1}")
    List<AirQualityModel> findAllByPm25AndPm10();
}
