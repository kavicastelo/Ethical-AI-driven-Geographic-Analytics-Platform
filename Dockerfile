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

# Install Python and venv package
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Create and activate virtual environment
RUN python3 -m venv venv
RUN . venv/bin/activate

# Copy the Spring Boot JAR file
COPY --from=build /app/target/*.jar /app/app.jar

# Copy and install Python dependencies
COPY requirements.txt /app
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

# Deactivate virtual environment
RUN deactivate

# Expose ports
EXPOSE 3269

# Define environment variable
ENV NAME World

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
