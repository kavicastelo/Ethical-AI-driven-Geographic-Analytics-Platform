from time import sleep

from py4j.java_gateway import JavaGateway
import numpy as np
import pickle
import sys
import requests
import json
# to ignore warnings
import warnings
warnings.filterwarnings('ignore')


class AirHumidityModelPython:
    def __init__(self):
        # Connect to the Py4J gateway server
        self.gateway = JavaGateway()

        # Retrieve the Java instance of the model
        self.java_model = self.gateway.entry_point

        # Load the PMML model
        with open("./AI_Models/airHumidity_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_air_humidity(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)

            # Perform prediction using the loaded model
            prediction = self.model.predict(features_2d)[0]

            spring_boot_url = "http://localhost:3269/api/v1/airQuality/predict/res/airHumidity"

            # Send the prediction to the Spring Boot endpoint
            response = requests.post(spring_boot_url, json=float(prediction))
            print(response.text)

            # Return the prediction
            return prediction
        except Exception as e:
            # Handle any errors during prediction
            return str(e)


if __name__ == "__main__":
    # Create an instance of the Python class
    air_humidity_model = AirHumidityModelPython()
    # test data
    # dummy_features = [[1.5, 2.3, 4.2, 5.1, 7.7, 9.4, 10.0]]
    data_from_java = [float(arg) for arg in sys.argv[1:]]

    result = air_humidity_model.predict_air_humidity(data_from_java)
    # result = air_humidity_model.java_model.Message()
