from faker import Faker
import csv
import random
from datetime import datetime, timedelta
import time
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.ensemble import AdaBoostRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error
from joblib import dump
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
