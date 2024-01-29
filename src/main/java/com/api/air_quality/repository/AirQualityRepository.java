package com.api.air_quality.repository;

import com.api.air_quality.model.AirQualityModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.Instant;
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

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'co2': 1}")
    List<AirQualityModel> findAllByPm25AndCo2();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'ozone': 1}")
    List<AirQualityModel> findAllByPm25AndOzone();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'no2': 1}")
    List<AirQualityModel> findAllByPm25AndNo2();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'temperature': 1}")
    List<AirQualityModel> findAllByPm25AndTemperature();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'humidity': 1}")
    List<AirQualityModel> findAllByPm25AndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm25': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByPm25AndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1, 'co2': 1}")
    List<AirQualityModel> findAllByPm10AndCo2();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1, 'ozone': 1}")
    List<AirQualityModel> findAllByPm10AndOzone();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1, 'no2': 1}")
    List<AirQualityModel> findAllByPm10AndNo2();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1, 'temperature': 1}")
    List<AirQualityModel> findAllByPm10AndTemperature();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1, 'humidity': 1}")
    List<AirQualityModel> findAllByPm10AndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'pm10': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByPm10AndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'co2': 1, 'ozone': 1}")
    List<AirQualityModel> findAllByCo2AndOzone();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'co2': 1, 'no2': 1}")
    List<AirQualityModel> findAllByCo2AndNo2();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'co2': 1, 'temperature': 1}")
    List<AirQualityModel> findAllByCo2AndTemperature();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'co2': 1, 'humidity': 1}")
    List<AirQualityModel> findAllByCo2AndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'co2': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByCo2AndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'ozone': 1, 'no2': 1}")
    List<AirQualityModel> findAllByOzoneAndNo2();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'ozone': 1, 'temperature': 1}")
    List<AirQualityModel> findAllByOzoneAndTemperature();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'ozone': 1, 'humidity': 1}")
    List<AirQualityModel> findAllByOzoneAndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'ozone': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByOzoneAndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'no2': 1, 'temperature': 1}")
    List<AirQualityModel> findAllByNo2AndTemperature();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'no2': 1, 'humidity': 1}")
    List<AirQualityModel> findAllByNo2AndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'no2': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByNo2AndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1, 'humidity': 1}")
    List<AirQualityModel> findAllByTemperatureAndHumidity();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'temperature': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByTemperatureAndWindSpeed();

    @Query(value = "{ 'timestamp' : { $exists : true }}", fields = "{'humidity': 1, 'windSpeed': 1}")
    List<AirQualityModel> findAllByHumidityAndWindSpeed();

    void deleteByTimestampBefore(Instant cutoffTimestamp);
}
