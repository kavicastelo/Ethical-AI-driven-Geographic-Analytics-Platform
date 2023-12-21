package com.api.air_quality.serviceTest;

import com.api.air_quality.model.MetrologicalModel;
import com.api.air_quality.repository.MetrologicalRepository;
import com.api.air_quality.service.MetrologicalService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@SpringBootTest
public class MetrologicalServiceTest {

    @MockBean
    private MetrologicalRepository metrologicalRepository;

    @Autowired
    private MetrologicalService metrologicalService;

    @Test
    public void testGetAverageTemperatureByDateRange() {
        Double result = metrologicalService.getAverageTemperatureByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageHumidityByDateRange() {
        Double result = metrologicalService.getAverageHumidityByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAverageWindSpeedByDateRange() {
        Double result = metrologicalService.getAverageWindSpeedByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testGetAveragePrecipitationByDateRange() {
        Double result = metrologicalService.getAveragePrecipitationByDateRange("2023-01-01", "2023-01-31");
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianTemperature() {
        Double result = metrologicalService.calculateMedianTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianHumidity() {
        Double result = metrologicalService.calculateMedianHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianWindSpeed() {
        Double result = metrologicalService.calculateMedianWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateMedianPrecipitation() {
        Double result = metrologicalService.calculateMedianPrecipitation();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeTemperature() {
        Double result = metrologicalService.calculateModeTemperature();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeHumidity() {
        Double result = metrologicalService.calculateModeHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModeWindSpeed() {
        Double result = metrologicalService.calculateModeWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateModePrecipitation() {
        Double result = metrologicalService.calculateModePrecipitation();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationTemperatureHumidity() {
        MetrologicalModel dataPoint1 = new MetrologicalModel();
        dataPoint1.setTemperature("10.0");
        dataPoint1.setHumidity("15.0");

        MetrologicalModel dataPoint2 = new MetrologicalModel();
        dataPoint2.setTemperature("12.0");
        dataPoint2.setHumidity("18.0");

        when(metrologicalRepository.findAllByTemperatureAndHumidity()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = metrologicalService.calculateCorrelationTemperatureAndHumidity();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationTemperatureWindSpeed() {
        MetrologicalModel dataPoint1 = new MetrologicalModel();
        dataPoint1.setTemperature("10.0");
        dataPoint1.setWindSpeed("15.0");

        MetrologicalModel dataPoint2 = new MetrologicalModel();
        dataPoint2.setTemperature("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(metrologicalRepository.findAllByTemperatureAndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = metrologicalService.calculateCorrelationTemperatureAndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationTemperaturePrecipitation() {
        MetrologicalModel dataPoint1 = new MetrologicalModel();
        dataPoint1.setTemperature("10.0");
        dataPoint1.setPrecipitation("15.0");

        MetrologicalModel dataPoint2 = new MetrologicalModel();
        dataPoint2.setTemperature("12.0");
        dataPoint2.setPrecipitation("18.0");

        when(metrologicalRepository.findAllByTemperatureAndPrecipitation()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = metrologicalService.calculateCorrelationTemperatureAndPrecipitation();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationHumidityWindSpeed() {
        MetrologicalModel dataPoint1 = new MetrologicalModel();
        dataPoint1.setHumidity("10.0");
        dataPoint1.setWindSpeed("15.0");

        MetrologicalModel dataPoint2 = new MetrologicalModel();
        dataPoint2.setHumidity("12.0");
        dataPoint2.setWindSpeed("18.0");

        when(metrologicalRepository.findAllByHumidityAndWindSpeed()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = metrologicalService.calculateCorrelationHumidityAndWindSpeed();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationHumidityPrecipitation() {
        MetrologicalModel dataPoint1 = new MetrologicalModel();
        dataPoint1.setHumidity("10.0");
        dataPoint1.setPrecipitation("15.0");

        MetrologicalModel dataPoint2 = new MetrologicalModel();
        dataPoint2.setHumidity("12.0");
        dataPoint2.setPrecipitation("18.0");

        when(metrologicalRepository.findAllByHumidityAndPrecipitation()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = metrologicalService.calculateCorrelationHumidityAndPrecipitation();
        assertNotNull(result);
    }

    @Test
    public void testCalculateCorrelationWindSpeedPrecipitation() {
        MetrologicalModel dataPoint1 = new MetrologicalModel();
        dataPoint1.setWindSpeed("10.0");
        dataPoint1.setPrecipitation("15.0");

        MetrologicalModel dataPoint2 = new MetrologicalModel();
        dataPoint2.setWindSpeed("12.0");
        dataPoint2.setPrecipitation("18.0");

        when(metrologicalRepository.findAllByWindSpeedAndPrecipitation()).thenReturn(Arrays.asList(dataPoint1, dataPoint2));

        List<Double> result = metrologicalService.calculateCorrelationWindSpeedAndPrecipitation();
        assertNotNull(result);
    }
}
