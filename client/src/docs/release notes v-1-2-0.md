# Release Notes v1.2.0

## Overview

Version 1.2.0 marks a significant milestone as we introduce AI prediction capabilities using pre-trained Python models.
Leveraging the power of Py4J gateway, our application seamlessly communicates between Python and Java to provide
accurate predictions for various factors. This release also includes the implementation of Linear Regression for
training models, extensive documentation, and the introduction of essential dependencies.

## New Features

#### AI Prediction Methods

- **Pre-trained Python Models:** Integrated AI prediction methods using pre-trained Python models for each factor.
- **Py4J Gateway Communication:** Established communication between Python and Java using Py4J gateway.
- **Linear Regression Models:** Implemented Linear Regression to train models for accurate predictions.

#### Create and Train Models

```python
from faker import Faker
import csv
import random
from datetime import datetime, timedelta
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pickle

fake = Faker()


# Function to generate improved dummy air quality data
def generate_improved_air_quality_data(locations, start_time, end_time, frequency):
  fieldnames = ['timestamp', 'location', 'pm25', 'pm10', 'co2', 'ozone', 'no2', 'airTemperature', 'airHumidity',
                'airWind_speed']
  with open('improved_air_quality_data.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    current_time = start_time
    while current_time <= end_time:
      for location in locations:
        temperature = random.uniform(20, 30)
        humidity = random.uniform(15, 20)

        # Simulate rush hour increase in pollution
        if 8 <= current_time.hour <= 10 or 17 <= current_time.hour <= 19:
          pollution_increase = random.uniform(5, 15)
        else:
          pollution_increase = 0

        writer.writerow({
          'timestamp': current_time.strftime('%Y-%m-%d %H:%M:%S'),
          'location': location,
          'pm25': temperature + humidity + pollution_increase + random.uniform(-2, 2),
          'pm10': temperature + humidity + pollution_increase + random.uniform(-2, 2),
          'co2': temperature + humidity + pollution_increase + random.uniform(-3, 3),
          'ozone': temperature + humidity + pollution_increase + random.uniform(-2, 2),
          'no2': temperature + humidity + pollution_increase + random.uniform(-1, 1),
          'airTemperature': temperature,
          'airHumidity': humidity,
          'airWind_speed': random.uniform(3, 8)
        })

      # Sleep for 5 minutes before generating data for the next interval
      # time.sleep(30)
      current_time += frequency


# Function to generate improved dummy meteorological data
def generate_improved_meteorological_data(locations, start_time, end_time, frequency):
  with open('improved_meteorological_data.csv', 'w', newline='') as csvfile:
    fieldnames = ['timestamp', 'location', 'temperature', 'humidity', 'wind_speed', 'precipitation']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    current_time = start_time
    while current_time <= end_time:
      for location in locations:
        temperature = random.uniform(20, 30)
        humidity = random.uniform(15, 20)

        # Simulate higher precipitation during colder months
        precipitation = random.uniform(0, 0.5) + max(0, (25 - temperature) / 25)

        writer.writerow({
          'timestamp': current_time.strftime('%Y-%m-%d %H:%M:%S'),
          'location': location,
          'temperature': temperature,
          'humidity': humidity,
          'wind_speed': random.uniform(3, 8),
          'precipitation': precipitation
        })
      # time.sleep(30)
      current_time += frequency


# Function to generate improved dummy land use information
def generate_improved_land_use_data(locations):
  with open('improved_land_use_data.csv', 'w', newline='') as csvfile:
    fieldnames = ['location', 'land_type']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for location in locations:
      # Simulate variations in land use types
      land_type = random.choice(['Residential', 'Commercial', 'Industrial', 'Park'])
      writer.writerow({
        'location': location,
        'land_type': land_type
      })


# Train and save a model for a given feature
def train_and_save_model(df, feature_name):
  X = df.drop(['timestamp', 'location', feature_name], axis=1)
  y = df[feature_name]

  # Split the dataset into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

  # Train a model (example: Random Forest Regressor)
  model = LinearRegression()
  model.fit(X_train, y_train)

  # Make predictions
  predictions = model.predict(X_test)

  # Evaluate the model
  mse = mean_squared_error(y_test, predictions)
  print(f'Mean Squared Error for {feature_name}: {mse}')

  # Save the trained model
  model_filename = f'{feature_name}_model.pkl'
  with open(model_filename, 'wb') as f:
    pickle.dump(model, f)

  print(f'Model saved as {model_filename}')


if __name__ == "__main__":
  # Define parameters
  locations = ['CentralPark', 'Downtown', 'SuburbA', 'SuburbB']
  start_time = datetime.now()
  end_time = start_time + timedelta(days=1)  # Run for 1 day
  frequency = timedelta(minutes=15)

  # Generate dummy datasets continuously
  generate_improved_air_quality_data(locations, start_time, end_time, frequency)
  generate_improved_meteorological_data(locations, start_time, end_time, frequency)
  generate_improved_land_use_data(locations)

  # Load datasets for each factor
  df_air_quality = pd.read_csv('improved_air_quality_data.csv')
  df_meteorological = pd.read_csv('improved_meteorological_data.csv')

  # Train and save models for each factor
  for feature in ['pm25', 'pm10', 'co2', 'ozone', 'no2', 'temperature', 'humidity', 'airHumidity', 'wind_speed',
                  'precipitation', 'airWind_speed', 'airTemperature']:
    if feature in df_meteorological.columns:
      train_and_save_model(df_meteorological, feature)
    else:
      print(f"Warning: {feature} not found in meteorological dataset. Skipping...")

    if feature in df_air_quality.columns:
      train_and_save_model(df_air_quality, feature)
    else:
      print(f"Warning: {feature} not found in air quality dataset. Skipping...")
```

#### Documentation
- **Code Documentation:** Extensively documented AI prediction methods, Py4J gateway usage, and model training.
- **Statistical API Tests:** Rigorously tested all statistical APIs and documented test cases.
- **API Documentation:** Comprehensive documentation for all APIs, providing usage guidelines and examples.

#### New Dependencies
- **py4j:** Version 0.10.9.7 for seamless Python-Java integration.
- **junit:** Used for testing purposes.
- **pmml-sklearn:** Version 1.7.45 for working with PMML models.
- **slf4j-jdk14:** Version 2.0.9 for logging in the JDK 14 environment.

### Next Steps
In upcoming releases, we plan to enhance the AI prediction capabilities, introduce more advanced machine learning models, and further refine the statistical analysis methods. Your feedback is invaluable as we continue to improve and expand the features of our Air Quality Monitoring Application.

Thank you for your continued support.

[- Kavindu Kokila(Fullstack developer)](mailto:kavindu.kokila.info@gmail.com)
