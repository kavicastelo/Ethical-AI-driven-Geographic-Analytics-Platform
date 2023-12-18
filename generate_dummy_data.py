from faker import Faker
import csv
import random
from datetime import datetime, timedelta

fake = Faker()


# Function to generate dummy air quality data
def generate_air_quality_data(locations, start_time, end_time, frequency):
    with open('air_quality_data.csv', 'w', newline='') as csvfile:
        fieldnames = ['timestamp', 'location', 'pm25', 'pm10', 'co2', 'ozone', 'no2', 'temperature', 'humidity', 'wind_speed']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        current_time = start_time
        while current_time <= end_time:
            for location in locations:
                writer.writerow({
                    'timestamp': current_time.strftime('%Y-%m-%d %H:%M:%S'),
                    'location': location,
                    'pm25': random.uniform(10, 30),
                    'pm10': random.uniform(15, 35),
                    'co2': random.uniform(300, 500),
                    'ozone': random.uniform(20, 40),
                    'no2': random.uniform(5, 15),
                    'temperature': random.uniform(20, 30),
                    'humidity': random.uniform(50, 80),
                    'wind_speed': random.uniform(3, 8)
                })
            current_time += frequency


# Function to generate dummy meteorological data
def generate_meteorological_data(locations, start_time, end_time, frequency):
    with open('meteorological_data.csv', 'w', newline='') as csvfile:
        fieldnames = ['timestamp', 'location', 'temperature', 'humidity', 'wind_speed', 'precipitation']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        current_time = start_time
        while current_time <= end_time:
            for location in locations:
                writer.writerow({
                    'timestamp': current_time.strftime('%Y-%m-%d %H:%M:%S'),
                    'location': location,
                    'temperature': random.uniform(20, 30),
                    'humidity': random.uniform(50, 80),
                    'wind_speed': random.uniform(3, 8),
                    'precipitation': random.uniform(0, 0.5)
                })
            current_time += frequency


# Function to generate dummy land use information
def generate_land_use_data(locations):
    with open('land_use_data.csv', 'w', newline='') as csvfile:
        fieldnames = ['location', 'land_type']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for location in locations:
            writer.writerow({
                'location': location,
                'land_type': random.choice(['Residential', 'Commercial', 'Industrial', 'Park'])
            })


if __name__ == "__main__":
    # Define parameters
    locations = ['CentralPark', 'Downtown', 'SuburbA', 'SuburbB']
    start_time = datetime(2023, 1, 1, 12, 0, 0)
    end_time = datetime(2023, 1, 2, 12, 0, 0)
    frequency = timedelta(minutes=15)

    # Generate dummy datasets
    generate_air_quality_data(locations, start_time, end_time, frequency)
    generate_meteorological_data(locations, start_time, end_time, frequency)
    generate_land_use_data(locations)
