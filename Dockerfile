# Single-stage Dockerfile for Spring Boot with Py4J Gateway and Python dependencies

FROM maven:3.8.5-openjdk-17 AS build

# Copy the entire project
COPY . /app

# Set working directory
WORKDIR /app

# Build the Spring Boot application
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim

# Set working directory
WORKDIR /app

# Copy the Spring Boot JAR file
COPY --from=build /app/target/*.jar /app/app.jar

# Install Python and virtual environment package
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Set the working directory for Python scripts
WORKDIR /app

# Copy requirements.txt and install Python packages
COPY requirements.txt /app/requirements.txt
RUN python3 -m venv venv && \
    . venv/bin/activate && \
    pip3 install --upgrade pip && \
    pip3 install -r requirements.txt

COPY src/main/java/com/api/air_quality /app/src/main/java/com/api/air_quality

RUN pip3 install python-dotenv

# Expose ports
EXPOSE 3269

# Define environment variable
ENV NAME World

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
