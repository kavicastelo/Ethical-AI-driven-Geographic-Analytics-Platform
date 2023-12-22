from faker import Faker
import csv
import random
from datetime import datetime, timedelta
import time
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from joblib import dump

fake = Faker()


# Function to generate improved dummy air quality data
def generate_improved_air_quality_data(locations, start_time, end_time, frequency):
    fieldnames = ['timestamp', 'location', 'pm25', 'pm10', 'co2', 'ozone', 'no2', 'temperature', 'humidity',
                  'wind_speed']
    with open('improved_air_quality_data.csv', 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        current_time = start_time
        while current_time <= end_time:
            for location in locations:
                temperature = random.uniform(20, 30)
                humidity = random.uniform(50, 80)

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
                    'co2': temperature + humidity + pollution_increase + random.uniform(-5, 5),
                    'ozone': temperature + humidity + pollution_increase + random.uniform(-2, 2),
                    'no2': temperature + humidity + pollution_increase + random.uniform(-1, 1),
                    'temperature': temperature,
                    'humidity': humidity,
                    'wind_speed': random.uniform(3, 8)
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
                humidity = random.uniform(50, 80)

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


dfAirQuality = pd.read_csv('improved_air_quality_data.csv')
dfMeteorological = pd.read_csv('improved_meteorological_data.csv')

# Separate features and target variable
X1 = dfAirQuality.drop(['timestamp', 'location'], axis=1)
y1 = dfAirQuality['pm25']

X2 = dfMeteorological.drop(['timestamp', 'location'], axis=1)
y2 = dfMeteorological['temperature']

# Split the dataset into training and testing sets
X_train1, X_test1, y_train1, y_test1 = train_test_split(X1, y1, test_size=0.2, random_state=42)
X_train2, X_test2, y_train2, y_test2 = train_test_split(X2, y2, test_size=0.2, random_state=42)

# Train a model (example: Random Forest Regressor)
model1 = RandomForestRegressor()
model1.fit(X_train1, y_train1)

model2 = RandomForestRegressor()
model2.fit(X_train2, y_train2)

# Make predictions
predictions1 = model1.predict(X_test1)
predictions2 = model2.predict(X_test2)

# Evaluate the model
mse1 = mean_squared_error(y_test1, predictions1)
mse2 = mean_squared_error(y_test2, predictions2)
print(f'Mean Squared Error Air Quality: {mse1}')
print(f'Mean Squared Error Meteorological: {mse2}')

# Save the trained model
dump(model1, 'airQualityPm25.joblib')
dump(model2, 'meteorologicalTemperature.joblib')


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
