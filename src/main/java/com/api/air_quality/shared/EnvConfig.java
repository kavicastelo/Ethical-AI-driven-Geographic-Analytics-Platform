package com.api.air_quality.shared;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:application.properties")
public class EnvConfig {

    @Value("${python.exe.path}")
    public String PYTHON_EXE_PATH;
}
