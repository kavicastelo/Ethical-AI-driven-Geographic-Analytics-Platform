from py4j.java_gateway import JavaGateway
import numpy as np
import pickle


class AirWindSpeedModelPython:
    def __init__(self):
        self.gateway = JavaGateway()

        self.java_model = self.gateway.entry_point

        with open("../../../../../../../AI_Models/airWind_speed_model.pkl", 'rb') as f:
            self.model = pickle.load(f)

    def predict_air_wind_speed(self, features):
        try:
            features_2d = np.array(features).reshape(1, -1)

            prediction = self.model.predict(features_2d)

            return self.java_model.receivedAirWindSpeedPrediction(prediction[0])
        except Exception as e:

            return str(e)


if __name__ == "__main__":
    air_wind_speed_model = AirWindSpeedModelPython()
    dummy_features = [[1.5, 2.3, 4.2, 5.1, 7.7, 9.4, 10.0]]
    result = air_wind_speed_model.predict_air_wind_speed(dummy_features)
    print(result)
