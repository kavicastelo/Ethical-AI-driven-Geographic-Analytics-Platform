package com.api.air_quality.dto;

public class CorrelationResultDTO {

    private Double correlation;

    public Double getCorrelation() {
        return correlation;
    }

    public void setCorrelation(Double correlation) {
        this.correlation = correlation;
    }

    public CorrelationResultDTO(Double correlation) {
        this.correlation = correlation;
    }
}
