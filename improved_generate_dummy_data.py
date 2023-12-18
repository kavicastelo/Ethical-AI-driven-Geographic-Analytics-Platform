from faker import Faker
import csv
import random
from datetime import datetime, timedelta

fake = Faker()


# Function to generate improved dummy air quality data
def generate_improved_air_quality_data(locations, start_time, end_time, frequency):
    with open('improved_air_quality_data.csv', 'w', newline='') as csvfile:
        fieldnames = ['timestamp', 'location', 'pm25', 'pm10', 'co2', 'ozone', 'no2', 'temperature', 'humidity', 'wind_speed']
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


if __name__ == "__main__":
    # Define parameters
    locations = ['CentralPark', 'Downtown', 'SuburbA', 'SuburbB']
    start_time = datetime(2023, 1, 1, 12, 0, 0)
    end_time = datetime(2023, 1, 2, 12, 0, 0)
    frequency = timedelta(minutes=15)

    # Generate dummy datasets
    generate_improved_air_quality_data(locations, start_time, end_time, frequency)
    generate_improved_meteorological_data(locations, start_time, end_time, frequency)
    generate_improved_land_use_data(locations)
