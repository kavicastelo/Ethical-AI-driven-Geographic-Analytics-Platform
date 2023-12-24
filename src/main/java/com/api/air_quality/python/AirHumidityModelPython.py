from pyspark.sql import SparkSession
from joblib import load
from py4j.java_gateway import JavaGateway
import numpy as np
from pyspark.sql.functions import udf
from pyspark.sql.types import BooleanType


class AirHumidityModelPython:
    def __init__(self, spark):
        # Connect to the Py4J gateway server
        self.gateway = JavaGateway()

        # Retrieve the Java instance of the model
        self.java_model = self.gateway.entry_point

        # Load the PMML model or any other necessary initialization logic
        self.model = load("../../../../../../../AI_Models/airHumidity_model.joblib")

        # Define the UDF for point_inside_polygon
        self.point_inside_polygon_udf = udf(self.point_inside_polygon, BooleanType())

        # Example Spark DataFrame
        self.df = spark.createDataFrame([(1.0, 2.0)], ["lat", "long"])

    def point_inside_polygon(self, lat, long, polygon):
        # Implement your point_inside_polygon logic here
        # Return True if the point is inside the polygon, else False
        pass

    def predict_air_humidity(self, features):
        try:
            # Explicitly convert NumPy array to Python list
            features_list = [float(val) for val in np.array(features)]

            # Perform prediction using the loaded model
            prediction = self.model.predict([features_list])

            # Example usage of UDF for point_inside_polygon
            # Replace lat and long with actual features from the model
            inside_polygon_result = self.df.where(self.point_inside_polygon_udf('lat', 'long', features_list))

            # Pass the prediction and result to the Java side
            return self.java_model.receivePrediction(prediction, inside_polygon_result)
        except Exception as e:
            # Handle any errors during prediction
            return str(e)


def main():
    # Initialize Spark session
    spark = SparkSession.builder.appName("AirHumidityModelApp").getOrCreate()

    # Create an instance of the Python class
    air_humidity_model = AirHumidityModelPython(spark)

    # Example prediction
    features = [1.0, 2.0, 4.0, 5.0, 7.0, 9.0, 10.0]
    result = air_humidity_model.predict_air_humidity(features)
    print(result)

    # Stop the Spark session
    spark.stop()


if __name__ == "__main__":
    main()
