import joblib
from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class AirHumidityModelPython:
    def __init__(self):
        # Connect to the Py4J gateway server
        self.gateway = JavaGateway()

        # Retrieve the Java instance of the model
        self.java_model = self.gateway.entry_point

        # Load the PMML model
        # self.model = joblib.load("../../../../../../../AI_Models/airHumidity_model.sav")
        with open("../../../../../../../AI_Models/linear_regression_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_air_humidity(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)

            # Perform prediction using the loaded model
            prediction = self.model.predict(features_2d)

            # Pass the prediction to the Java side
            return self.java_model.receivedAirHumidityPrediction(prediction[0])
        except Exception as e:
            # Handle any errors during prediction
            return str(e)


if __name__ == "__main__":
    # Create an instance of the Python class
    air_humidity_model = AirHumidityModelPython()
    # Example: Make a prediction with dummy features
    dummy_features = [[1.5, 2.3, 4.2, 5.1, 7.7, 9.4, 10.0]]
    result = air_humidity_model.predict_air_humidity(dummy_features)
    # result = air_humidity_model.java_model.predictAirHumidity()
    print(result)
