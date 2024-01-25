package com.api.air_quality.serviceTest;

import com.api.air_quality.model.AirQualityModel;
import com.api.air_quality.repository.AirQualityRepository;
import com.api.air_quality.service.AirQualityService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@SpringBootTest
public class AirQualityServiceTest {

    @MockBean
    private AirQualityRepository airQualityRepository;

    @Autowired
    private AirQualityService airQualityService;

    @Test
    public void testGetAverageCo2ByDateRange() {
        // Perform the service method
        Double result = airQualityService.getAverageCo2ByDateRange("2023-01-01", "2023-01-31");

        // Assertions
        assertNotNull(result);
        // Add more assertions based on your specific use case
    }

    @Test
    public void testGetAveragePm25ByDateRange2() {
        Double result = airQualityService.getAveragePm25ByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAveragePm10ByDateRange() {
        Double result = airQualityService.getAveragePm10ByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageOzoneByDateRange() {
        Double result = airQualityService.getAverageOzoneByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageNo2ByDateRange() {
        Double result = airQualityService.getAverageNo2ByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageTemperatureByDateRange() {
        Double result = airQualityService.getAverageTemperatureByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageHumidityByDateRange() {
        Double result = airQualityService.getAverageHumidityByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageWindSpeedByDateRange() {
        Double result = airQualityService.getAverageWindSpeedByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianPm25(){
        Double result = airQualityService.calculateMedianPm25();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianPm10(){
        Double result = airQualityService.calculateMedianPm10();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianCo2(){
        Double result = airQualityService.calculateMedianCo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianOzone(){
        Double result = airQualityService.calculateMedianOzone();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianNo2(){
        Double result = airQualityService.calculateMedianNo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianTemperature(){
        Double result = airQualityService.calculateMedianTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianHumidity(){
        Double result = airQualityService.calculateMedianHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianWindSpeed(){
        Double result = airQualityService.calculateMedianWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModePm25(){
        Double result = airQualityService.calculateModePm25();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModePm10(){
        Double result = airQualityService.calculateModePm10();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeCo2(){
        Double result = airQualityService.calculateModeCo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeOzone(){
        Double result = airQualityService.calculateModeOzone();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeNo2(){
        Double result = airQualityService.calculateModeNo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeTemperature(){
        Double result = airQualityService.calculateModeTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeHumidity(){
        Double result = airQualityService.calculateModeHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeWindSpeed(){
        Double result = airQualityService.calculateModeWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndPm10() {
        // Mock the repository behavior with a list containing at least two elements
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setPm10("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setPm10("18.0");

        when(airQualityRepository.findAllByPm25AndPm10()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndPm10();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndCo2() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setCo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setCo2("18.0");

        when(airQualityRepository.findAllByPm25AndCo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndCo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndOzone() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setOzone("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setOzone("18.0");

        when(airQualityRepository.findAllByPm25AndOzone()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndOzone();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndNo2() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setNo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setNo2("18.0");

        when(airQualityRepository.findAllByPm25AndNo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndNo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndTemperature() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setTemperature("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setTemperature("18.0");

        when(airQualityRepository.findAllByPm25AndTemperature()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndHumidity() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setHumidity("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setHumidity("18.0");

        when(airQualityRepository.findAllByPm25AndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm25AndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm25("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm25("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByPm25AndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm25AndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm10AndCo2() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm10("10.0");
        dataPoint1.setCo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm10("12.0");
        dataPoint2.setCo2("18.0");

        when(airQualityRepository.findAllByPm10AndCo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm10AndCo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm10AndOzone() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm10("10.0");
        dataPoint1.setOzone("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm10("12.0");
        dataPoint2.setOzone("18.0");

        when(airQualityRepository.findAllByPm10AndOzone()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm10AndOzone();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm10AndNo2() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm10("10.0");
        dataPoint1.setNo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm10("12.0");
        dataPoint2.setNo2("18.0");

        when(airQualityRepository.findAllByPm10AndNo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm10AndNo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm10AndTemperature() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm10("10.0");
        dataPoint1.setTemperature("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm10("12.0");
        dataPoint2.setTemperature("18.0");

        when(airQualityRepository.findAllByPm10AndTemperature()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm10AndTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm10AndHumidity() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm10("10.0");
        dataPoint1.setHumidity("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm10("12.0");
        dataPoint2.setHumidity("18.0");

        when(airQualityRepository.findAllByPm10AndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm10AndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationPm10AndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setPm10("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setPm10("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByPm10AndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationPm10AndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationCo2AndOzone() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setCo2("10.0");
        dataPoint1.setOzone("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setCo2("12.0");
        dataPoint2.setOzone("18.0");

        when(airQualityRepository.findAllByCo2AndOzone()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationCo2AndOzone();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationCo2AndNo2() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setCo2("10.0");
        dataPoint1.setNo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setCo2("12.0");
        dataPoint2.setNo2("18.0");

        when(airQualityRepository.findAllByCo2AndNo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationCo2AndNo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationCo2AndTemperature() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setCo2("10.0");
        dataPoint1.setTemperature("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setCo2("12.0");
        dataPoint2.setTemperature("18.0");

        when(airQualityRepository.findAllByCo2AndTemperature()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationCo2AndTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationCo2AndHumidity() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setCo2("10.0");
        dataPoint1.setHumidity("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setCo2("12.0");
        dataPoint2.setHumidity("18.0");

        when(airQualityRepository.findAllByCo2AndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationCo2AndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationCo2AndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setCo2("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setCo2("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByCo2AndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationCo2AndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationOzoneAndNo2() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setOzone("10.0");
        dataPoint1.setNo2("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setOzone("12.0");
        dataPoint2.setNo2("18.0");

        when(airQualityRepository.findAllByOzoneAndNo2()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationOzoneAndNo2();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationOzoneAndTemperature() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setOzone("10.0");
        dataPoint1.setTemperature("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setOzone("12.0");
        dataPoint2.setTemperature("18.0");

        when(airQualityRepository.findAllByOzoneAndTemperature()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationOzoneAndTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationOzoneAndHumidity() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setOzone("10.0");
        dataPoint1.setHumidity("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setOzone("12.0");
        dataPoint2.setHumidity("18.0");

        when(airQualityRepository.findAllByOzoneAndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationOzoneAndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationOzoneAndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setOzone("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setOzone("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByOzoneAndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationOzoneAndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationNo2AndTemperature() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setNo2("10.0");
        dataPoint1.setTemperature("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setNo2("12.0");
        dataPoint2.setTemperature("18.0");

        when(airQualityRepository.findAllByNo2AndTemperature()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationNo2AndTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationNo2AndHumidity() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setNo2("10.0");
        dataPoint1.setHumidity("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setNo2("12.0");
        dataPoint2.setHumidity("18.0");

        when(airQualityRepository.findAllByNo2AndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationNo2AndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationNo2AndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setNo2("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setNo2("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByNo2AndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationNo2AndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationTemperatureAndHumidity() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setTemperature("10.0");
        dataPoint1.setHumidity("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setTemperature("12.0");
        dataPoint2.setHumidity("18.0");

        when(airQualityRepository.findAllByTemperatureAndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationTemperatureAndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationTemperatureAndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setTemperature("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setTemperature("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByTemperatureAndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationTemperatureAndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationHumidityAndWindSpeed() {
        AirQualityModel dataPoint1 = new AirQualityModel();
        dataPoint1.setHumidity("10.0");
        dataPoint1.setWindSpeed("15.0");

        AirQualityModel dataPoint2 = new AirQualityModel();
        dataPoint2.setHumidity("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(airQualityRepository.findAllByHumidityAndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = airQualityService.calculateCorrelationHumidityAndWindSpeed();
        assertNotNull(result);
    }
}
